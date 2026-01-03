import { Megaphone, Code, Film } from "lucide-react";

export const AboutSection = () => {

    return (
        <section id="about" className="py-24 px-4 relative">{" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Marketeer | Web Developer | Filmmaker
                        </h3>
                        <p className="text-muted-foreground">
                            An ambitious, open-minded professional who strives to exceed expectations and brings positivity to any work environment.
                            I enjoy collaborating with passionate people and am eager to learn from those with more experience.
                            A strong verbal and written communicator, easygoing yet determined, while bringing grit, focus, and maximum effort to everything in my path.
                        </p>
                        <p className="text-muted-foreground">
                            The world of entertainment, technology, and marketing has always captured my imagination and curiosity. Blending creativity 
                            alongside my technological and strategic mindset inspires me to explore new ways of storytelling, leveraging AI, and 
                            understanding the business plans that shape changing audience engagement. I’m motivated to constantly learn and adapt to 
                            help skyrocket the entertainment industry with innovative and impactful contributions. 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Megaphone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Marketing</h4>
                                    <p className="text-muted-foreground">
                                        Designed social media launch strategies for the independent film 'Spine Scam', along with creating advertising 
                                        posts, a promotional video for a local dessert shop, and a brochure for a classic San Diego Christmas event.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Film className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Film/ Entertainment</h4>
                                    <p className="text-muted-foreground">
                                        Fascinated by all aspects of film, television, and pop culture. Proficient in Adobe Premiere Pro for editing,
                                        with a strong passion for scriptwriting, creating short films, and developing original movie ideas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Developed responsive websites and web applications using modern frameworks like React, 
                                        while utilizing HTML, CSS, Tailwind CSS, JavaScript, APIs, and LangChain for chatbot development.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;