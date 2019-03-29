import { FETCH_BOOKDATA } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BOOKDATA:
            const books = action.payload.bookData
            return [books];
        default:
            return state
    }
}
