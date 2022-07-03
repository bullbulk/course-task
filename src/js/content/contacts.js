import "../../sass/Content.scss";

function Contacts() {
    return (
        <section className="text-block">
            <div className="title x-padding">
                Контакты
            </div>
            <div className="flex flex-col lg:flex-row x-padding-2 justify-between gap-24 whitespace-nowrap">
                <div className="flex flex-col items-center gap-4">
                    <svg className="w-56 lg:w-36 fill-blue"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path
                            d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16
                            0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1
                            .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35
                            8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844
                            6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4
                            1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/>
                    </svg>
                    <div className="text-xl">
                        Позвоните нам
                    </div>
                    <div className="text-2xl bold text-blue">
                        8 (495) 231-48-18
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 whitespace-nowrap">
                    <svg className="w-56 lg:w-36 fill-blue"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path
                            d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17
                                4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/>
                    </svg>
                    <div className="text-xl">
                        Напишите нам
                    </div>
                    <div className="text-2xl bold text-blue">
                        sales@kasscenter.ru
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 whitespace-nowrap">
                    <svg className="w-56 lg:w-36 fill-blue"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path
                            d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455
                                3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0
                                4h8v2H8v-2z"/>
                    </svg>
                    <div className="text-xl">
                        Наши реквизиты
                    </div>
                    <button className="flat text-2xl">
                        Просмотреть
                    </button>
                </div>
            </div>

            <hr className="x-padding"/>

            <div className="text-block">
                <div className="title x-padding">
                    Задайте нам вопрос
                </div>
                <div className="flex flex-wrap justify-between gap-y-6 x-padding-2">
                    <div className="flex gap-4 items-center w-full lg:w-80 xl:w-96">
                        <input
                            type="text"
                            className="form-input"
                            id="topicInputForm"
                            placeholder="Тема"
                        />
                        <div className="text-red-700 text-xl">*</div>
                    </div>
                    <div className="flex gap-4 items-center w-full lg:w-80 xl:w-96">
                        <input
                            type="tel"
                            className="form-input"
                            id="telInputForm"
                            placeholder="Телефон"
                        />
                        <div className="text-red-700 text-xl">*</div>
                    </div>
                    <div className="flex gap-4 items-center w-full lg:w-80 xl:w-96">
                        <input
                            type="text"
                            className="form-input"
                            id="nameInputForm"
                            placeholder="ФИО"
                        />
                        <div className="text-red-700 text-xl">*</div>
                    </div>
                    <div className="flex gap-4 items-center w-full lg:w-80 xl:w-96">
                        <input
                            type="email"
                            className="form-input"
                            id="emailInputForm"
                            placeholder="E-mail"
                        />
                        <div className="text-red-700 text-xl">*</div>
                    </div>
                    <div className="flex gap-4 items-center w-full">
                        <input
                            type="text"
                            className="form-input"
                            id="cityInputForm"
                            placeholder="Город"
                        />
                        <div className="text-red-700 text-xl">*</div>
                    </div>
                    <div className="flex gap-4 items-center w-full">
                            <textarea
                                className="form-input"
                                id="questionFormControl"
                                rows="3"
                                placeholder="Задайте свой вопрос"
                            />
                        <div className="text-red-700 text-xl">*</div>
                    </div>
                </div>
                <button className="m-auto">Отправить</button>
            </div>

            <div className="text-block x-padding">
                <div className="title">
                    Наш адрес
                </div>
                <div className="flex flex-col gap-4 text">
                    <p>ООО “КАССЦЕНТР”</p>
                    <p>107023, Москва, ул. Электрозаводская, дом 24</p>
                    <p/>
                    <p>Время работы: ПН — ПТ с 9.00 до 18.00</p>
                </div>

                <div style={{position: "relative", overflow: "hidden"}}>
                    <a href="https://yandex.ru/maps/org/kasstsentr/1131873447/?utm_medium=mapframe&utm_source=maps"
                       style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>Кассцентр</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/cash_registers_and_supplies/184106968/?utm_medium=mapframe&utm_source=maps"
                       style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>
                        Кассовые аппараты и расходные материалы в Москве</a>
                    <a href="https://yandex.ru/maps/213/moscow/category/retail_equipment/184106990/?utm_medium=mapframe&utm_source=maps"
                       style={{color: "#eee", fontSize: "12px", position: "absolute", top: "28px"}}>
                        Торговое оборудование в Москве</a>
                    <iframe title="yandex_map" src="https://yandex.ru/map-widget/v1/-/CCUNmBaAXC"
                            width="100%"
                            height="500"
                            allowFullScreen={true}
                            style={{position: "relative"}}/>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
