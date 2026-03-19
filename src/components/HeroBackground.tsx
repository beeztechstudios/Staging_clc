export default function HeroBackground() {
    return (
        <>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, rgba(235, 243, 232, 0.5), rgba(255, 255, 255, 0))"
                }}
            />
            <img
                src="/new/heroGlass.svg"
                className="absolute left-[360px] md:left-[360px] max-w-[800px] top-0 -translate-x-1/2 hidden md:block pointer-events-none"
                alt=""
            />
            <img
                src="/new/heroGradient.svg"
                className="absolute left-1/2 -translate-x-1/2 w-full md:w-[80vw] max-w-[950px] top-0 opacity-60 md:opacity-100 pointer-events-none"
                alt=""
            />
        </>
    );
}
