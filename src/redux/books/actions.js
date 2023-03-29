import types from "./types";

const add = (item) => ({
    type: types.ADD_BOOK,
    item
});

const reset = (item) => ({
    type: types.RESET_BOOKS,
    item
});

export default {
    add,
    reset
}
