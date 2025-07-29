export function Logo({ className = "" }) {
    return (
        <img
            src="/logo.png"
            alt="Логотип Ллойд"
            className={`h-26 ${className}`}
            style={{ objectFit: "contain" }}
        />
    );
}