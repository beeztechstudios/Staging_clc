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
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[150%] min-[420px]:w-[125%] md:left-[360px] md:w-auto md:max-w-[800px] opacity-55 md:opacity-100 pointer-events-none"
                alt=""
            />
            <img
                src="/new/heroGradient.svg"
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[145%] min-[420px]:w-[120%] sm:w-full md:w-[80vw] max-w-[950px] opacity-80 md:opacity-100 pointer-events-none"
                alt=""
            />
        </>
    );
}
