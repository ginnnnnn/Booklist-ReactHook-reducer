import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : [];
        //check if any books store in local storage and store by parsing with JSON.parse(data);
    })
    //const [stateName,dispatch]=useReducer(reducer,initialState)
    //useReducer has third argument as an function which return a value as initial state
    //()=>{return [{title:'one piece',author:"oda"}]}
    //in here we use localstorage and useEffect() to store input book

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
        //everytime when books state changed we store in our localstorage 
        //by using JSON.stringif(data),localstorage only take string
    }, [books])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;