/*  src/pages/Contacts.jsx  */
export default function Contacts() {
    return (
        <div className="w-full bg-gradient-to-br from-purple-300 via-purple-100 to-white">

            {/* ---------- HERO / TITLE ---------- */}
            <section className="relative flex flex-col items-center text-center py-15 px-4">
                <h1 className="text-4xl font-extrabold text-blue-600  drop-shadow-sm">
                    Контакты
                </h1>
            </section>

            {/* ---------- CONTACT CARD ---------- */}
            <section className="w-full py-10 px-4">
                <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl
                        shadow-xl p-8 md:p-12 flex flex-col gap-6 md:flex-row md:items-start">

                    {/* Иконки-«буллеты» */}
                    <div className="flex-1 space-y-6 text-gray-800 text-lg leading-relaxed">
                        <div>
                            <span className="block font-semibold text-purple-600">Адрес</span>
                            410012,&nbsp;г.&nbsp;Саратов, ул.&nbsp;Н.&nbsp;И.&nbsp;Вавилова,&nbsp;38/114
                        </div>

                        <div>
                            <span className="block font-semibold text-purple-600">Телефон</span>
                            <a href="tel:+79272226809" className="text-blue-600 underline hover:text-purple-600">
                                +7&nbsp;(927)&nbsp;222-68-09
                            </a>
                        </div>

                        <div>
                            <span className="block font-semibold text-purple-600">Email</span>
                            <a href="mailto:oksana@lloydconsalt.ru" className="text-blue-600 underline hover:text-purple-600">
                                oksana@lloydconsalt.ru
                            </a>
                        </div>
                    </div>

                    {/* CTA-кнопка */}
                    <a
                        href="tel:+79272226809"
                        className="inline-block shrink-0 self-center md:self-start rounded-xl
                       bg-blue-600 text-white font-semibold px-8 py-3 shadow
                       hover:bg-purple-600 transition txt"
                    >
                        Позвонить
                    </a>
                </div>
            </section>

            {/* ---------- MAP (EDGE-TO-EDGE) ---------- */}
            <section className="w-full">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aadde06d1a3f1cde15082c1a9cd673bc9e98e173d473f7028821b0ac02b0e30f9&amp;source=constructor"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    title="Наш офис на карте"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
}