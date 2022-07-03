import React, {Component} from 'react';
import {Navigate, Route, Routes} from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer"
import Main from "./content/main";
import Catalog, {Equipment, Services, SmartTerminals} from "./content/catalog";
import {About, Achievements, Documents, History, Leads, News} from "./content/company";
import Contacts from "./content/contacts";
import Faq from "./content/faq";
import Product from "./content/product";

import ScrollToTop from "./elements/scroll_to_top";
import Sitemap from "./content/sitemap";

class App extends Component {
    render() {
        const {history} = this.props

        return (
            <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
                <Header/>
                <ScrollToTop>
                    <Routes>
                        <Route history={history} path="/" element={<Main/>}/>

                        <Route history={history} path="/catalog" element={<Catalog/>}/>
                        <Route history={history} path="/catalog/equipment" element={<Equipment/>}/>
                        <Route history={history} path="/catalog/services" element={<Services/>}/>
                        <Route history={history} path="/catalog/equipment/smart-terminals" element={<SmartTerminals/>}/>
                        <Route history={history} path="/catalog/:id" element={<Product/>}/>

                        <Route history={history} path="/company/about" element={<About/>}/>
                        <Route history={history} path="/company/news" element={<News/>}/>
                        <Route history={history} path="/company/history" element={<History/>}/>
                        <Route history={history} path="/company/leads" element={<Leads/>}/>
                        <Route history={history} path="/company/achievements" element={<Achievements/>}/>
                        <Route history={history} path="/company/documents" element={<Documents/>}/>
                        <Route history={history} path="/company" element={<Navigate replace to="/company/about"/>}/>

                        <Route history={history} path="/contacts" element={<Contacts/>}/>
                        <Route history={history} path="/faq" element={<Faq/>}/>
                        <Route history={history} path="/sitemap" element={<Sitemap/>}/>
                    </Routes>
                </ScrollToTop>
                <Footer/>
            </div>
        );
    }
}

export default App
