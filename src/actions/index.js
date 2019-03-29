import { FETCH_BOOKDATA } from './types';

// import { SAVE_COMMENT, FETCH_COMMENTS } from './types'
// import axios from 'axios'

// export function saveComment(comment) {
//     return {
//         type: SAVE_COMMENT,
//         payload: comment
//     }
// }

export function fetchBookData() {
    const bookData = require('/Users/conrad/Learning/projects/my-library/src/data/sampleBookData.json')
    return {
        type: FETCH_BOOKDATA,
        payload: bookData
    }
}
