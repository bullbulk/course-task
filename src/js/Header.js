import '../sass/Header.scss';

import {Link} from "react-router-dom";
import MenuButton from "./elements/menu_button";
import SearchBar from "./elements/search_bar";

const menuData = [
    {
        label: "Каталог",
        link: "/catalog",
        chapters: [
            {
                label: "Оборудование",
                link: "/catalog/equipment"
            }, {
                label: "Услуги",
                link: "/catalog/services"
            },
        ]
    }, {
        label: "Компания",
        link: "/company",
        chapters: [
            {
                label: "Новости",
                link: "/company/news"
            }, {
                label: "История",
                link: "/company/history"
            }, {
                label: "Руководство",
                link: "/company/leads"
            }, {
                label: "Достижения",
                link: "/company/achievements"
            }, {
                label: "Документы",
                link: "/company/documents"
            },
        ]
    }, {
        label: "Контакты",
        link: "/contacts"
    }, {
        label: "FAQ",
        link: "/faq"
    }
];

function Header() {
    return (
        <header className="mb-4 lg:mb-0">
            <div className="Header">
                <Link to="/">
                    <img src="/assets/logo_full.svg" alt="logo_full" className="h-20"/>
                </Link>
                <div className="header-menu hidden lg:flex flex-row items-center space-x-4 z-50">
                    {menuData.map((item, index) =>
                        <div key={index}>
                            {MenuButton(item.label, item.link, item.chapters)}
                        </div>
                    )}

                </div>
                <div className="m-header-menu block h-24 px-8">
                    <img className="h-8 w-8" src="/assets/icons/menu.svg" alt="menu_icon"/>
                    <img className="h-8 w-8" src="/assets/icons/cart_menu.svg" alt="cart_menu"/>
                </div>
                <div className="hidden lg:flex">
                    <SearchBar/>
                </div>
            </div>

            <hr className="hidden lg:block mb-6 lg:-mt-4 mt-4"/>
        </header>
    );
}

export default Header;
