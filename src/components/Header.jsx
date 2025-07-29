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

                    {/* desktop nav  ▶︎ видно ТОЛЬКО ≥ 856 px */}
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

                    {/* burger   ▶︎ видно ≤ 855 px */}
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Открыть меню"
                        className="hidden max-[855px]:block p-2 rounded-md text-blue-600 hover:bg-blue-50"
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </header>

            {/* ─── MOBILE SIDEBAR ──────────────────────────────────────── */}
            {/* overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50
                    transform transition-transform duration-300 text-xl
                    ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-bold text-blue-600">Меню</span>
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Закрыть меню"
                        className="p-2 rounded-md text-blue-600 hover:bg-blue-50"
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
                            className={`text-blue-600 hover:text-purple-600 text-2xl font-medium transition
                           ${pathname === to ? "underline text-purple-600" : ""}`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
}