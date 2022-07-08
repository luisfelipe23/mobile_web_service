import React, {createContext, useReducer} from "react";
import books from "../data/books";

const initialState = { books };
const BooksContext = createContext({});

const actions = {
    addBook(state, action) {
        const book = action.payload;
        book.id = Math.random();
        return {
            ...state,
            books: [...state.books, book]
        };
    },
    updateBook(state, action) {
        const updated = action.payload;
        return {
            ...state,
            books: state.books.map(u => u.id === updated.id ? updated : u)
        };
    },
    deleteBook(state, action) {
        const book = action.payload;
        
        return {
            ...state,
             books: state.books.filter(u => u.id != book.id)
        }
    }
}

export const BooksProvider = props => {
    function reducer(state, action) {
        const fn = actions[action.type];
        return fn ? fn(state, action) : state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <BooksContext.Provider value={{
            state, dispatch
        }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContext;