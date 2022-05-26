import banner_1 from "../../assets/banners/banner_1.svg";
import news_1 from "../../assets/banners/news_1.svg";
import news_2 from "../../assets/banners/news_2.svg";
import news_3 from "../../assets/banners/news_3.svg";
import logo from "../../assets/logo.svg";
import adv_1 from "../../assets/advantages/advantage_1.svg";
import adv_2 from "../../assets/advantages/advantage_2.svg";
import adv_3 from "../../assets/advantages/advantage_3.svg";
import adv_4 from "../../assets/advantages/advantage_4.svg";
import cart from "../../assets/icons/cart.svg";
import cup from "../../assets/icons/cup.svg";
import ecommerce from "../../assets/icons/ecommerce.svg";
import forklift from "../../assets/icons/forklift.svg";
import web_store from "../../assets/raster/web_store.png";
import cct from "../../assets/raster/cct.png";
import pos from "../../assets/raster/pos.png";

import "../../sass/Content.scss";
import {Link} from "react-router-dom";

// import {Swiper, SwiperSlide} from "swiper/react";
//
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
//
// // import required modules
// import {Navigation} from "swiper";
//
// const images = [
//     {source: banner_1},
//     {source: banner_2},
//     {source: banner_3},
//     {source: banner_4}
// ];

function Main() {
    return (
        <section id="main">
            <div id="banners" className="px-8 sm:px-12">
                <div className="flex flex-row min-h-12 justify-between gap-20">
                    <Link to="/products" className="hidden sm:block sm:w-3/5">
                        {/*<Swiper navigation={true} modules={[Navigation]} className="mySwiper">*/}
                        {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
                        {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
                        {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
                        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
                        {/*</Swiper>*/}
                        <img src={banner_1} alt="banner_1"/>
                    </Link>
                    <div className="flex flex-col h-80 sm:h-auto w-full sm:w-2/5 justify-between"
                         height={banner_1.height}>
                        <div className="title">Не пропустите</div>
                        <Link to="/company/news">
                            <div className="news-row">E-commerce</div>
                            <img src={news_1} alt="news_1"/>
                        </Link>
                        <Link to="/company/news">
                            <div className="news-row">Услуги</div>
                            <img src={news_2} alt="news_2"/>
                        </Link>
                        <Link to="/company/news">
                            <div className="news-row">Новинки</div>
                            <img src={news_3} alt="news_3"/>
                        </Link>
                    </div>
                </div>
            </div>

            <div id="about">
                <div className="title sm:px-12">О компании</div>
                <div className="block sm:flex flex-row mb-4 sm:mb-0 gap-10 align-middle sm:px-12">
                    <div className="text">
                        КАССЦЕНТР – IT-компания, ведущий российский производитель оборудования и
                        разработчик программного обеспечения для автоматизации таких сфер как ритейл, e-commerce,
                        услуги,
                        включая HoReCa, транспорт, ЖКХ и многое другое. Мы предоставляем широкий ассортимент продуктов и
                        ПО
                        для решения задач, связанных с маркировкой товаров: от ввода в оборот и отгрузки до маркировки
                        остатков, приёмки и продажи покупателю. В линейке – более 20 онлайн-касс, соответствующих
                        требованиям 54-ФЗ, принципиально новый класс контрольно-кассовой техники – «Ньюджеры»,
                        смарт-терминалы. Облачный сервис компании, «АТОЛ Онлайн», является первым и одним из самых
                        крупных в
                        РФ среди KaaS-решений («касса как сервис») по занимаемой доле рынка. Также АТОЛ поставляет
                        POS-оборудование и решения для автоматизации склада. Мы работаем через дистрибуторскую сеть,
                        которая
                        насчитывает свыше 2 000 партнеров и субпартнеров.
                    </div>
                    <img className="hidden sm:block w-1/4" src={logo} alt="logo"/>
                </div>

                <div id="advantages">
                    <div className="card">
                        <div className="flex flex-row gap-4">
                            <img src={adv_1} className="w-24" alt="adv_1"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">20</div>
                                <div className="t-small">лет</div>
                            </div>
                        </div>
                        <div>Опыта в разработке, оборудования и ПО</div>
                    </div>
                    <div className="card">
                        <div className="flex flex-row gap-4">
                            <img src={adv_2} className="w-24" alt="adv_2"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">2000</div>
                                <div className="t-small">партнеров</div>
                            </div>
                        </div>
                        <div>Прдеставленных во всех регионах страны</div>
                    </div>
                    <div className="card">
                        <div className="flex flex-row gap-4">
                            <img src={adv_3} className="w-24" alt="adv_3"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">1,2</div>
                                <div className="t-small">миллиона</div>
                            </div>
                        </div>
                        <div>Единиц контрольно-кассовой техники установлено</div>
                    </div>
                    <div className="card">
                        <div className="flex flex-row gap-4">
                            <img src={adv_4} className="w-24" alt="adv_4"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">800</div>
                                <div className="t-small">сервис-центров</div>
                            </div>
                        </div>
                        <div>В 230 городах России</div>
                    </div>
                </div>
                <Link to="/company/about" className="m-auto">
                    <button className="w-fit mb-8 sm:mb-auto">Узнать о нас больше</button>
                </Link>
            </div>

            <hr className="my-6"/>

            <div className="flex flex-col sm:flex-row px-8 sm:px-60 gap-8 sm:gap-24">
                <div className="flex flex-col basis-3/4 gap-2">
                    <div className="title">Сферы применения</div>
                    <div className="subtitle">Мы предостовляем оборудование и ПО для автоматизации различных сфер
                        бизнеса
                    </div>
                    <div className="flex gap-4 mt-6 -mx-4 sm:mx-0">
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src={cart} alt="cart"/>
                            <div className="text-xs font-bold">Retail</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src={cup} alt="cup"/>
                            <div className="text-xs font-bold">HoReCa</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src={forklift} alt="forklift"/>
                            <div className="text-xs font-bold">Склад</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src={ecommerce} alt="ecommerce"/>
                            <div className="text-xs font-bold">E-Commerce</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="title">Соответствие закону</div>
                    <div className="subtitle">Наше оборудование и программные продукты всегда соответствуют последним
                        изменениям законодательства
                    </div>
                    <div className="flex flex-col justify-center text-blue pl-8 sm:pl-24 bg-gray h-24 gap-1">
                        <div className="text-2xl font-bold">Маркировка</div>
                        <div className="text-sm">Как подобрать оборудование и соответствовать законам?</div>
                    </div>
                    <div className="flex flex-col justify-center text-blue pl-8 sm:pl-24 bg-gray h-24 gap-1">
                        <div className="text-2xl font-bold">54-ФЗ</div>
                        <div className="text-sm">Как выполнить новые требования 54-ФЗ?</div>
                    </div>
                </div>
            </div>

            <hr className="my-6"/>

            <div className="flex flex-col px-8 sm:px-36 mt-20 sm:mt-0 justify-center">
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                    <div className="relative">
                        <Link to="/products">
                            <img src={web_store} className="object-cover w-full" alt="web_store"/>
                            <div
                                className="overflow-center w-72 font-bold text-white text-sm p-1 text-center bg-orange bg-opacity-70">
                                Кассы для интернет-магазина
                            </div>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link to="/products">
                            <img src={pos} className="object-cover w-full" alt="web_store"/>
                            <div
                                className="overflow-center w-72 font-bold text-white text-sm p-1 text-center bg-orange bg-opacity-70">
                                POS-системы
                            </div>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link to="/products">
                            <img src={cct} className="object-cover w-full" alt="web_store"/>
                            <div
                                className="overflow-center w-72 font-bold text-white text-sm p-1 text-center bg-orange bg-opacity-70">
                                Контрольно-кассовая техника
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to="/products" className="m-auto">
                    <button className="w-fit mt-6 sm:mt-12">Перейти в каталог</button>
                </Link>
            </div>
        </section>
    );
}

export default Main;