export function Logo({ className = "" }) {
    return (
        <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Логотип Ллойд"
            className={`h-26 ${className}`}
            style={{ objectFit: "contain" }}
        />
    );
}
