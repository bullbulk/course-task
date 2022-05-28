import '../sass/Footer.scss';

import {Link} from "react-router-dom";


function Footer() {
    return (
        <footer className="Footer">
            <div
                className="flex flex-row flex-wrap lg:flex-col columns-2 lg:columns-auto gap-6 items-start text-sm max-w-sm">
                <Link to="/">
                    <img src="/assets/logo_full_dark.svg" alt="logo_full_dark"
                         className="h-20"/>
                </Link>
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
            <div className="flex flex-col min-w-fit max-w-full gap-4 items-center lg:items-stretch">
                <div className="Socials">
                    <a href="https://vk.com">
                        <img src="/assets/icons/vk.svg"alt="Вконтакте"/>
                    </a>
                    <a href="https://twitter.com">
                        <img src="/assets/icons/twitter.svg" alt="Twitter"/>
                    </a>
                    <a href="https://telegram.com">
                        <img src="/assets/icons/telegram.svg" alt="Telegram"/></a>
                    <a href="https://youtube.com">
                        <img src="/assets/icons/youtube.svg" alt="YouTube"/>
                    </a>
                </div>
                <div className="text-lblue">© 2001-2022 Компания КАССЦЕНТР</div>
            </div>
        </footer>
    );
}

export default Footer;
