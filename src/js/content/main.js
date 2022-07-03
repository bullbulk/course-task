import "../../sass/Content.scss";
import {Link} from "react-router-dom";
import CustomCarousel from "../elements/carousel";


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
        <section>
            <div id="banners" className="px-8 lg:px-12">
                <div className="flex flex-row min-h-12 justify-between gap-20">
                    <div className="hidden lg:block lg:w-3/5">
                        <CustomCarousel/>
                    </div>
                    <div className="flex flex-col w-full gap-4 lg:w-2/5 justify-between">
                        <div className="title">Не пропустите</div>
                        <Link to="/company/news">
                            <div className="news-row">E-commerce</div>
                            <img src="/assets/banners/news_1.svg" alt="news_1"/>
                        </Link>
                        <Link to="/company/news">
                            <div className="news-row">Услуги</div>
                            <img src="/assets/banners/news_2.svg" alt="news_2"/>
                        </Link>
                        <Link to="/company/news">
                            <div className="news-row">Новинки</div>
                            <img src="/assets/banners/news_3.svg" alt="news_3"/>
                        </Link>
                    </div>
                </div>
            </div>

            <div id="about">
                <div className="title xl:px-12">О компании</div>
                <div className="block lg:flex flex-row mb-4 lg:mb-0 gap-10 align-middle xl:px-12">
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
                    <img className="hidden lg:block w-1/4" src="/assets/logo.svg" alt="logo"/>
                </div>

                <div id="advantages">
                    <div className="card">
                        <div className="flex flex-row gap-4 w-fit">
                            <img src="/assets/advantages/advantage_1.svg"
                                 className="w-24" alt="adv_1"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">20</div>
                                <div className="t-small">лет</div>
                            </div>
                        </div>
                        <div className="w-2/3">Опыта в разработке, оборудования и ПО</div>
                    </div>
                    <div className="card">
                        <div className="flex flex-row gap-4 w-fit">
                            <img src="/assets/advantages/advantage_2.svg"
                                 className="w-24" alt="adv_2"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">2000</div>
                                <div className="t-small">партнеров</div>
                            </div>
                        </div>
                        <div className="w-2/3">Представленных во всех регионах страны</div>
                    </div>
                    <div className="card">
                        <div className="flex flex-row gap-4 w-fit">
                            <img src="/assets/advantages/advantage_3.svg"
                                 className="w-24" alt="adv_3"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">1,2</div>
                                <div className="t-small">миллиона</div>
                            </div>
                        </div>
                        <div className="w-2/3">Единиц контрольно-кассовой техники установлено</div>
                    </div>
                    <div className="card">
                        <div className="flex flex-row gap-4 w-fit">
                            <img src="/assets/advantages/advantage_4.svg"
                                 className="w-24" alt="adv_4"/>
                            <div className="flex flex-col justify-between">
                                <div className="t-large">800</div>
                                <div className="t-small">сервис-центров</div>
                            </div>
                        </div>
                        <div className="w-2/3">В 230 городах России</div>
                    </div>
                </div>
                <Link to="/company/about" className="m-auto">
                    <button className="w-fit mb-8 lg:mb-auto">Узнать о нас больше</button>
                </Link>
            </div>

            <hr/>

            <div className="flex flex-col lg:flex-row px-8 xl:px-60 lg:px-40 gap-8 lg:gap-24">
                <div className="flex flex-col basis-3/4 gap-2">
                    <div className="title">Сферы применения</div>
                    <div className="subtitle">Мы предостовляем оборудование и ПО для автоматизации различных сфер
                        бизнеса
                    </div>
                    <div className="flex gap-4 mt-6 -mx-4 lg:mx-0">
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src="/assets/icons/cart.svg" alt="cart"/>
                            <div className="text-xs font-bold">Retail</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src="/assets/icons/cup.svg" alt="cup"/>
                            <div className="text-xs font-bold">HoReCa</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src="/assets/icons/forklift.svg" alt="forklift"/>
                            <div className="text-xs font-bold">Склад</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-0 w-1/3">
                            <img src="/assets/icons/ecommerce.svg" alt="ecommerce"/>
                            <div className="text-xs font-bold">E-Commerce</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="title">Соответствие закону</div>
                    <div className="subtitle">Наше оборудование и программные продукты всегда соответствуют последним
                        изменениям законодательства
                    </div>
                    <div className="flex flex-col justify-center text-blue pl-8 lg:pl-24 bg-gray h-24 gap-1">
                        <div className="text-2xl font-bold">Маркировка</div>
                        <div className="text-sm">Как подобрать оборудование и соответствовать законам?</div>
                    </div>
                    <div className="flex flex-col justify-center text-blue pl-8 lg:pl-24 bg-gray h-24 gap-1">
                        <div className="text-2xl font-bold">54-ФЗ</div>
                        <div className="text-sm">Как выполнить новые требования 54-ФЗ?</div>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="flex flex-col px-8 lg:px-36 mt-20 lg:mt-0 justify-center">
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                    <div className="relative hover-scale">
                        <Link to="/catalog/equipment">
                            <img src="/assets/raster/web_store.png"
                                 className="object-cover w-full"
                                 alt="web_store"/>
                            <div
                                className="overflow-center w-72 font-bold text-white text-sm p-1 text-center bg-orange bg-opacity-70">
                                Кассы для интернет-магазина
                            </div>
                        </Link>
                    </div>
                    <div className="relative hover-scale">
                        <Link to="/catalog/equipment">
                            <img src="/assets/raster/pos.png"
                                 className="object-cover w-full"
                                 alt="pos"/>
                            <div
                                className="overflow-center w-72 font-bold text-white text-sm p-1 text-center bg-orange bg-opacity-70">
                                POS-системы
                            </div>
                        </Link>
                    </div>
                    <div className="relative hover-scale">
                        <Link to="/catalog/equipment">
                            <img src="/assets/raster/cct.png"
                                 className="object-cover w-full"
                                 alt="cct"/>
                            <div
                                className="overflow-center w-72 font-bold text-white text-sm p-1 text-center bg-orange bg-opacity-70">
                                Контрольно-кассовая техника
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to="/catalog" className="m-auto">
                    <button className="w-fit mt-6 lg:mt-12">Перейти в каталог</button>
                </Link>
            </div>
        </section>
    );
}

export default Main;