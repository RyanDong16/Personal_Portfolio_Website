import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Creatorverse Website",
        description: "Creatorverse is a global community where users celebrate their favorite YouTube creators. Share posts, spark discussions, and connect with people across the world by bringing the entire universe together through the creators you love.",
        image: "/projects/creatorverse.gif",
        tags: ["React", "CSS", "Subabase", "CRUD"],
        demoUrl: "https://www.loom.com/share/84f93f0c93984394b460300a4190806b",
        githubUrl: "https://github.com/RyanDong16/web103_prework/tree/main/prework/creatorverse",
    },
    {
        id: 2,
        title: "Legends Plaza Website",
        description: "Legends Plaza is an event schedule hub showcasing four iconic venues, each hosting its own lineup of electrifying rock bands. Discover where legends take the stage and plan your next live music experience.",
        image: "/projects/legendsplaza.gif",
        tags: ["React", "PostgreSQL", "Express", "Render"],
        demoUrl: "https://www.loom.com/share/4ca334af24774bccb849dc97ef1d778a",
        githubUrl: "https://github.com/RyanDong16/WEB103_project3/tree/main/WEB103_project3",
    },
    {
        id: 3,
        title: "December Nights Brochure",
        description: "December Nights is San Diego’s beloved holiday celebration at Balboa Park, featuring festive lights, live performances, international food, and cultural experiences. This brochure is your guide to two magical evenings of music, art, and seasonal cheer for the whole community.",
        image: "/projects/christmasbrochure.gif",
        tags: ["Canva", "Marketing", "Graphic Design"],
        demoUrl: "https://drive.google.com/file/d/1cVoj5CTimCx8-zb2YVrGQItaCL3Viqx1/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 4,
        title: "Duo Confections Promo Video",
        description: "Duo Confections brings dessert to life with crispy Hong Kong bubble waffles paired perfectly with creamy gelato. This promotional video showcases bold flavors, handcrafted treats, and the sweet moments that make every bite unforgettable.",
        image: "/projects/duopromo.gif",
        tags: ["Advisement", "Marketing", "Premiere Pro", "Editing"],
        demoUrl: "https://drive.google.com/file/d/1vZIqgvvgFQaauu4SCx9hVhDgtlUxrDib/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 5,
        title: "Social Media Live Q&A Post",
        description: "Join us live for an exclusive Q&A session with acclaimed neurosurgeon Dr. Deuk as he discusses the truth behind spinal surgery and the message of the Spine Scam movie. Don’t miss this opportunity to ask questions, gain insights, and be part of the conversation.",
        image: "/projects/LiveQ&APost.png",
        tags: ["Graphic Design", "Marketing", "Canva", "Spine Scam Movie"],
        demoUrl: "https://drive.google.com/file/d/190Pti35qEb2g518le4GDeuIRBpI8mtb2/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 6,
        title: "Finding Mission Impossible Mash-Up",
        description: "A creative mashup combining the intense voice of the Mission: Impossible - Fallout trailer with clips from Finding Nemo and Finding Dory, reimagination a high-risk spy mission into a treacherous underwater adventure.",
        image: "/projects/mashup.gif",
        tags: ["Mashup", "Premiere Pro", "Editing", "Trailer"],
        demoUrl: "https://drive.google.com/file/d/10KuIjo_ii-0h9If06N26dtbKGWHpGs9Q/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 7,
        title: "Spine Scam Marketing Plan Presentation",
        description: "A collaborative group project developing a comprehensive marketing presentation for the independent film, Spine Scam. Outlines strategic outreach across medical organizations, patient advocacy groups, content creators, and both paid and unpaid social media channels to maximize awareness, credibility, and audience engagement.",
        image: "/projects/marketingslides.png",
        tags: ["Spine Scam Movie", "Marketing", "Group Project", "Canva"],
        demoUrl: "https://drive.google.com/file/d/1EkZnGkDZzERgKdcKyeUKXmxOk8yzd9OQ/view?usp=sharing",
        githubUrl: "...",
    }
];

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with 
                    attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        href="https://github.com/RyanDong16"
                        target="_blank"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;