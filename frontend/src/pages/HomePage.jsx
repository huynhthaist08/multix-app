import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/NavBar";

const HomePage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth" });
    }, [hash]);

    return (
        <>
            <Navbar />
            <main>
                <div className="h-500"></div>
            </main>
        </>
    );
};

export default HomePage;
