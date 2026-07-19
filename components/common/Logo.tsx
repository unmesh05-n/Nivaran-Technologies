"use client";

import Image from "next/image";

export default function Logo() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 rounded-2xl px-2 py-1 transition-all duration-500 ease-out hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
            {/* Logo */}
            <div className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-105">
                <Image
                    src="/logo/nivaran-logo.png"
                    alt="Nivaran Technologies"
                    width={100}
                    height={100}
                    priority
                    className="h-20 w-20 object-contain md:h-20 md:w-20"
                />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col items-start text-left">

                <h1 className="text-lg font-bold tracking-tight text-primary transition-all duration-500 group-hover:text-accent md:text-xl">
                    Nivaran Technologies
                </h1>

                <span className="hidden text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground transition-all duration-500 group-hover:tracking-[0.32em] md:block">
                    AI Product Engineering
                </span>

            </div>
        </button>
    );
}