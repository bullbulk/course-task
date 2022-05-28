import "../../sass/Content.scss";

import {useLocation} from "react-router-dom";
import {smProductCard} from "../elements/product_card";

import items from "../const";
import ProductDescription from "../elements/description";


const buy_options = [
    "ФН на 15 мес",
    "ФН на 36 мес.",
    "Эквайринг"
]

const recommended_prods = [
    {title: "ФН на 15 мес.", img: "/assets/raster/product_7.png", price: "10 990 Р"},
    {title: "КАССА Ф", img: "/assets/raster/product_8.png", price: "15 000 Р"},
    {title: "АТОЛ 11Ф", img: "/assets/raster/product_9.png", price: "23 500 Р"},
    {title: "Меркурий-185Ф", img: "/assets/raster/product_10.png", price: "7 500 Р"},
];


function Product() {
    const path = useLocation().pathname.split("/");
    let id = path[path.length - 1];

    let item = items[id];

    let product_image =
        <img
            className="w-full lg:w-1/3 h-fit bg-pure-white shadow-lg"
            src={item["img"]}
            alt={item["img"]}
        />;

    return (
        <section id="product">
            <div className="path">Главная / Продукты / Смарт-терминалы</div>
            <div className="title">{item["title"]}</div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-12 w-full">
                {product_image}
                <div className="flex flex-col basis-3/5 justify-between gap-6">
                    <div
                        className="flex flex-col lg:flex-row bg-pure-white shadow-lg gap-4 lg:gap-12 items-center lg:items-stretch justify-between py-6 lg:py-0 px-6 lg:px-12">
                        <div className="flex flex-col w-fit lg:w-52 justify-between gap-2 items-center lg:py-10">
                            <div className="text-4xl text-orange font-bold">{item["price"]}</div>
                            <div className="flex justify-evenly w-full">
                                <img className="w-4" src="/assets/icons/success.svg"
                                     alt="success"/>
                                <div className="text-sm">В наличии</div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col w-full lg:w-auto lg:basis-2/3 justify-between gap-4 px-16 lg:px-0 lg:gap-0 lg:py-6">
                            <div className="flex columns-2 flex-wrap basis-1/2 w-full text-sm justify-between gap-2">
                                {buy_options.map((value) => {
                                    return (
                                        <div className="flex items-center gap-2 font-bold">
                                            <input type="checkbox"/>
                                            <div>{value}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className="m-auto basis-1/4 py-1 mb-0">В корзину</button>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-between w-full">
                        {recommended_prods.map((value, index) =>
                            smProductCard(index, value.title, value.price, value.img)
                        )}
                    </div>
                </div>
            </div>
            <div>
                <ProductDescription/>
            </div>
            <div className="flex lg:hidden gap-y-6 flex-wrap items-center justify-between w-full">
                {recommended_prods.map((value, index) =>
                    smProductCard(index, value.title, value.price, value.img)
                )}
            </div>
        </section>
    );
}

export default Product;
