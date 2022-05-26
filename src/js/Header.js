import '../sass/Header.scss';

import logo_full from "../assets/logo_full.svg";
import menu_icon from "../assets/icons/menu.svg";
import cart_menu from "../assets/icons/cart_menu.svg";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="mb-4 sm:mb-0">
            <div className="Header">
                <Link to="/"><img src={logo_full} alt="logo_full" className="h-20"/></Link>
                <div className="header-menu hidden sm:flex flex-row items-center space-x-4">
                    <Link to="/products">
                        <div><span>Услуги</span></div>
                    </Link>
                    <Link to="/company">
                        <div><span>Компания</span></div>
                    </Link>
                    <Link to="/contacts">
                        <div><span>Контакты</span></div>
                    </Link>
                    <Link to="/faq">
                        <div><span>FAQ</span></div>
                    </Link>
                </div>
                <div className="m-header-menu block h-24 px-8">
                    <img className="h-8 w-8" src={menu_icon} alt="menu_icon"/>
                    <img className="h-8 w-8" src={cart_menu} alt="cart_menu"/>
                </div>
                <div className="hidden sm:flex">
                    <SearchBar/>
                </div>
            </div>

            <hr className="sm:-mt-4 mt-4"/>
        </header>
    );
}

function SearchBar() {
    return (
        <div className="flex justify-center flex-row">
            <div className="xl:w-full">
                <div className="input-group flex flex-row items-stretch w-full rounded align-middle">
        <span
            className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray text-center whitespace-nowrap rounded">
        <svg aria-hidden="true" focusable="false"
             className="w-4 h-8"
             role="img"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path className="fill-blue"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
        </span>
                    <input type="search"
                           className="form-control flex-auto h-8 min-w-0 m-auto block w-full px-3 py-1.5 text-base text-sm text-gray bg-white bg-clip-padding border border-solid border-gray transition focus:text-blue focus:bg-white focus:border-blue focus:outline-none"
                           placeholder="Поиск" aria-label="Search">
                    </input>
                </div>
            </div>
        </div>
    );
}

export default Header;
