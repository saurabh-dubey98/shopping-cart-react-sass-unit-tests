import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Navbar } from './components';
import { Books, BookDetails, Cart, ThankU4Shopping, Home } from './pages';

import './App.scss'

const theme = {
    colors: {
        primary: '#5C7AEA',
        very_dark: '#000000',
        dark: '#303841',
        less_dark: '#787A91',
        bright: '#EEEEEE'
    },

    button: {
        heroBtnPadding: '10px 20px'
    }
}

const App = () => {
    return <ThemeProvider theme={theme}>
        <Navbar />
        <main className='app__container'>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:productId" element={<BookDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<ThankU4Shopping />} />
            </Routes>
        </main>
    </ThemeProvider>
}

export default App
