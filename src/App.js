import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { AppContainer } from './GlobalStyles'
import { Navbar, Footer } from './components';
import { Books, BookDetails, Cart, ThankU4Shopping } from './pages';
import { Hero } from './containers';

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
        <AppContainer>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Hero />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:productId" element={<BookDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<ThankU4Shopping />} />
            </Routes>
            <Footer />
        </AppContainer>
    </ThemeProvider>
}

export default App
