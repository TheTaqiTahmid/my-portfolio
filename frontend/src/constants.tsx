import { Linkedin, Github, Award, Link } from 'lucide-react'
import { Aperture, Instagram, Mail, Globe, ScrollText } from 'lucide-react'
import { Camera, Plane, Film, Server, Cpu, Trophy, Car, Gamepad2 } from 'lucide-react'
import pythonIcon from './assets/python.svg'
import robotIcon from './assets/robotframework-svgrepo-com.svg'
import goIcon from './assets/go-original.svg'
import reactIcon from './assets/react.svg'
import ansibleIcon from './assets/ansible.svg'
import terraformIcon from './assets/terraform-icon.svg'
import jenkinsIcon from './assets/jenkins.svg'
import gitIcon from './assets/git-icon.svg'
import dockerIcon from './assets/docker-icon.svg'
import kubernetesIcon from './assets/kubernetes.svg'
import prometheusIcon from './assets/prometheus.svg'
import grafanaIcon from './assets/grafana.svg'

export const COLORS = {
  PRIMARY: 'text-blue-900',
  DARK_PRIMARY: 'dark:text-amber-50',
  TEXT: 'text-gray-700',
  DARK_TEXT: 'dark:text-gray-300',
  BORDER: 'border-blue-900',
  DARK_BORDER: 'border-blue-900',
}

export const EMAIL = 'taqitahmid@gmail.com'

export const RESUME =
  'https://www.linkedin.com/in/taqi-tahmid/overlay/1735981754176/single-media-viewer/?profileId=ACoAACDU_GsBCgKtvw2bmzbVwTy2WixBG6-e3JM'

export const PROJECTS = [
  {
    title: 'Self-Hosted Kubernetes Homelab Cluster',
    description:
      'Architected and deployed a production-grade Kubernetes cluster in my homelab environment, showcasing infrastructure-as-code principles and modern DevOps practices. The cluster hosts a diverse ecosystem of services including my portfolio website, high-availability database, private container image registry, network-wide ad-blocking solution using AdGuard, and a comprehensive media server stack.',
    technologies: ['Kubernetes', 'KVM', 'Linux', 'Go', 'Docker', 'Helm', 'MetalLB'],
    links: [
      {
        icon: <Github size={24} />,
        href: 'https://github.com/yourusername/k8s-monitoring',
        label: 'GitHub',
      },
    ],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      "Engineered and deployed a modern, responsive portfolio website using React, showcasing professional experience and technical projects. The website features a clean, intuitive design with dark/light theme support, responsive layouts, and smooth transitions. The site utilizes React's latest features and Tailwind CSS for styling. The entire application is containerized using Docker and deployed on a personal Kubernetes cluster, demonstrating a full DevOps pipeline from development to production.",
    technologies: ['React', 'Tailwind CSS', 'Docker', 'Kubernetes', 'Nginx'],
    links: [
      {
        icon: <Github size={24} />,
        href: 'https://github.com/TheTaqiTahmid/my-portfolio',
        label: 'GitHub',
      },
      {
        icon: <Link size={24} />,
        href: 'https://portfolio.tahmidcloud.com',
        label: 'Live Demo',
      },
    ],
  },
  {
    title: 'Automated Crypto Trading Bot',
    description:
      "Engineered a Python-based cryptocurrency trading bot that interfaces with Binance's API to execute automated trades based on custom strategies. The bot implements real-time price monitoring, configurable stop-loss and take-profit mechanisms, and intelligent position management. It features a robust risk management system, detailed trade logging, and performance analytics. The bot can handle multiple trading pairs simultaneously.",
    technologies: ['Python', 'Binance API', 'Pandas', 'NumPy'],
    links: [
      {
        icon: <Github size={24} />,
        href: 'https://github.com/TheTaqiTahmid/binanceCryptoBot',
        label: 'GitHub',
      },
    ],
  },
  {
    title: 'Command Line Todo Application',
    description:
      "Developed a fast and efficient CLI-based Todo application in Go that enables seamless task management through simple terminal commands. The application leverages Go's strong concurrency features. Users can perform CRUD operations (Create, Read, Update, Delete) on tasks.",
    technologies: ['Go', 'Cobra CLI'],
    links: [
      {
        icon: <Github size={24} />,
        href: 'https://github.com/TheTaqiTahmid/todo',
        label: 'GitHub',
      },
    ],
  },
]

export const iconClass = 'text-blue-600 dark:text-blue-400 mr-3'

export const SOCIALLINKS = {
  contact: [
    {
      icon: <Mail size={20} className={iconClass} />,
      href: 'mailto:taqitahmid@gmail.com',
      text: 'Email Me',
    },
    {
      icon: <Globe size={20} className={iconClass} />,
      href: 'https://portfolio.tahmidcloud.com/',
      text: 'Website',
    },
  ],
  connect: [
    {
      icon: <Linkedin size={20} className={iconClass} />,
      href: 'https://www.linkedin.com/in/taqi-tahmid/',
      text: 'LinkedIn',
    },
    {
      icon: <Github size={20} className={iconClass} />,
      href: 'https://github.com/theTaqiTahmid',
      text: 'GitHub',
    },
  ],
  follow: [
    {
      icon: <Aperture size={20} className={iconClass} />,
      href: 'https://500px.com/p/taqi1203050?view=photos',
      text: 'Photography',
    },
    {
      icon: <Instagram size={20} className={iconClass} />,
      href: 'https://www.instagram.com/tahmidtaqi/',
      text: 'Instagram',
    },
  ],
  publications: [
    {
      icon: <Award size={20} className={iconClass} />,
      href: 'https://www.credly.com/badges/abb049aa-d811-4954-a460-8c7351ceba3e/public_url',
      text: 'CKA Certification',
    },
    {
      icon: <ScrollText size={20} className={iconClass} />,
      href: 'https://scholar.google.fi/citations?user=w3BoP0AAAAAJ&hl=en',
      text: 'Google Scholar',
    },
  ],
}

export const SKILLS = [
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

export const INTERESTS = [
  {
    title: 'Travelling',
    icon: <Plane size={32} />,
    description:
      'Exploring new places, experiencing different cultures, and creating lasting memories through adventures around the world. From scenic landscapes to bustling cities, every journey is an opportunity to learn and grow.',
  },
  {
    title: 'Photography',
    icon: <Camera size={32} />,
    description:
      'Capturing moments and perspectives through the lens. Particularly interested in landscape and street photography, always looking to improve composition skills and trying new techniques.',
  },
  {
    title: 'Movies & Shows',
    icon: <Film size={32} />,
    description:
      'Passionate about cinema across various genres and cultures. Enjoy analyzing cinematography, storytelling techniques, and discovering hidden gems from different parts of the world.',
  },
  {
    title: 'Homelab',
    icon: <Server size={32} />,
    description:
      'Managing a personal homelab setup for experimenting with self-hosted services, networking configurations, and learning about system administration in a hands-on environment.',
  },
  {
    title: 'New Technologies',
    icon: <Cpu size={32} />,
    description:
      'Keeping up with the latest technological advancements, particularly in cloud computing, automation, and emerging DevOps tools. Enjoy experimenting with new frameworks and platforms.',
  },
  {
    title: 'Playing Video Games',
    icon: <Gamepad2 size={32} />,
    description:
      'Enthusiastic gamer with a deep appreciation for interactive storytelling and virtual worlds. Enjoy exploring diverse genres from immersive RPGs to strategic multiplayer games.',
  },
  {
    title: 'Sports',
    icon: <Trophy size={32} />,
    description: 'Avid sports enthusiast following multiple disciplines:',
    subInterests: [
      {
        name: 'Football',
        details:
          'Following major leagues and international tournaments, appreciating the tactical aspects and team dynamics of the beautiful game.',
      },
      {
        name: 'Cricket',
        details:
          'Enjoying both test matches and limited-overs formats, following international competitions and analyzing game strategies.',
      },
      {
        name: 'Formula 1',
        icon: <Car size={24} />,
        details:
          'Following the high-speed world of F1, keeping up with team developments, race strategies, and technical innovations in motorsport.',
      },
    ],
  },
]

export const EXPERIENCE = [
  {
    title: 'Experienced Developer (DevOps)',
    company: 'Ericsson',
    location: 'Jorvas, Finland',
    period: 'November-2022 - Present',
    responsibilities: [
      'Managing and optimizing Kubernetes clusters in production environments',
      'Designing and implementing CI/CD pipelines for end to end product development flow using Jenkins',
      'Automating infrastructure deployment using Terraform and Ansible',
      'Develop and maintain monitoring solutions of various resources for greater observability and troubleshooting',
      'Actively support development teams regarding product development flow and infrastructure issues',
      'Develop and perform automated end-to-end product testing with Python, Robot Framework, Jenkins, Bash, etc.',
    ],
    tools: 'Kubernetes, Docker, KVM, Openstack, Ansible, Terraform, Prometheus, Grafana',
  },
  {
    title: 'Test Engineer',
    company: 'Nokia',
    location: 'Espoo, Finland',
    period: 'June-2021 - October-2022',
    responsibilities: [
      'Develop and maintain Cloud RAN E2E test setup for vCU and vDU application testing on top of RedHat Openshift',
      'Develop automation and CI/CD flow for Cloud RAN testing using Python, Robot Framework, Bash, Jenkins etc.',
      'Develop and perform automated testing to validate the functionality of Nokia Cloud RAN base stations',
      'Integrate new hardware and software into the test setup',
      'Perform hands on debugging and log analysis to nd root cause and solve any software or hardware issues',
    ],
    tools: 'Keysight Nemo Outdoor, Nemo Analyze, Qualcomm PCAT, QCAT, QXDM',
  },
  {
    title: 'Testing and Prototyping Intern',
    company: 'GE Healthcare',
    location: 'Helsinki, Finland',
    period: 'Jan-2019 - May-2021',
    responsibilities: [
      'Planning, writing, and performing manual and automated tests of different prototype wireless medical devices',
      'Designing driver and PCB circuits in Altium Designer to test the performance of the Digital Sensor Interface',
      'Ensuring the PCB componets used in the devices are EU RoHS and REACH compliant',
    ],
    tools:
      'LTSpice, Altium Designer, HP-ALM, Vector Network Analyzer, Spectrum Analyzer, Climate Chamber',
  },
]

export const EDUCATION = [
  {
    degree: "Master's in Wireless Communication & RF Systems",
    institution: 'Tampere University',
    location: 'Tampere, Finland',
    period: '2018 - 2020',
    thesis: '5G Reference Signals and their Possibility to be for 5G Based Positioning',
  },
  {
    degree: "Bachelor's in Electrical & Electronic Engineering",
    institution: 'Khulna University of Engineering & Technology',
    location: 'Khulna, Bangladesh',
    period: '2013 - 2017',
    thesis:
      'Density-based smart traffic control system using Canny edge detection technique using Digital Image Processing',
  },
]
