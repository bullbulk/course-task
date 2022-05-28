import {Link} from "react-router-dom";

function productCard(index, title, price, img_path) {
    return (
        <Link key={index} to={`/products/${index}`}>
            <div className="flex flex-col w-48 flex-wrap items-center bg-pure-white shadow-xl gap-4 p-8 hover-scale">
                <img src={img_path} alt={index}/>
                <div>{title}</div>
                <div className="text-orange text-xl">{price}</div>
                <button className="py-1">Подробнее</button>
            </div>
        </Link>
    );
}


function smProductCard(index, title, price, img_path) {
    return (
        <Link key={index} to={`/products/${index}`}>
            <div className="flex flex-col w-36 flex-wrap items-center bg-pure-white shadow-lg gap-2 p-4 hover-scale">
                <img src={img_path} alt={index}/>
                <div className="text-xs text-center">{title}</div>
                <div className="text-orange text-lg">{price}</div>
                <button className="text-xs py-1">Подробнее</button>
            </div>
        </Link>
    );
}

export {productCard, smProductCard};