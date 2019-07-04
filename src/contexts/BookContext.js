import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'One piece', author: 'Oda Eiichiro', id: '1' },
        { title: 'Naruto', author: ' Masashi Kishimoto', id: '2' },
        { title: 'One Punch-Man', author: 'Makoto Furukawa', id: '3' },
    ]);

    const addBook = (title, author) => {
        setBooks([...books, { title: title, author: author, id: uuid() }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => {
            return book.id !== id
        }))
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;