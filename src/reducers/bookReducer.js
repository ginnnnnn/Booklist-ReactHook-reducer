import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
    //state is books array action is an obj name action contain {type:"",payload}
    switch (action.type) {
        case "ADD_BOOK":
            //in here action is {type:"ADD_BOOK",book:{title:"one piece",author:"oda"}}
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }];
        case "REMOVE_BOOK":
            // in here action is {type:"REMOVE_BOOK",id:passing id}
            return state.filter(book => {
                return book.id !== action.id
            });
        default:
            return state;
    }
}