"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Loader2, X } from "lucide-react";
import { useSearchArticles } from "@/hooks/useSanityData";

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: results, isLoading } = useSearchArticles(query);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="flex gap-0 items-center bg-[#E5ECE3] p-[2px] rounded-sm">
        <div className="relative flex-1 ">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search Articles"
            className="w-full bg-white border border-gray-200 pl-5  py-1.5"
            style={{ fontFamily: "'Inter', sans-serif",
             
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize:"10.1px",
      
          lineHeight: "100%",
          letterSpacing: "0%",
          verticalAlign: "middle",

             }}
          />
          <Search className="absolute left-1.5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 text-gray-400" />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-gray-100 rounded-full"
            >
              <X className="h-3 w-3 text-gray-400" />
            </button>
          )}
        </div>
        <button
          className="bg-white border border-gray-200 px-2 py-1.5  text-[#595959] cursor-pointer hover:bg-gray-50 transition-colors"
          style={{
            fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontStyle: "Regular",
        fontSize: "9.8px",
        lineHeight: "11px",
        letterSpacing: "1.1px",
        textAlign: "center",
        verticalAlign: "middle",
        textTransform: "uppercase",
}}
        >
          SEARCH
        </button>
      </div>

      {isOpen && query.length > 2 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-xl border border-gray-200 z-100 max-h-[300px] overflow-y-auto rounded-sm">
          {isLoading ? (
            <div className="p-4 flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 text-[#163C0F] animate-spin" />
              <span className="text-[11px] text-gray-500">Searching...</span>
            </div>
          ) : results && results.length > 0 ? (
            <div className="py-1">
              {results.map((item) => {
                const isNews = item._type === "newsUpdate";
                const href = isNews ? `/news/${item.slug.current}` : `/blog/${item.slug.current}`;

                return (
                  <Link
                    key={item._id}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-start gap-2 px-3 py-2 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                  >
                    <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${isNews ? 'bg-red-500' : 'bg-green-600'}`} />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[12px] font-bold text-gray-900 leading-tight truncate">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 truncate mt-0.5 uppercase tracking-tighter">
                        {isNews ? 'News' : 'Blog'}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="p-4 text-center text-[11px] text-gray-500 font-medium">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
