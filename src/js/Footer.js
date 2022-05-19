import '../css/Footer.css';
import logo_full_dark from "../assets/logo_full_dark.svg";

function Footer() {
    return (
        <footer className="Footer flex flex-row bottom-auto bg-blue px-12 py-6 static bottom-0 text-white">
            <div className="flex flex-col gap-6 items-start text-sm max-w-sm">
                <img src={logo_full_dark} alt="logo_full_dark" className="h-20"/>
                <div className="text-2xl -mt-6">+7 (912) 956-23-43</div>
                <div>ООО «КАССЦЕНТР», ИНН 5-4920424, 1392, Москва, ул. Пушкина, д. 12, стр. 169, этаж 43</div>
                <div>График работы: пн-пт 10:00-18:00. сб-вс: выходные</div>
            </div>
            <div className="flex flex-row gap-4 items-start">
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl underline">Продукты</div>
                        <div className="text-lblue text-sm">
                            <div>Оборудование</div>
                            <div>Программное обеспечение</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl underline">Услуги</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl underline">Компания</div>
                        <div className="text-lblue text-sm">
                            <div>История</div>
                            <div>Новости</div>
                            <div>Отзывы</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl underline">Контакты</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl underline">FAQ</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl underline">Карта сайта</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
