import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./sanity";
import type { SanityContent, SanityImage } from "@/types/sanity";

// ---- FIXED COMPONENTS WITH CORRECT TYPES ----
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) return null;

      return (
        <div className="my-6">
          <img
            src={urlFor(value).width(800).height(400).fit("crop").url()}
            alt={value.alt || ""}
            className="w-full h-auto  shadow-md"
            loading="lazy"
            decoding="async"
          />
          {value.alt && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },

  block: {
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-[#336429] mb-4 mt-8">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-[#336429] mb-4 mt-6">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-[#336429] mb-3 mt-5">
        {children}
      </h4>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-4">{children}</ol>
    ),
  },

  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href as string | undefined;
      if (!href) return <>{children}</>;

      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          {children}
        </a>
      );
    },
  },
};

export function SanityContentRenderer({
  content,
  className = "",
}: {
  content: SanityContent;
  className?: string;
}) {
  return (
    <div className={`prose max-w-none prose-p:leading-relaxed ${className}`}>
      <PortableText value={content} components={portableTextComponents} />
    </div>
  );
}
