import React from 'react'
import Card from "../../components/Card/Card";
import { data } from '../../data/data';
import { BooksContainer } from './Books.styled';

const Books = () => {
    return <BooksContainer>
        {data.map(book => <Card key={book.id} book={book} />)}
    </BooksContainer>
}

export default Books
