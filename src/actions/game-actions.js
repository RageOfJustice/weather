import ActionTypes from "../constants/ActionTypes";

export function startGame(cardsCount = 18) {
    return {
        type: ActionTypes.START_GAME,
        cardsCount
    };
}

export function openCard(id) {
    return {
        type: ActionTypes.OPEN_CARD,
        id
    };
}

export function checkPair() {
    return {
        type: ActionTypes.CHECK_PAIR,
    };
}

export function showAll() {
    return {
        type: ActionTypes.SHOW_ALL,
    };
}

export function hideAll() {
    return {
        type: ActionTypes.HIDE_ALL,
    };
}
