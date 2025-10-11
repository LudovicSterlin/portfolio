/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

// FIXME: need shorter description for subTitle of greeting homepage
const DESCRIPTION =
  "Interest in AI, data science, software engineering, cybersecurity and more... " +
  "I graduated with a M.Sc. in Aerospace engineering, major in AI, Data Science — ML, Reinforcement Learning and Deep Learning — and Neuroergonomics at ISAE-SUPAERO. " +
  "Creative and innovative mind, with an eclectic range of interests. Curious by nature and a big desire to discover and learn new things in different fields. " +
  "I'm eager to bring my knowledge and solutions to develop cutting-edge technologies. ";

//SEO Related settings
const seo = {
  title: "Ludovic Sterlin Portfolio",
  description: DESCRIPTION,
  og: {
    title: "Ludovic Sterlin Portfolio",
    type: "website",
    url: "https://ludovicsterlin.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ludovic Sterlin",
  logo_name: "LudovicSterlin",
  nickname: "Luuudo",
  subTitle: DESCRIPTION,
  // TODO:2022-10-24:@LudovicSterlin: add link to CV from github gist ?
  resumeLink: "https://www.linkedin.com/in/ludovic-sterlin/",
  portfolio_repository:
    "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FLudovicSterlin",
  githubProfile: "https://github.com/LudovicSterlin",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/LudovicSterlin",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ludovic-sterlin/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Mail",
    link: "mailto:l.sterlin.pro@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    iconStyle: "fas",
    backgroundColor: "#827d7dff",
  },
  // {
  //   name: "Gmail",
  //   link: "mailto:l.sterlin.pro@gmail.com",
  //   fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/username",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/username/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/username/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Typescript, Python & Java. Using Node & Express, FastAPI or Django, Spring",
        "⚡ Building responsive website front end using React and Vue",
        "⚡ Developing mobile applications using React Native",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "pnpm",
          fontAwesomeClassname: "simple-icons:pnpm",
          style: {
            color: "#F69220",
          },
        },
        {
          skillName: "Turborepo",
          fontAwesomeClassname: "simple-icons:turborepo",
          style: {
            color: "#FF1E56",
          },
        },
        {
          skillName: "Lerna",
          fontAwesomeClassname: "simple-icons:lerna",
          style: {
            color: "#9333EA",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Directus",
          fontAwesomeClassname: "simple-icons:directus",
          style: {
            color: "#263238",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Switching servers deployment from manual Docker deployment on AWS ec2 to Terraform deployment with Helm and K8s.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "simple-icons:helm",
          style: {
            color: "#0F1689",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#844FBA",
          },
        },
      ],
    },
    {
      title: "Productivity Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Using the right tools to improve efficiency and automation of no-value tasks",
        "⚡ Building automation workflows using n8n",
        "⚡ Developing custom CLI with oclif to automate routine dev workflows (DB restores, product launches) and boost developer velocity. Integrating AWS S3, SharePoint, and Slack for seamless internal tooling.",
        "⚡ Finding really cool tools and extensions like jump.",
      ],
      softwareSkills: [
        {
          skillName: "Notion",
          fontAwesomeClassname: "simple-icons:notion",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "n8n",
          fontAwesomeClassname: "simple-icons:n8n",
          style: {
            color: "#EA4B71",
          },
        },
        {
          skillName: "Overleaf",
          fontAwesomeClassname: "simple-icons:overleaf",
          style: {
            color: "#47A141",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // TODO:2022-10-25:@LudovicSterlin: register on competitive sites at least Kaggle
    {
      siteName: "CodinGame",
      iconifyClassname: "simple-icons:codingame",
      style: {
        color: "#F2BB13",
      },
      profileLink:
        "https://www.codingame.com/profile/c2c170c23239d4c4eab1e781239cee726775832",
    },
    {
      siteName: "Advent Of Code",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#17C101",
      },
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institut Supérieur de l'Aéronautique et de l'Espace - Supaero",
      subtitle: "Master’s Degree in Science and Engineering (MSc)",
      logo_path: "isae_logo.png",
      alt_name: "ISAE Supaero",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ Major Specialization in Data Science, covering broad range of algorithms in Machine Learning, Reinforcement Learning and Deep Learning.",
        "⚡ Minor in Artificial Intelligence applied for Neurosciences and Neuroergonomics.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      // descriptions: [
      //   "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      //   "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      //   "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      // ],
      website_link: "https://www.isae-supaero.fr/",
    },
    {
      title: "Institut Supérieur de l'Aéronautique et de l'Espace - Supaero",
      subtitle:
        "Environmental engineering certificate from the Airbus Chair CEDAR (Chair for Eco Design of Aircraft)",
      logo_path: "cedar_logo.png",
      alt_name: "CEDAR",
      duration: "2021",
      descriptions: [
        "2-month training course, given by speakers of various profiles from industry, research centers, schools or self-employed.",
        "This training is based on a unifying project and a program divided into 3 parts on the following themes",
        "⚡ Climate and energy",
        "⚡ Sustainable development and aeronautics",
        "⚡ Transport and environment",
      ],
      website_link:
        "https://www.isae-supaero.fr/en/about-isae-supaero/sponsorship-relations-with-the-isae-supaero-foundation-212/chaire-cedar/",
    },
  ],
};

const certifications = {
  // TODO:2022-10-25:@LudovicSterlin: Pass certifications ^^
  certifications: [
    {
      title: "Work In Progress",
      subtitle: "- ",
      logo_path: "wip_logo.png",
      certificate_link: "",
      alt_name: "WIP",
      color_code: "#FFD700",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships and Summer jobs",
  description:
    "I have worked for more than 6 years in an evolving startup called Hinfact as a Lead Full Stack Engineer, Software Engineer, Data Scientist and Research Assistant. During my last project I also did the Specifications, Design and Software Architecture for a new product. Moreover, I gained experience during multiple school and personal projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Lead Full Stack Engineer",
          company: "Hinfact",
          company_url: "https://www.hinfact.fr",
          logo_path: "hinfact_logo.png",
          duration: "Sep 2023 - PRESENT",
          location: "Toulouse, France",
          description: {
            header:
              "Led cross-functional product development and process improvements with a focus on scalable architecture and developer experience.",
            bullets: [
              "Architected and implemented scalable solutions, focusing on maintainable code and robust testing practices.",
              "Established best practices for API development, database design, ensuring high performance and reliability.",
              "Implemented comprehensive testing strategies including unit, integration, and end-to-end tests to ensure code quality.",
              "Actively contributed to development while driving problem-solving sessions and cross-team collaboration.",
              "Led technical workshops and code reviews to promote knowledge sharing, maintain high code standards and support team growth and continuous learning.",
              "Acted as the bridge between engineering and product/support teams to align priorities and optimize delivery processes.",
              "Ensured smooth product releases by managing stakeholder expectations and driving team accountability.",
              "Managed multiple Tableau server and dashboards, customizable by client, improving data accessibility and decision-making.",
              "Use of Google Workspace for collaborative reporting and documentation, including Sheets-based data modeling and automated dashboards.",
            ],
          },
          color: "#124AF9",
        },
        {
          title: "Software Engineer",
          company: "Hinfact",
          company_url: "https://www.hinfact.fr",
          logo_path: "hinfact_logo.png",
          duration: "Sep 2019 - Sep 2023",
          location: "Toulouse, France",
          description: {
            header:
              "Build scalable products and core features from POC to industrialization in fast-paced, client-driven environments.",
            bullets: [
              "Developed a custom internal CLI with oclif to automate routine dev workflows (DB restores, product launches) and boost developer velocity. Integrated AWS S3, SharePoint, and Slack for seamless internal tooling.",
              "Developed major new features in a fast-paced release environment to deliver beta versions for prospect clients.",
              "Specifications, design and support of entire new products, POC, MVP and Industrialisation Phase.",
              "Switch from npm to pnpm + Turborepo to improve DevX, speed up CI/CD, build and release time.",
              "Servers deployment switched from Docker to K8s on AWS.",
              "Conception and implementation of a native teaching assistant App based on Eye tracking and Flight data.",
              "Developed a stateless microservice architecture from scratch, exposing APIs to handle heavy algorithmic computing (constraint optimization, AI models) across multiple servers.",
            ],
          },
          color: "#124AF9",
        },
        {
          title:
            "Research project leader - master thesis. Engineer in Data-Science and Neuroergonomics",
          company: "Hinfact",
          company_url: "https://www.hinfact.fr",
          logo_path: "hinfact_logo.png",
          duration: "Jun 2021 - Dec 2021",
          location: "Toulouse, France",
          description:
            "Designed and executed pilot experiments in aeronautical scenarios to develop metrics and models predicting performance and mental states based on physiological and behavioral data.",
          color: "#124AF9",
        },
        {
          title: "Machine Learning Engineer",
          company: "DCAS Neuroergonomics and Human Factors team, ISAE Supaero",
          company_url: "https://www.isae-supaero.fr",
          logo_path: "isae_logo.png",
          duration: "Oct 2020 - Mar 2021",
          location: "Toulouse, France",
          description:
            "Recognition and extraction of flight data via Computer Vision (OCR) in a cockpit environment",
          color: "#16206E",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research engineer for Comp’Chain project",
          company:
            "Department of Complex Systems Engineering, (DISC), ISAE Supaero",
          company_url: "https://www.isae-supaero.fr",
          logo_path: "isae_logo.png",
          duration: "Mar 2019 - July 2019",
          location: "Toulouse, France",
          description:
            "POC of a Diploma/Degree certification application (web interface and API) based on Ethereum Blockchain",
          color: "#16206E",
        },
        {
          title: "Full stack developer for CALENDAR project",
          company: "4th year student's project at ISAE Supaero",
          company_url: "https://www.isae-supaero.fr",
          logo_path: "isae_logo.png",
          duration: "Feb 2019 - Mar 2019",
          location: "Toulouse, France",
          description:
            "Developing a Web App for managing calendar and events, within a group of 4 students",
          color: "#16206E",
        },
        {
          title: "Research assistant in Computer Science",
          company:
            "Department of Complex Systems Engineering, (DISC), ISAE Supaero",
          company_url:
            "https://www.isae-supaero.fr/en/research/departments/department-of-complex-systems-engineering-disc-94/department-of-complex-systems-engineering-disc/",
          logo_path: "isae_logo.png",
          duration: "Nov 2017 - Feb 2018",
          location: "Toulouse, France",
          description:
            "Implementations of small projects in C. Implementation/resolution of mazes. Test and review of a course 'Introduction to functional programming'",
          color: "#16206E",
        },
      ],
    },
    {
      title: "Summer Jobs",
      experiences: [
        {
          title: "Delivery driver, order picker",
          company: "TechniFreins GroupAuto",
          company_url: "https://distributeur.groupauto.fr/320-techni-freins",
          logo_path: "groupauto_logo.svg",
          duration: "July, August 2017",
          location: "Libourne, France",
          description: "",
          color: "#121046",
        },
        {
          title: "Hotel Catering employee",
          company: "LEO Resto et ACE hôtel",
          company_url:
            "https://www.leoresto.fr/nous-trouver/aire-de-bordeaux-cestas-ouest.html",
          logo_path: "leoresto_logo.png",
          duration: "July, August 2016",
          location: "Cestas, France",
          description: "",
          color: "#787f34",
        },
        {
          title: "Wine worker",
          company: "Château Petit Boyer",
          company_url: "https://www.petit-boyer.com",
          logo_path: "petitboyer_logo.png",
          duration: "July, August 2014",
          location: "Blaye, France",
          description: "",
          color: "#141215",
        },
        {
          title:
            "Internship at a French military airbase, Fighter-Pilot formation units",
          company: "BA120 armée de l’air",
          company_url:
            "https://devenir-aviateur.fr/venir/implantations/base-aerienne/base-aerienne-120-cazaux",
          logo_path: "armeeair_logo.png",
          duration: "February 2011",
          location: "Cazaux, France",
          description: "",
          color: "#0D3ACB",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here is some of my public projects. Mostly python and jupyter notebooks school projects. Also, some personal side project in Python or Javascript. You can find all my project on my github.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Unfortunately my research work was done under NDA, and is still confidential but you can check out my company White Paper or some of my best-friends publications, enjoy.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "HINFACT_white-paper",
      name: "A unified Human Factor Approach",
      createdAt: "2021-01-15T16:26:54Z",
      description:
        "A unified approach in Human Factors for the Aviation industry, by Hinfact",
      url:
        "http://hinfact.fr/our-vision-a-unified-human-factor-approach/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE4NjIiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D",
    },
    {
      id: "BENA-20210604",
      name: "Extreme sparsity gives rise to functional specialization",
      createdAt: "2021-06-04T17:39:36Z",
      description:
        "Paper on neural networks sparsity by Gabriel Béna. (Neurosciensce, ML, AI)",
      url: "https://hal.archives-ouvertes.fr/hal-03709706/",
    },
    {
      id: "BRAIDA-20220630",
      name: "Locality and approximation in Quantum Annealing",
      createdAt: "2022-06-30T10:01:16Z",
      description: "Paper on Quantum Annealing by Arthur Braida.",
      url: "https://hal.archives-ouvertes.fr/hal-03709706/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ludovic_circle.png",
    description:
      "I am available on those social medias. You can message me, I will try to reply within 24 hours. I can help you with RL, ML, AI, Python, JavaScript, Typescript, Cloud and Open Source Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Under construction",
    //   "I like to write it down sometimes, when I succeed in doing something that was not well documented yet on the internet.",
    link: "#/contact",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Currently based in Toulouse, France",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/46TSyWyKfzDbpQWY9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "Ask me by mail",
    link: "mailto:l.sterlin.pro@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
