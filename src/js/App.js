import React, {Component} from 'react';
import {Navigate, Route, Routes} from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer"
import Main from "./content/main";
import Products from "./content/products";
import {About, News} from "./content/company";
import Contacts from "./content/contacts";
import Faq from "./content/faq";
import Product from "./content/product";

import ScrollToTop from "./elements/scroll_to_top";

class App extends Component {
    render() {
        const {history} = this.props

        return (
            <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
                <Header/>
                <ScrollToTop>
                    <Routes>
                        <Route history={history} path='/' element={<Main/>}/>
                        <Route history={history} path='/products' element={<Products/>}/>
                        <Route history={history} path='/contacts' element={<Contacts/>}/>
                        <Route history={history} path='/faq' element={<Faq/>}/>
                        <Route history={history} path='/company/about' element={<About/>}/>
                        <Route history={history} path='/company/news' element={<News/>}/>
                        <Route history={history} path='/products/:id' element={<Product/>}/>
                        <Route history={history} path='/company' element={<Navigate replace to="/company/about"/>}/>
                    </Routes>
                </ScrollToTop>
                <Footer/>
            </div>
        );
    }
}

export default App
