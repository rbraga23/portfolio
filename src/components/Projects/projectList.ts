import {
  SiAmazonaws,
  SiFirebase,
  SiIbmwatson,
  SiIonic,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiRabbitmq,
  SiReact,
  SiScikitlearn,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IStack } from "../About/stacks/istack.type";
import { BadgeVariants } from "../Badge";
import Ulbra1 from "../../assets/projects/ulbra/ulbra-1.png";
import Ulbra2 from "../../assets/projects/ulbra/ulbra-2.png";
import Ulbra3 from "../../assets/projects/ulbra/ulbra-3.png";
import Fmu1 from "../../assets/projects/fmu/fmu-1.png";
import Fmu2 from "../../assets/projects/fmu/fmu-2.png";
import Auden1 from "../../assets/projects/auden/auden-1.png";
import Auden2 from "../../assets/projects/auden/auden-2.png";
import DrCash1 from "../../assets/projects/dr-cash/dr-cash-1.png";
import DrCash2 from "../../assets/projects/dr-cash/dr-cash-2.png";
import Synkro1 from "../../assets/projects/synkro/synkro-1.png";
import Synkro2 from "../../assets/projects/synkro/synkro-2.png";
import Synkro3 from "../../assets/projects/synkro/synkro-3.png";
import Mkt4eduConex1 from "../../assets/projects/mkt4edu/conex/conex-1.png";
import Mkt4eduConex2 from "../../assets/projects/mkt4edu/conex/conex-2.png";
import Mkt4eduConex3 from "../../assets/projects/mkt4edu/conex/conex-3.png";
import Mkt4eduConex4 from "../../assets/projects/mkt4edu/conex/conex-4.png";
import Mkt4eduIa1 from "../../assets/projects/mkt4edu/ia/ia-1.png";
import Mkt4eduIa2 from "../../assets/projects/mkt4edu/ia/ia-2.png";
import Mkt4eduIa3 from "../../assets/projects/mkt4edu/ia/ia-3.png";
import Mkt4eduIa4 from "../../assets/projects/mkt4edu/ia/ia-4.png";

type ProjectType = {
  name:
    | "Fullstack"
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "Machine Learning"
    | "Infrastructure"
    | "Data";
  variant: BadgeVariants;
};

export interface Project {
  title: string;
  subtitle: string;
  type: ProjectType[];
  description: string;
  stack: IStack[];
  projectLinks?: Array<{
    title: string;
    link?: string;
  }>;
  companyLink?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "ulbraTitle",
    subtitle: "registrationForm",
    type: [
      {
        name: "Fullstack",
        variant: "red",
      },
      {
        name: "Infrastructure",
        variant: "yellow",
      },
    ],
    description: "ulbraDescription",
    stack: [
      {
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "text-black",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "text-red-500",
      },
      {
        name: "AWS",
        icon: SiAmazonaws,
        color: "text-yellow-500",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
    ],
    projectLinks: [
      {
        title: "project",
        link: "https://inscricoes.ulbra.br/",
      },
      {
        title: "company",
        link: "https://ulbra.br/",
      },
    ],
    images: [Ulbra1, Ulbra2, Ulbra3],
  },
  {
    title: "fmuTitle",
    subtitle: "registrationForm",
    type: [
      {
        name: "Fullstack",
        variant: "red",
      },
      {
        name: "Infrastructure",
        variant: "yellow",
      },
    ],
    description: "fmuDescription",
    stack: [
      {
        name: "React",
        icon: SiReact,
        color: "text-blue-500",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "text-red-500",
      },
      {
        name: "AWS",
        icon: SiAmazonaws,
        color: "text-yellow-500",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
    ],
    projectLinks: [
      {
        title: "project",
        link: "https://inscricoes.fmu.br/",
      },
      {
        title: "company",
        link: "https://fmu.br/",
      },
    ],
    images: [Fmu1, Fmu2],
  },
  {
    title: "Dr.Cash",
    subtitle: "financialDashboard",
    type: [
      {
        name: "Frontend",
        variant: "blue",
      },
    ],
    description: "drCashDescription",
    stack: [
      {
        name: "React",
        icon: SiReact,
        color: "text-blue-500",
      },
    ],
    projectLinks: [
      {
        title: "project",
      },
      {
        title: "company",
        link: "https://www.drcash.com.br/",
      },
    ],
    images: [DrCash1, DrCash2],
  },
  {
    title: "audenTitle",
    subtitle: "registrationForm",
    type: [
      {
        name: "Fullstack",
        variant: "red",
      },
      {
        name: "Infrastructure",
        variant: "yellow",
      },
    ],
    description: "audenDescription",
    stack: [
      {
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "text-black",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "text-red-500",
      },
      {
        name: "AWS",
        icon: SiAmazonaws,
        color: "text-yellow-500",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
    ],
    projectLinks: [
      {
        title: "project",
        link: "https://inscricao.auden.edu.br/",
      },
      {
        title: "company",
        link: "https://auden.edu.br/",
      },
    ],
    images: [Auden1, Auden2],
  },
  {
    title: "Synkro",
    subtitle: "financialApp",
    type: [
      {
        name: "Mobile",
        variant: "green",
      },
      {
        name: "Backend",
        variant: "gray",
      },
      {
        name: "Infrastructure",
        variant: "yellow",
      },
    ],
    description: "synkroDescription",
    stack: [
      {
        name: "Ionic",
        icon: SiIonic,
        color: "text-blue-500",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-yellow-500",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "text-red-500",
      },
      {
        name: "AWS",
        icon: SiAmazonaws,
        color: "text-yellow-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
    ],
    projectLinks: [
      {
        title: "project",
        link: "https://apps.apple.com/us/app/synkro-app/id1659767359",
      },
      {
        title: "company",
        link: "https://synkromanagement.com/",
      },
    ],
    images: [Synkro1, Synkro2, Synkro3],
  },
  {
    title: "mkt4edu",
    subtitle: "hubspotIntegration",
    type: [
      {
        name: "Backend",
        variant: "gray",
      },
      {
        name: "Infrastructure",
        variant: "yellow",
      },
    ],
    description: "mkt4eduConexDescription",
    stack: [
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "text-red-500",
      },
      {
        name: "AWS",
        icon: SiAmazonaws,
        color: "text-yellow-500",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        color: "text-orange-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
    ],
    projectLinks: [
      {
        title: "project",
      },
      {
        title: "company",
        link: "https://www.mkt4edu.com/",
      },
    ],
    images: [Mkt4eduConex1, Mkt4eduConex2, Mkt4eduConex3, Mkt4eduConex4],
  },
  {
    title: "mkt4edu",
    subtitle: "machineLearningModel",
    type: [
      {
        name: "Machine Learning",
        variant: "purple",
      },
    ],
    description: "mkt4eduConexDescription",
    stack: [
      {
        name: "Jupyter",
        icon: SiJupyter,
        color: "text-orange-500",
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
        color: "text-yellow-500",
      },
      {
        name: "IBM Watson",
        icon: SiIbmwatson,
        color: "text-blue-500",
      },
    ],
    projectLinks: [
      {
        title: "project",
      },
      {
        title: "company",
        link: "https://www.mkt4edu.com/",
      },
    ],
    images: [Mkt4eduIa1, Mkt4eduIa2, Mkt4eduIa3, Mkt4eduIa4],
  },
];
