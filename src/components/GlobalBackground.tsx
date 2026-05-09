import Image from "next/image";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <Image
        src="/new/Overlay.png"
        alt=""
        fill
        priority
        className="object-cover object-top"
        quality={75}
      />
    </div>
  );
}
