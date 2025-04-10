import { Building2, Calendar, GraduationCap, MapPin, Microscope, Wrench } from 'lucide-react'
import { COLORS } from '../constants'

const Experience = () => {
  const experiences = [
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

  const education = [
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

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2
        className={`text-3xl ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} py-4 font-medium font-burtons text-center`}
      >
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`border-l-4 ${COLORS.BORDER} ${COLORS.DARK_BORDER} pl-4 space-y-2`}
          >
            <div className="flex items-center gap-2">
              <Building2 className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`} size={24} />
              <h3 className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} text-xl font-semibold`}>
                {exp.title}
              </h3>
            </div>

            <div
              className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}
            >
              <div className="flex items-center gap-1">
                <Building2 size={16} />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className={`${COLORS.TEXT} ${COLORS.DARK_TEXT} space-y-1`}>
              {exp.responsibilities.map((resp, idx) => (
                <p key={idx} className="flex text-wrap items-start">
                  <span className="mr-2 mt-1 ml-4">*</span>
                  <span className="text-left">{resp}</span>
                </p>
              ))}
            </div>
            <div className={`${COLORS.TEXT} ${COLORS.DARK_TEXT} space-y-1 flex items-start`}>
              <div className="flex text-wrap items-center gap-2">
                <Wrench size={20} />
                <span>{exp.tools}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2
        className={`text-3xl ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} mt-6 py-4 font-medium font-burtons text-center`}
      >
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`border-l-4 ${COLORS.BORDER} ${COLORS.DARK_BORDER} pl-4 space-y-2`}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`} size={24} />
              <h3 className={`text-xl font-semibold ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
                {edu.degree}
              </h3>
            </div>

            <div
              className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}
            >
              <div className="flex items-center gap-1">
                <Building2 size={16} />
                <span>{edu.institution}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>
            </div>
            <div className={`space-y-1 flex items-start ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}>
              <div className="flex items-center gap-2">
                <Microscope size={20} />
                <span className={`text-left ${COLORS.TEXT} ${COLORS.DARK_TEXT}`}>{edu.thesis}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
