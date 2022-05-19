import '../css/Header.css';

import logo_full from "../assets/logo_full.svg";

import SearchBar from "../js/searchBar";

function Header() {
    return (
        <header className="flex flex-row items-center p-14 h-24 space-x-4 place-content-center">
            <img src={logo_full} alt="logo_full" className="h-20"/>
            <div className="Header-menu flex flex-row items-center space-x-4">
                <div><span>Продукты</span></div>
                <div><span>Услуги</span></div>
                <div><span>Компания</span></div>
                <div><span>Контакты</span></div>
                <div><span>FAQ</span></div>
            </div>
            <SearchBar/>
        </header>
    );
}

export default Header;
