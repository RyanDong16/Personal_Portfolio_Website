import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Intro to Cybersecurity",
    issuer: "CodePath",
    date: "Spring 2025",
    image: "/certificates/CYB101_certificate.png",
    credentialUrl: "https://drive.google.com/file/d/1S1_kuTwO2V2KRUp56c3bal3SKa5uql_n/view?usp=sharing",
  },
  {
    id: 2,
    title: "Intro to Web Developement",
    issuer: "CodePath",
    date: "Spring 2025",
    image: "/certificates/WEB101_certificate.png",
    credentialUrl: "https://drive.google.com/file/d/1rI-Vvvu0X3XMEjFPcB9MIOAnC13Dcx_G/view?usp=sharing",
  },
  {
    id: 3,
    title: "Intermediate Web Development",
    issuer: "CodePath",
    date: "Summer 2025",
    image: "/certificates/WEB102_certificate.png",
    credentialUrl: "https://drive.google.com/file/d/1NJ7vxNEWOon0-eBGwR5kzYWcJoOC7Gsx/view?usp=sharing",
  },
  {
    id: 4,
    title: "Advanced Web Development",
    issuer: "CodePath",
    date: "Fall 2025",
    image: "/certificates/WEB103_certificate.png",
    credentialUrl: "https://drive.google.com/file/d/1nRqWXZa_Yafh6c0_ix0SKwkTSZhdDynm/view?usp=sharing",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of certifications that demonstrate my skills in web
          development, AI, and modern web technologies.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-xs card-hover"
            >
              {/* Certificate Image */}
              <div className="h-44 overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-muted-foreground mb-4">
                  Issued {cert.date}
                </p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  View Credential <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificatesSection;
