import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";

const Introduction = () => {
  const BoldStyle = "text-blue-900 dark:text-blue-400"
  return (
    <div className="text-center p-2">
      <h2 className="text-5xl text-blue-900 dark:text-blue-400 py-2 font-medium font-burtons">Taqi Tahmid</h2>
      <h3 className="text-2xl py-2 font-burtons dark:text-blue-200">Test Automation and DevOps Engineer</h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-300 mx-auto max-w-2xl md:text-xl">
        I am a <span className={BoldStyle}>Test Automation</span> and <span className={BoldStyle}>DevOps Engineer </span>
        with a Bachelor’s from Khulna University of Engineering & Technology (KUET) and a Master’s from Tampere University.
        <br/><br/>I specialize in designing CI/CD pipelines and test automation for diverse applications and architectures
        with four years of industry experience. 
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-blue-900">
            <a href="https://www.linkedin.com/in/taqi-tahmid/" target="_blank" rel="noreferrer"><AiFillLinkedin className="hover:text-sky-600"/></a>
            <a href="https://github.com/TheTaqiTahmid" target="_blank" rel="noreferrer"><AiFillGithub className="hover:text-sky-600"/></a>
      </div>
  </div>
  )
}

export default Introduction
