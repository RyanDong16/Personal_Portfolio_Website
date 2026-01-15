import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const NotFound = () => {

    // ✅ Sync theme on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-background">
            <div className="text-center max-w-md animate-fade-in">

                {/* Big 404 */}
                <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>
                
                {/* Message */}
                <h2 className="text-2xl font-semibold mb-3">Page not found</h2>
                    <p className="text-muted-foreground mb-8">Oops! The page you’re looking for doesn’t exist or was moved.</p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="cosmic-button flex items-center justify-center gap-2">
                        <Home size={18} />Go Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;