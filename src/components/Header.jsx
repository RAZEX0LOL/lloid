/*  src/components/Header.jsx  */

import {useState} from "react";
import {Logo} from "./Logo";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from "lucide-react";

const nav = [
    { to: "/", label: "Главная" },
    { to: "/about", label: "О компании" },
    { to: "/disclosure", label: "Раскрытие информации" },
    { to: "/contacts", label: "Контакты" },
];

export function Header() {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ─── TOP BAR ─────────────────────────────────────────────── */}
            <header className="bg-white shadow z-20">
                <div className="w-full flex items-center justify-between py-4 px-4">
                    {/* logo + title */}
                    <div className="flex items-center gap-3">
                        <Logo className="h-12 shrink-0" />
                        <span className="hidden sm:inline text-lg md:text-xl font-semibold text-blue-600">
              ООО&nbsp;«Консалтинговая&nbsp;компания&nbsp;«Ллойд»
            </span>
                    </div>

                    {/* Desktop navigation, visible from 856 px. */}
                    <nav className="hidden min-[856px]:flex gap-6">
                        {nav.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`text-blue-600 hover:text-purple-600 font-medium text-xl transition
                             ${pathname === to ? "underline text-purple-600" : ""}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu, visible up to 855 px. */}
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-label="Открыть меню"
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        className="hidden max-[855px]:block p-2 rounded-md text-blue-600 hover:bg-blue-50"
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </header>

            {open ? (
                <>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Закрыть меню"
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                    />
                    <aside
                        id="mobile-navigation"
                        aria-label="Мобильная навигация"
                        className="fixed right-0 top-0 z-50 h-full w-72 bg-white text-xl shadow-lg"
                    >
                        <div className="flex items-center justify-between border-b p-4">
                            <span className="font-bold text-blue-600">Меню</span>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Закрыть меню"
                                className="rounded-md p-2 text-blue-600 hover:bg-blue-50"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4 p-4">
                            {nav.map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={() => setOpen(false)}
                                    className={`text-2xl font-medium text-blue-600 transition hover:text-purple-600
                                    ${pathname === to ? "text-purple-600 underline" : ""}`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </aside>
                </>
            ) : null}
        </>
    );
}
