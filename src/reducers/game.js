import ActionTypes from "../constants/ActionTypes";
import {Record, List} from "immutable";

const Card = Record({
	opened: false,
	hidden: false,
	value: "",
	id: -1
});

const initialState = Record({
	deck: new List(),
	cardsCount: -1,
	cardsLeft: Infinity,
	openedCards: new List(),
	currentDeck: new List(),
	score: 0
});

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

// получение случайных карт
function getRandomDeck(deck, cardsCount){
	const halfCount = cardsCount / 2;
	const indexes = getRandom(deck, halfCount);
	let res = [];
	indexes.forEach((val, key) => {
		res.push(new Card({
			id: key,
			value: val,
		}));
		res.push(new Card({
			id: key + halfCount,
			value: val,
		}));
	})
	return res.sort(() => Math.random() - 0.5); // нужно перемешать карты;
}

// функция получения колоды (если нужны будут другие значения)
function getDeck() {
	let res = [];
	const suits = ["C","D","H","S"],
				lower = [...Array(10).keys()],
				higher = ["A", "J", "K", "Q"];
	lower.splice(1,1); // нет '1' в колоде
	suits.forEach(suit => {
		lower.forEach(l => res.push(l+suit));
		higher.forEach(h => res.push(h+suit));
	});
	return res;
}

// обнуляет счет и обновляет колоды
function startGame(state, action) {
	return state.withMutations(game => {
		const deck = getDeck().sort(() => Math.random() - 0.5); // нужно перемешать карты
		game
			.set("score", 0)
			.set("deck", new List(deck))
			.set("cardsLeft", action.cardsCount)
			.set("cardsCount", action.cardsCount)
			.set("openedCards", new List())
			.set("currentDeck", new List(getRandomDeck(deck, action.cardsCount)))
	});
}

function openCard(state, action) {
	let card = state.get("currentDeck").find(val => val.get("id") === action.id);
	if (card.get("opened")) return state;
	card = card.set("opened", true);
	const cardIndex = state.get("currentDeck").findIndex(val => val.get("id") === card.get("id"));
	state = state.withMutations(game => {
		game
			.update("openedCards", cards => cards.push(card))
			.setIn(["currentDeck", cardIndex], card)
	});
	return state;
}

function checkPair(state){
	const cards = state.get("openedCards");
	if(cards.count() !== 2) return state;
	let first = cards.get(0), second = cards.get(1);
	if(first.get("value") === second.get("value")){
		first = first.merge({hidden: true, opened: false});
		second = second.merge({hidden: true, opened: false});
		state = state.withMutations(game => {
			game
				.update("score", score => {
					const count = game.get("currentDeck").count(card => card.get("hidden"));
					const newScore = score + 42 * (count === 0 ? 2 : count);
					return newScore;
				})
				.setIn(["currentDeck", game.get("currentDeck").findIndex(val => val.get("id") === first.get("id"))], first)
				.setIn(["currentDeck", game.get("currentDeck").findIndex(val => val.get("id") === second.get("id"))], second)
				.update("cardsLeft", left => left -= 2)
		});
	} else {
		first = first.set("opened", false);
		second = second.set("opened", false);
		state = state.withMutations(game => {
			game
				.update("score", score => {
					const count = game.get("currentDeck").count(card => !card.get("hidden"));
					const newScore = score - 42 * (count === 0 ? 2 : count);
					return newScore < 0 ? 0 : newScore;
				})
				.setIn(["currentDeck", game.get("currentDeck").findIndex(val => val.get("id") === first.get("id"))], first)
				.setIn(["currentDeck", game.get("currentDeck").findIndex(val => val.get("id") === second.get("id"))], second)
		});
	}
	state = state.set("openedCards", new List());
	return state;
}

function game(state = new initialState(), action) {
	switch (action.type) {
		case ActionTypes.OPEN_CARD:
			return openCard(state, action);
		case ActionTypes.CHECK_PAIR:
			return checkPair(state);
		case ActionTypes.START_GAME:
			return startGame(state, action);
		case ActionTypes.SHOW_ALL:
			return state.update("currentDeck", list => list.map(card => card.set("opened", true)));
		case ActionTypes.HIDE_ALL:
			return state.update("currentDeck", list => list.map(card => card.set("opened", false)));
		default:
			return state;
	}
}


export default game;
