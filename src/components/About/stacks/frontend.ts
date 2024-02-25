import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiJquery,
  SiWordpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IStack } from "./istack.type";

export const FrontendStack: IStack[] = [
  {
    name: "HTML/CSS",
    icon: SiHtml5,
    color: "text-orange-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-500",
  },
  {
    name: "jQuery",
    icon: SiJquery,
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-blue-500",
  },
  {
    name: "Next.js",
    icon: TbBrandNextjs,
    color: "text-black",
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    color: "text-green-500",
  },

  {
    name: "Wordpress",
    icon: SiWordpress,
    color: "text-blue-500",
  },
];
