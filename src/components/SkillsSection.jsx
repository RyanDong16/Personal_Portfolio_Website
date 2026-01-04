import { useState } from "react";
import { cn } from "@/library/utils";

const skills = [
    // Frontend
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 85, category: "frontend"},
    {name: "Tailwind CSS", level: 90, category: "frontend"},

    // Backend
    {name: "Node.js", level: 95, category: "backend"},
    {name: "Express", level: 90, category: "backend"},
    {name: "Supabase", level: 85, category: "backend"},
    {name: "PostgreSQL", level: 90, category: "backend"},
    {name: "Render", level: 80, category: "backend"},

    // Tools
    {name: "Git/GitHub", level: 95, category: "tools"},
    {name: "Canva", level: 85, category: "tools"},
    {name: "Adobe Premiere Pro", level: 85, category: "tools"},
    {name: "Visual Studio Code", level: 80, category: "tools"},
    {name: "Google Suite", level: 80, category: "tools"},
    {name: "Microsoft Office", level: 80, category: "tools"},
    {name: "Python", level: 80, category: "tools"},

    // Personal
    {name: "Attention to Detail", level: 95, category: "personal"},
    {name: "Hard Working", level: 85, category: "personal"},
    {name: "Customer Service", level: 85, category: "personal"},
    {name: "Leadership", level: 80, category: "personal"},
    {name: "Written/ Oral Communication ", level: 80, category: "personal"},
];

const categories = ["all", "frontend", "backend", "tools", "personal"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Category Button */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)} 
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Filter Feature */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }}>
                                </div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;