import { Linkedin, Github, Award } from "lucide-react";

const Introduction = () => {
  const BoldStyle = "text-blue-900 dark:text-blue-400 font-semibold";
  
  const socialLinks = [
    {
      icon: <Linkedin size={32} />,
      href: "https://www.linkedin.com/in/taqi-tahmid/",
      label: "LinkedIn"
    },
    {
      icon: <Github size={32} />,
      href: "https://github.com/TheTaqiTahmid",
      label: "GitHub"
    },
    {
      icon: <Award size={32} />,
      href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/3da54db2-f994-4148-a0ca-705ae1d748cd-mohammad-taqi-tahmid-094cf8b4-0db8-4a9f-b787-b4efbb2a90fe-certificate.pdf",
      label: "CKA Certificate"
    }
  ];

  return (
    <div className="text-center p-4 max-w-4xl mx-auto">
      <h1 className="text-5xl text-blue-900 dark:text-blue-400 py-2 font-medium font-burtons">
        Taqi Tahmid
      </h1>
      
      <h2 className="text-2xl py-2 font-burtons dark:text-blue-200">
        Test Automation and DevOps Engineer
      </h2>
      
      <div className="text-md py-5 leading-8 text-gray-800 dark:text-gray-300 md:text-xl space-y-4">
        <p>
          I am a <span className={BoldStyle}>DevOps</span> and{" "}
          <span className={BoldStyle}>Test Automation</span> engineer with a{" "}
          <span className={BoldStyle}>certified Kubernetes Administrator (CKA)</span> certification, 
          specializing in managing Kubernetes clusters and cloud infrastructure. 
          Currently working at Ericsson in Finland as a DevOps Engineer.
        </p>
        
        <p>
          I bring four years of industry experience in designing CI/CD pipelines
          and test automation for diverse applications and architectures. I hold a Bachelor's 
          degree from Khulna University of Engineering & Technology (KUET) and a Master's 
          degree from Tampere University. My expertise spans across the entire DevOps lifecycle, 
          from cluster management and infrastructure automation to implementing robust testing frameworks.
        </p>
      </div>

      <div className="flex justify-center gap-8 py-3">
        {socialLinks.map((link, index) => (
          <div key={index} className="group relative">
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-blue-900 dark:text-blue-400 hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-200"
            aria-label={link.label}
          >
            {link.icon}
          </a>
          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-sm text-slate-100 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800 before:content-[''] group-hover:opacity-100">
            {link.label}
          </span>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
