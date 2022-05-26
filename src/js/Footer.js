import '../sass/Footer.scss';
import logo_full_dark from "../assets/logo_full_dark.svg";

import vk from "../assets/icons/vk.svg";
import twitter from "../assets/icons/twitter.svg";
import telegram from "../assets/icons/telegram.svg";
import youtube from "../assets/icons/youtube.svg";
import {Link} from "react-router-dom";


function Footer() {
    return (
        <footer className="Footer">
            <div
                className="flex flex-row flex-wrap sm:flex-col columns-2 sm:columns-auto gap-6 items-start text-sm max-w-sm">
                <Link to="/"><img src={logo_full_dark} alt="logo_full_dark" className="h-20"/></Link>
                <div className="text-2xl -mt-6">+7 (912) 956-23-43</div>
                <div>ООО «КАССЦЕНТР», ИНН 5-4920424, 1392, Москва, ул. Пушкина, д. 12, стр. 169, этаж 43</div>
                <div>График работы: пн-пт 10:00-18:00. сб-вс: выходные</div>
            </div>
            <div className="map">
                <div className="col">
                    <div className="row">
                        <Link to="/products">
                            <div className="title">Продукты</div>
                        </Link>
                        <div className="text-lblue text-sm">
                            <div>Оборудование</div>
                            <div>Программное обеспечение</div>
                        </div>
                    </div>
                    <div className="row">
                        <Link to="/products">
                            <div className="title">Услуги</div>
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/company">
                            <div className="title">Компания</div>
                        </Link>
                        <div className="text-lblue text-sm">
                            <div>История</div>
                            <div>Новости</div>
                            <div>Отзывы</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <Link to="/contacts">
                            <div className="title">Контакты</div>
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/faq">
                            <div className="title">FAQ</div>
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/sitemap">
                            <div className="title">Карта сайта</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-md w-full"></div>
            <div className="flex flex-col min-w-fit max-w-full gap-4 items-center sm:items-stretch">
                <div className="Socials">
                    <a href="https://vk.com"><img src={vk} alt="Вконтакте"></img></a>
                    <a href="https://twitter.com"><img src={twitter} alt="Twitter"></img></a>
                    <a href="https://telegram.com"><img src={telegram} alt="Telegram"></img></a>
                    <a href="https://youtube.com"><img src={youtube} alt="YouTube"></img></a>
                </div>
                <div className="text-lblue">© 2001-2022 Компания КАССЦЕНТР</div>
            </div>
        </footer>
    );
}

export default Footer;
