import {
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiGitlab,
} from "react-icons/si";
import { IStack } from "./istack.type";

export const InfrastructureStack: IStack[] = [
  {
    name: "AWS",
    icon: SiAmazonaws,
    color: "text-yellow-500",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-500",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "text-blue-500",
  },
  {
    name: "Terraform",
    icon: SiTerraform,
    color: "text-purple-500",
  },
  {
    name: "Github Actions",
    icon: SiGithubactions,
    color: "text-black",
  },
  {
    name: "Gitlab CI",
    icon: SiGitlab,
    color: "text-orange-500",
  },
];
