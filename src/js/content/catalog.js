import "../../sass/Content.scss";
import items from "../const";
import {productCard} from "../elements/product_card";
import {Navigate} from "react-router-dom";

function Catalog() {
    return (
        <Navigate replace to="/catalog/equipment"/>
    )
}

function Equipment() {
    return (
        <Navigate replace to="/catalog/equipment/smart-terminals"/>
    )
}


function Services() {
    return (
        <Navigate replace to="/catalog/equipment"/>
    )
}

function SmartTerminals() {
    return (
        <section id="products">
            <div className="path">Главная / Продукты / Смарт-терминалы</div>
            <div className="title">Смарт-терминалы</div>
            <div className="text flex flex-col gap-4 pb-12">
                <p>
                    Смарт-терминал — это разновидность онлайн-кассовых аппаратов, которые имеют сенсорный дисплей — тач
                    скрин. Все смарт терминалы изготовлены и работают в соответствии с ФЗ-54. Такие ККТ знакомы
                    практически каждому пользователю планшетных компьютеров, так как построены на их базе и зачастую
                    имеют операционную систему Android или модернизированный Android.
                </p>
                <p>
                    Также в кассовый аппарат подобного вида встроен принтер для печати чеков, установлен фискальный
                    накопитель (дополнительная опция), а все платежи и данные о чеках передаются в налоговую с помощью
                    ОФД. В большей части смарт терминалов присутствует аккумуляторная батарея (или несколько), что
                    делает кассу независимой от электросети. Ввиду того, что база кассы — это планшет на операционной
                    системе Android, устройство имеет возможность интеграции с Android и iOS девайсами. Встроенный
                    маркет позволяет установить любое приложение (а их в маркете достаточно) для того, чтобы
                    автоматизировать свой бизнес. Например, вы можете установить приложение с товароучетной системой или
                    приложение для весов или сканера. Подключить денежный ящик, банковский терминал, сейф и многое
                    другое. Как правило, интерфейсов в кассе достаточно для нескольких дополнительных периферийных
                    устройств.
                </p>
            </div>
            <div className="flex flex-wrap min-w-full gap-16 justify-center">
                {items.map((value, index) =>
                    productCard(index, value.title, value.price, value.img)
                )}
            </div>
        </section>
    );
}

export default Catalog;
export {SmartTerminals, Equipment, Services};