export function Footer() {
    return (
        <footer className="bg-purple-600 text-white py-4 mt-10">
            <div className="container mx-auto px-4 text-center">
                © {new Date().getFullYear()} ООО «Консалтинговая компания «Ллойд»
            </div>
        </footer>
    );
}