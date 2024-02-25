import {
  SiPhp,
  SiCakephp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastify,
  SiPython,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiSpring,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IStack } from "./istack.type";

export const BackendStack: IStack[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-gray-500",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-500",
  },
  {
    name: "Fastify",
    icon: SiFastify,
    color: "text-black",
  },
  {
    name: "ElysiaJS",
    icon: null,
    color: null,
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "text-blue-500",
  },
  {
    name: "CakePHP",
    icon: SiCakephp,
    color: "text-red-500",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-red-500",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-yellow-500",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "text-green-500",
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "text-zinc-500",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-green-500",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-red-500",
  },
  {
    name: "Spring",
    icon: SiSpring,
    color: "text-green-500",
  },

  {
    name: "C#",
    icon: SiCsharp,
    color: "text-blue-500",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    color: "text-blue-500",
  },
];
