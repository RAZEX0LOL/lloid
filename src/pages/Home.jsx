/*  src/pages/Home.jsx  */

import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full bg-gradient-to-br from-purple-300 via-purple-100 to-white">
            {/* ---------- HERO ---------- */}
            <section className="relative flex flex-col items-center text-center py-24 px-4">
                {/* декоративная волна поверх градиента */}
                <div className="absolute inset-0 bg-[url('/assets/abstract-wave.svg')] bg-no-repeat bg-top opacity-10 pointer-events-none" />

                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">
                    О&nbsp;нас
                </h1>

                <p className="max-w-3xl text-2xl text-gray-700 leading-relaxed">
                    «Консалтинговая компания «Ллойд» — ваш&nbsp;надёжный партнёр в сфере
                    налоговой безопасности, аудита и&nbsp;консалтинга!<br />
                    Мы предлагаем комплексные решения для бизнеса любого масштаба,
                    помогаем оптимизировать финансовые процессы, снижать риски
                    и&nbsp;повышать эффективность вашей организации. Наша команда
                    профессионалов обладает многолетним опытом работы и&nbsp;глубокими
                    знаниями законодательства&nbsp;РФ и&nbsp;МСФО.
                </p>

                <Link
                    to="/contacts"
                    className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold text-xl
                     shadow-md hover:bg-purple-600 transition txt"
                >
                    Связаться с нами
                </Link>
            </section>

            {/* ---------- УСЛУГИ ---------- */}
            <section className="w-full py-16 px-4">
                <h2 className="text-4xl font-bold text-purple-600 text-center mb-10">
                    Наши услуги
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto text-2xl">
                    {[
                        {
                            title: "Комплексный финансовый аудит",
                            text: [
                                "С Аудиторским заключением и достоверной отчетностью вы сразу ощутите поддержку и помощь от опытных аудиторов и получите ответы на все свои вопросы.",
                                "Подсказки, консультации, помощь – с первого дня заключения договора.",
                                "Возможно заключение договора на консультационное сопровождение - предподготовку к аудиту.",
                            ],
                        },
                        {
                            title: "Налоговый аудит",
                            text: [
                                "Лекарство от головной боли: как не попасть на штрафы и как найти где законно сэкономить.",
                            ],
                        },
                        {
                            title: "Управленческий консалтинг",
                            text: [
                                "Разработка стратегий развития бизнеса, повышение эффективности управления и организационной структуры.",
                                "Построение финмодели исходя из налоговой безопасности.",
                            ],
                        },
                        {
                            title: "Экспресс-диагностика состояния учета",
                            text: [
                                "Лучше знать, чем «обухом по голове»...",
                                "За 3 дня Вы получите не только срез проблем в учете, налоговых рисков, но и резервов и зон роста для уверенности и понимания реальной ситуации.",
                            ],
                        },
                    ].map(({ title, text }) => (
                        <div
                            key={title}
                            className="rounded-2xl bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-2xl transition"
                        >
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
                            {text.map((line, i) => (
                                <p key={i} className="text-gray-700 leading-relaxed mb-2">{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- ПОЧЕМУ МЫ ---------- */}
            <section className="py-16 px-4 ">
                <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">
                    Почему мы?
                </h2>

                <ul className="max-w-4xl mx-auto list-disc space-y-4 pl-6 text-2xl text-gray-800">
                    <li><strong>Индивидуальный подход:</strong> наши специалисты разрабатывают уникальные стратегии именно для вашего бизнеса.</li>
                    <li><strong>Высокий профессионализм:</strong> мы обладаем всеми необходимыми лицензиями и сертификатами, регулярно повышаем квалификацию сотрудников.</li>
                    <li><strong>Комплексность услуг:</strong> полное сопровождение вашего бизнеса на всех этапах развития.</li>
                    <li><strong>Оперативность:</strong> выполнение работ строго в оговорённые сроки.</li>
                    <li><strong>Сервис:</strong> с нами вам будет комфортно</li>
                </ul>
            </section>

            {/* ---------- CTA ---------- */}
            <section className="w-full py-16 px-4">
                <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600
                        p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2">Свяжитесь с нами</h3>
                        <p className="text-xl leading-relaxed">
                            Хотите обсудить возможность сотрудничества? Позвоните нам прямо сейчас!<br /><br />
                            Телефон:&nbsp;
                            <a href="tel:+79272226809" className="underline hover:text-purple-100 txt">
                                +7&nbsp;(927)&nbsp;222-68-09
                            </a><br />
                            Email:&nbsp;
                            <a href="mailto:oksana@lloydconsalt.ru" className="underline hover:text-purple-100 txt">
                                oksana@lloydconsalt.ru
                            </a><br />
                            Адрес офиса: г.&nbsp;Саратов, ул.&nbsp;им.&nbsp;Н.&nbsp;И.&nbsp;Вавилова,&nbsp;38/114.
                        </p>
                    </div>

                    <Link
                        to="/contacts"
                        className="inline-block shrink-0 rounded-xl bg-white text-blue-600 font-semibold
                       px-8 py-3 shadow hover:bg-purple-50 transition text-xl"
                    >
                        Перейти к контактам
                    </Link>
                </div>
            </section>
        </div>
    );
}