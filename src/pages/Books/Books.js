import Card from "../../components/Card/Card";
import { data } from '../../data/data';

import './Books.scss'

const Books = () => {
    return <div className='books__container'>
        {data.map(book => <Card key={book.id} book={book} />)}
    </div>
}

export default Books
