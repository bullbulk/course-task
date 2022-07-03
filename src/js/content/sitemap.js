import "../../sass/Content.scss";
import {Link} from "react-router-dom";

function Sitemap() {
    return (
        <section className="text-block x-padding">
            <div className="title">Карта сайта</div>
            <div className="flex flex-wrap gap-12">
                <div className="underline flex flex-col gap-2">
                    <Link to="/">
                        <div className="subtitle">Главная</div>
                    </Link>
                </div>
                <div className="underline flex flex-col gap-2">
                    <Link to="/catalog">
                        <div className="subtitle">Каталог</div>
                    </Link>
                    <div className="pl-4">
                        <Link to="/catalog/equipment">
                            <div>Оборудование</div>
                        </Link>
                        <Link to="/catalog/services">
                            <div>Услуги</div>
                        </Link>
                    </div>
                </div>
                <div className="underline flex flex-col gap-2">
                    <Link to="/company">
                        <div className="subtitle">Компания</div>
                    </Link>
                    <div className="pl-4">
                        <Link to="/company/news">
                            <div>Новости</div>
                        </Link>
                        <Link to="/company/history">
                            <div>История</div>
                        </Link>
                        <Link to="/company/leads">
                            <div>Руководство</div>
                        </Link>
                        <Link to="/company/achievements">
                            <div>Достижения</div>
                        </Link>
                        <Link to="/company/documents">
                            <div>Документы</div>
                        </Link>
                    </div>
                </div>
                <div className="underline flex flex-col gap-2">
                    <Link to="/contacts">
                        <div className="subtitle">Контакты</div>
                    </Link>
                </div>
                <div className="underline flex flex-col gap-2">
                    <Link to="/faq">
                        <div className="subtitle">FAQ</div>
                    </Link>
                </div>
                <div className="underline flex flex-col gap-2">
                    <Link to="/sitemap">
                        <div className="subtitle">Карта сайта</div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Sitemap;