import { ArrowDown } from "lucide-react";
import image from "../assets/headshot1.jpg";

export const HeroSection = () => {

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hello I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Ryan </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Dong</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-3">
                        "Reach for the sky!" - Woody (Toy Story)
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Creativity vs. Analytical. What I once thought I had to choose between, I now embrace together as an advantage.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                    <div className="relative mx-auto bg-gradient-to-b rounded-full w-80 h-80 mt-20 overflow-hidden">
                        <img src={image} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Learn More</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}

export default HeroSection;