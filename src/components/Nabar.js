import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Best Monga List</h1>
            <p>Currently you have {books.length} sets of Monga</p>
        </div>);
}

export default Navbar;