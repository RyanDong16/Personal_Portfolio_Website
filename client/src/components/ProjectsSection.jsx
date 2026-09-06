import { useState } from "react";
import {
    ExternalLink,
    Github,
    ArrowLeft,
    ArrowRight,
    Monitor,
    Clapperboard,
    Presentation,
    Palette,
} from "lucide-react";

const projects = [
    {
        id: 1,
        category: "Presentations",
        title: "Spine Scam Marketing Plan Presentation",
        description:
            "A collaborative group project developing a comprehensive marketing presentation for the independent film, Spine Scam. Outlines strategic outreach across medical organizations, patient advocacy groups, content creators, and both paid and unpaid social media channels to maximize awareness, credibility, and audience engagement.",
        image: "/projects/marketingslides.png",
        tags: ["Spine Scam Movie", "Marketing", "Group Project", "Canva"],
        demoUrl: "https://drive.google.com/file/d/1EkZnGkDZzERgKdcKyeUKXmxOk8yzd9OQ/view?usp=sharing",
        githubUrl: "https://drive.google.com/file/d/1EkZnGkDZzERgKdcKyeUKXmxOk8yzd9OQ/view?usp=sharing",
    },
    {
        id: 2,
        category: "Film",
        title: "Duo Confections Promo Video",
        description:
            "Duo Confections brings dessert to life with crispy Hong Kong bubble waffles paired perfectly with creamy gelato. This promotional video showcases bold flavors, handcrafted treats, and the sweet moments that make every bite unforgettable.",
        image: "/projects/duopromo.gif",
        tags: ["Advisement", "Marketing", "Premiere Pro", "Editing"],
        demoUrl: "https://drive.google.com/file/d/1vZIqgvvgFQaauu4SCx9hVhDgtlUxrDib/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 15,
        category: "Presentations",
        title: "Color Guard Film Pitch Deck",
        description:
            "This investor pitch deck for the independent film Color Guard presents a comprehensive overview of the project, including story development, target audience, and marketing strategies. It also outlines financial projections, funding requirements, and a distribution plan, demonstrating a well-rounded approach to positioning the film for both creative success and commercial viability.",
        image: "/projects/ColorGuard_PitchDeck.png",
        tags: ["Canva", "Marketing", "Financial", "Distribution"],
        demoUrl: "https://www.canva.com/design/DAHUXjSh8FY/kiT9b6YdqpZpUlw2jKQvdw/view?utm_content=DAHUXjSh8FY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4005da7a84#1",
        githubUrl: "https://drive.google.com/file/d/11qdQCqzq3YuVWAwm1a67Kmi3h1Y6Zid4/view?usp=sharing",
    },
    {
        id: 3,
        category: "Websites",
        title: "Creatorverse Website",
        description:
            "Creatorverse is a global community where users celebrate their favorite YouTube creators. Share posts, spark discussions, and connect with people across the world by bringing the entire universe together through the creators you love.",
        image: "/projects/creatorverse.gif",
        tags: ["React", "CSS", "Subabase", "CRUD"],
        demoUrl: "https://www.loom.com/share/84f93f0c93984394b460300a4190806b",
        githubUrl: "https://github.com/RyanDong16/web103_prework/tree/main/prework/creatorverse",
    },
    {
        id: 4,
        category: "Art",
        title: "Social Media Posts",
        description:
            "This project features original social media post designs created for the digital marketing campaign of the independent film Spine Scam. The content was developed for both paid and organic promotion, with a focus on platform-specific visuals, audience engagement, and brand consistency to build awareness and drive interest in the film’s release.",
        image: "/projects/LiveQ&APost.png",
        tags: ["Graphic Design", "Marketing", "Canva", "Spine Scam Movie"],
        demoUrl: "https://drive.google.com/drive/folders/1VPo0Z8lepqXy2Kn-mn2j6zB6E7uc8VoZ?usp=drive_link",
        githubUrl: "...",
    },
    {
        id: 5,
        category: "Art",
        title: "Spiritual Lion Face Illustration",
        description:
            "A detailed illustration of a lion’s face, reimagined as a symbolic representation of the sun (the radiant center of the universe). Created using Adobe Illustrator, the artwork emphasizes intricate line work, balance, and composition to convey themes of power, energy, and cosmic centrality.",
        image: "/projects/lioneyes.jpg",
        tags: ["Adobe Illustrator", "Graphic Design", "Icon", "Tracing"],
        demoUrl: "https://drive.google.com/file/d/1Iedrl2XqQb392MbFnXFE2H9m5rJE2Hp3/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 6,
        category: "Film",
        title: "Finding Mission Impossible Mash-Up",
        description:
            "A creative mashup combining the intense voice of the Mission: Impossible - Fallout trailer with artistic visuals from Finding Nemo and Finding Dory, reimagining a high-stakes spy mission into a treacherous underwater adventure.",
        image: "/projects/mashup.gif",
        tags: ["Mashup", "Premiere Pro", "Editing", "Trailer"],
        demoUrl: "https://drive.google.com/file/d/10KuIjo_ii-0h9If06N26dtbKGWHpGs9Q/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 7,
        category: "Presentations",
        title: "Spine Scam Launch Strategies Presentation",
        description:
            "The presentation showcases the Facebook and Instagram launch strategies for the independent film Spine Scam, highlighting target audience insights, platform-specific content, influential promotion, and a strategic posting schedule designed to build awareness and drive engagement.",
        image: "/projects/launchslides.png",
        tags: ["Google Slides", "Spine Scam Movie", "Marketing", "Strategies"],
        demoUrl: "https://drive.google.com/file/d/1pkOT98FnUroo8gWiFRRawY6adSYf3aCO/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 16,
        category: "Presentations",
        title: "RTA May 2026 Newsletter",
        description:
            "This project features a professionally designed May newsletter for Righteous Talent Agency, highlighting client bookings, industry news, and upcoming entertainment events. The newsletter demonstrates strong skills in content curation, branding, and audience engagement, while effectively communicating key updates within the entertainment industry.",
        image: "/projects/RTAnewsletter.png",
        tags: ["RTA", "Bookings", "Entertainment News", "Talents"],
        demoUrl: "https://drive.google.com/file/d/1k5zSMLDfHbSr0YLkM7KcKRKJDZFrCl0h/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 8,
        category: "Art",
        title: "December Nights Brochure",
        description:
            "December Nights is San Diego’s beloved holiday celebration at Balboa Park, featuring festive lights, live performances, international food, and cultural experiences. This brochure is your guide to two magical evenings of music, art, and seasonal cheer for the whole community.",
        image: "/projects/christmasbrochure.gif",
        tags: ["Canva", "Marketing", "Graphic Design"],
        demoUrl: "https://drive.google.com/file/d/1cVoj5CTimCx8-zb2YVrGQItaCL3Viqx1/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 9,
        category: "Websites",
        title: "Portfolio Website",
        description:
            "A modern, responsive personal portfolio website built to showcase my projects, skills, certifications, and experience. Designed with performance, accessibility, and clean UI/UX in mind.",
        image: "/projects/portfolio.gif",
        tags: ["React", "TailWindCSS", "FastAPI", "Chatbot", "Gmail API"],
        demoUrl: "...",
        githubUrl: "https://github.com/RyanDong16/Personal_Portfolio_Website",
    },
    {
        id: 10,
        category: "Presentations",
        title: "Mubi Presentation",
        description:
            "This presentation explores MUBI as an SVOD platform, covering its history, how the service operates, target audience, and the process of getting films onto the platform. It also breaks down filmmaker compensation, subscription structure, and key performance metrics, providing a clear overview of MUBI’s role in the independent film distribution landscape.",
        image: "/projects/SVODmubi.png",
        tags: ["SVOD", "PowerPoint", "Platform", "Reseach"],
        demoUrl: "https://drive.google.com/file/d/1enuwuKssZU3qnKP2QOgpA4Slcg2iGIxQ/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 11,
        category: "Art",
        title: "Snowy Mountain Peaks Illustration",
        description:
            "A detailed illustration of snowy mountain peaks, created using Adobe Illustrator. The artwork emphasizes intricate line work, shading, and composition to capture the majesty and rugged beauty of the mountains, evoking a sense of awe and tranquility.",
        image: "/projects/snowmount_illustrator.png",
        tags: ["Adobe Illustrator", "Graphic Design", "Icon", "Tracing"],
        demoUrl: "https://drive.google.com/file/d/13qbJuI_3Akd-rq2UiVaZqOGRCDjidjVS/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 12,
        category: "Film",
        title: "Mr. & Mrs. Smith Script Coverage",
        description:
            "This script coverage is based on the 2005 film Mr. & Mrs. Smith, written by Simon Kinberg. I analyze the story structure, characters, tone, and commercial potential. The coverage highlights strengths, areas for improvement, and market positioning, reflecting industry-standard evaluation practices.",
        image: "/projects/scriptcoverage.png",
        tags: ["Film", "Professional", "Studio Binder", "Analysis"],
        demoUrl: "https://drive.google.com/file/d/1coWmGPRWMo7pYPOU1R8L85pXyEOom_No/view?usp=drive_link",
        githubUrl: "...",
    },
    {
        id: 13,
        category: "Presentations",
        title: "Filmhub Presentation",
        description:
            "This presentation examines FilmHub as a digital distribution aggregator, outlining what the platform is, how filmmakers submit projects, and how the service operates. It also highlights FilmHub’s partner VOD platforms, fee structure, subscription models, and revenue breakdown, offering insight into how independent films reach streaming audiences through third-party distribution channels.",
        image: "/projects/aggregatorfilmhub.png",
        tags: ["Aggregator", "Distributor", "Google Slides", "Research"],
        demoUrl: "https://drive.google.com/file/d/1Sh2d7mF6bzddr6AKSLHG9Ia8eUZm5nMF/view?usp=drive_link",
        githubUrl: "...",
    },
    {
        id: 14,
        category: "Websites",
        title: "Legends Plaza Website",
        description:
            "Legends Plaza is an event schedule hub showcasing four iconic venues, each hosting its own lineup of electrifying rock bands. Discover where legends take the stage and plan your next live music experience.",
        image: "/projects/legendsplaza.gif",
        tags: ["React", "PostgreSQL", "Express", "Render"],
        demoUrl: "https://www.loom.com/share/4ca334af24774bccb849dc97ef1d778a",
        githubUrl: "https://github.com/RyanDong16/WEB103_project3/tree/main/WEB103_project3",
    },
    {
        id: 17,
        category: "Websites",
        title: "Samson University Home Page Website",
        description:
            "This project features a self-built Samson University admissions website created for a short film, Not Like Us, to visually portray the main character’s college acceptance experience. Designed and developed from scratch, the site combines cinematic storytelling with realistic web design to enhance the film’s authenticity and emotional impact.",
        image: "/projects/samson.gif",
        tags: ["React", "Student Film", "Graphic Design", "Render"],
        demoUrl: "https://samson-university-students-applications.onrender.com/",
        githubUrl: "https://github.com/RyanDong16/Samson-University---Juilan-Website",
    },
    {
        id: 18,
        category: "Websites",
        title: "Not One Of Us Website",
        description:
            "Designed and developed the official website for the short film Not One of Us, creating a dark, cinematic React/Vite experience that reflects the film’s crime-thriller tone. The site features custom responsive layouts, cast and crew pages, a dynamic gallery, embedded video content, animated film stills, and branded visuals tailored to the project’s identity.",
        image: "/projects/NOOUwebsite.gif",
        tags: ["React", "Student Film", "Graphic Design", "Render"],
        demoUrl: "https://www.notoneofusmovie.com/",
        githubUrl: "https://github.com/RyanDong16/Not-One-of-Us-Movie-Website",
    },
    {
        id: 19,
        category: "Art",
        title: "Not One Of Us Logo",
        description:
            "Created a custom **bloody handsaw icon** for the *Not One of Us* website using **Adobe Illustrator**, designed to match the film’s dark crime-thriller identity. The icon combines bold vector linework, gritty red accents, and the film title integrated into the saw design to create a memorable visual mark for the site.",
        image: "/projects/NOOUlogo.png",
        tags: ["Adobe Illustrator", "Icon", "Graphic Design", "Tracing"],
        demoUrl: "https://drive.google.com/file/d/1w-L1KZWwjhmk66_BHJWyv4KxWwpGsSjc/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 20,
        category: "Presentations",
        title: "RTA July 2026 Newsletter",
        description:
            "This project features a professionally designed July 2026 newsletter for Righteous Talent Agency, showcasing new clients, client bookings, entertainment industry updates, and upcoming events. The newsletter reflects strong branding, content organization, and audience engagement while presenting key agency highlights in a polished, industry-focused format.",
        image: "/projects/July26Newsletter.png",
        tags: ["RTA", "Bookings", "Entertainment News", "Talents"],
        demoUrl: "https://drive.google.com/file/d/1e2X8O31B_B0KoxPkT995Z9SIQaOu9Q3r/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 21,
        category: "Websites",
        title: "Front Row Website",
        description:
            "Developed the official website for the comedy short film Front Row, creating a clean, engaging digital home that reflects the film’s personality and style. The site highlights the film’s story, crew, cast, awards, credits, gallery, and promotional materials through a responsive React/Vite design tailored for audiences, festivals, and industry viewers.",
        image: "/projects/frontrowwebsite.gif",
        tags: ["React", "Student Film", "Graphic Design", "Render"],
        demoUrl: "https://www.frontrowmovie.com/",
        githubUrl: "https://github.com/RyanDong16/Front-Row-Website",
    },
];

const categories = ["Websites", "Art", "Film", "Presentations"];

const featuredProjectIds = {
    Websites: 18,
    Art: 5,
    Film: 6,
    Presentations: 15,
};

const categoryIcons = {
    Websites: Monitor,
    Art: Palette,
    Film: Clapperboard,
    Presentations: Presentation,
};

export const ProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const visibleProjects = projects.filter(
        (project) => project.category === selectedCategory
    );

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {selectedCategory
                        ? `Explore my ${selectedCategory.toLowerCase()} projects.`
                        : "Choose a folder to explore my work by category."}
                </p>

                {!selectedCategory ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {categories.map((category) => {
                            const projectCount = projects.filter(
                                (project) => project.category === category
                            ).length;

                            const featuredProject = projects.find(
                                (project) =>
                                    project.id === featuredProjectIds[category]
                            );

                            const CategoryIcon = categoryIcons[category];

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setSelectedCategory(category)}
                                    aria-label={`Open ${category} projects`}
                                    className="group w-full cursor-pointer bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={featuredProject.image}
                                            alt={`${featuredProject.title} preview`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    </div>

                                    <div className="p-6 flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                {category}
                                            </h3>

                                            <p className="text-muted-foreground text-sm mb-3">
                                                {projectCount}{" "}
                                                {projectCount === 1
                                                    ? "project"
                                                    : "projects"}
                                            </p>

                                            <p className="text-sm">
                                                <span className="font-medium text-primary">
                                                    Featured:
                                                </span>{" "}
                                                {featuredProject.title}
                                            </p>
                                        </div>

                                        <CategoryIcon
                                            size={34}
                                            className="shrink-0 text-primary"
                                        />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={() => setSelectedCategory(null)}
                            className="mb-8 flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            <ArrowLeft size={18} />
                            Back to folders
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {visibleProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl font-semibold mb-1">
                                            {project.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm mb-4">
                                            {project.description}
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <div className="flex space-x-3">
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>

                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/RyanDong16"
                        target="_blank"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;