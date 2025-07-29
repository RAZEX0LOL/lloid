/*  src/pages/About.jsx  */
import {Link} from "react-router-dom";

export default function About() {
    return (
        <div className="w-full bg-gradient-to-br from-purple-300 via-purple-100 to-white">

            {/* ---------- HERO ---------- */}
            <section className="relative flex flex-col items-center text-center py-24 px-4">

                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
                    О «Консалтинговой компании «Ллойд»
                </h1>
                <p className="max-w-3xl text-2xl text-gray-700 leading-relaxed">
                    «Консалтинговая компания «Ллойд» — основана в&nbsp;2003&nbsp;году.<br />
                    За годы своего существования наша компания зарекомендовала себя
                    надёжным партнёром для множества российских компаний различных
                    отраслей экономики.
                </p>
            </section>

            {/* ---------- ЦЕЛИ И ПРИНЦИПЫ ---------- */}
            <section className="w-full py-16 px-4">
                <h2 className="text-4xl font-bold text-purple-600 text-center mb-10">
                    Наши цели и принципы
                </h2>

                <p className="max-w-5xl text-center mx-auto text-2xl text-gray-700 leading-relaxed mb-8">
                    Основной целью компании является предоставление качественных аудиторских
                    и&nbsp;консультационных услуг в&nbsp;области бухгалтерского учёта,
                    налогового планирования и&nbsp;налоговой безопасности, оценки бизнеса и
                    юридических вопросов. Мы стремимся создать такие условия, при которых
                    клиенты смогут эффективно управлять своим бизнесом, минимизировать
                    риски и&nbsp;максимизировать прибыль.
                </p>

                <p className="max-w-5xl mx-auto text-2xl text-center text-gray-700 leading-relaxed">
                    Наш подход основывается на доверии, профессионализме и прозрачности
                    отношений между клиентом и консультантом. Каждый проект
                    рассматривается индивидуально, учитывая специфику отрасли клиента и
                    особенности конкретного случая.
                </p>
            </section>

            {/* ---------- НАПРАВЛЕНИЯ ---------- */}
            <section className=" py-16 px-4">
                <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">
                    Основные направления деятельности
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {[
                        "Бухгалтерские услуги: ведение бухгалтерии, составление отчётности, налоговый учёт.",
                        "Аудит: проверка финансово-хозяйственной деятельности, подготовка заключения о достоверности отчётов.",
                        "Консультации по налоговому законодательству: снижение налоговой нагрузки, представление интересов клиентов перед контролирующими органами.",
                    ].map((item) => {
                        const [title, rest] = item.split(/:(.*)/).map((s) => s.trim());
                        return (
                            <div
                                key={item}
                                className="rounded-xl bg-white/80 backdrop-blur-md p-6 shadow-md"
                            >
                                <p className="text-gray-800 text-2xl leading-relaxed">
                                    <strong>{title}</strong>{rest && `: ${rest}`}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ---------- ПОЧЕМУ МЫ ---------- */}
            <section className="w-full py-16 px-4">
                <h2 className="text-4xl font-bold text-purple-600 text-center mb-10">
                    Почему выбирают «Консалтинговую компанию «Ллойд»
                </h2>

                <ul className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Индивидуальный подход к каждому клиенту.",
                        "Высокая квалификация наших экспертов.",
                        "Полностью конфиденциальное сотрудничество.",
                        "Чёткое соблюдение сроков исполнения проектов.",
                        "Доступные цены на профессиональные услуги.",
                    ].map((text) => (
                        <li
                            key={text}
                            className="flex items-start gap-3 bg-white/70 p-4 rounded-xl shadow"
                        >
                            <span className="mt-1 block w-2.5 h-2.5 bg-blue-600 rounded-full shrink-0" />
                            <p className="text-gray-800 text-2xl">{text}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ---------- ЗАВЕРШАЮЩИЙ БЛОК ---------- */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-2xl leading-relaxed mb-8">
                        Мы уверены, что сможем стать вашим надёжным помощником в вопросах
                        аудита и бухгалтерского и налогового сопровождения бизнеса.
                        Присоединяйтесь к числу довольных клиентов нашей компании!
                    </p>
                    <Link
                        to="/contacts"
                        className="inline-block rounded-xl bg-white text-blue-600 font-semibold
                       px-8 py-3 shadow hover:bg-purple-50 transition text-2xl"
                    >
                        Связаться с нами
                    </Link>
                </div>
            </section>
        </div>
    );
}