import Image from "next/image";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to bottom, rgba(235, 243, 232, 0.75), rgba(255, 255, 255, 0.2))"
                }}
            />
            <Image
                src="/new/heroGlass.svg"
                fill
                priority
                className="object-cover object-top opacity-50 md:opacity-70"
                alt=""
            />
            <Image
                src="/new/heroGradient.svg"
                fill
                priority
                className="object-cover object-top opacity-70 md:opacity-90"
                alt=""
            />
        </div>
    );
}
