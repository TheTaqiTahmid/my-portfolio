import pythonIcon from '../assets/python.svg'
import robotIcon from '../assets/robotframework-svgrepo-com.svg'
import goIcon from '../assets/go-original.svg'
import reactIcon from '../assets/react.svg'
import ansibleIcon from '../assets/ansible.svg'
import terraformIcon from '../assets/terraform-icon.svg'
import jenkinsIcon from '../assets/jenkins.svg'
import gitIcon from '../assets/git-icon.svg'
import dockerIcon from '../assets/docker-icon.svg'
import kubernetesIcon from '../assets/kubernetes.svg'
import prometheusIcon from '../assets/prometheus.svg'
import grafanaIcon from '../assets/grafana.svg'
import { COLORS } from '../constants'

const Skills = () => {
  const skills = [
    { name: 'Python', icon: pythonIcon },
    { name: 'Golang', icon: goIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Robot Framework', icon: robotIcon },
    { name: 'Ansible', icon: ansibleIcon },
    { name: 'Terraform', icon: terraformIcon },
    { name: 'Jenkins', icon: jenkinsIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Kubernetes', icon: kubernetesIcon },
    { name: 'Prometheus', icon: prometheusIcon },
    { name: 'Grafana', icon: grafanaIcon },
  ]

  return (
    <div>
      <h1 className={`text-2xl py-5 font-burtons ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
        Tools and Languages
      </h1>
      <div
        className={`grid grid-cols-4 gap-6 text-md py-5 leading-8 ${COLORS.TEXT} ${COLORS.DARK_TEXT} mx-auto max-w-2xl md:text-xl`}
      >
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
            <p className="mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
