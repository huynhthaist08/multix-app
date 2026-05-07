import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button";

function Logo({ isHome }) {
    return (
        <Link
            to="/"
            aria-label="Go to top"
            onClick={(e) => {
                if (isHome) {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }
            }}
            className="flex items-center gap-2"
        >
            <span
                style={{ fontFamily: "'Pacifico', cursive" }}
                className="text-2xl tracking-tight text-neutral-900 dark:text-white"
            >
                Multi X
            </span>
        </Link>
    );
}

export default function Navbar() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);

        onScroll();

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/70 backdrop-blur-md dark:bg-black/40"
                    : "bg-transparent"
            }`}
        >
            <nav className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <Logo isHome={isHome} />

                <Button className="cursor-pointer">Get Started</Button>
            </nav>
        </header>
    );
}
