import types from "./types";

const INITIAL_STATE = {
    listName: 'My favorite books',
    list: [
        'The Lord of the Rings', 'The Hobbit', 'The Silmarillion', 'The Children of Hurin'
    ]
}

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_BOOK:
            return {
                ...state,
                list: [...state.list, action.item]
            }
        case types.RESET_BOOKS:
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }
}

export default booksReducer;