import {
  SiJupyter,
  SiScikitlearn,
  SiTensorflow,
  SiIbmwatson,
} from "react-icons/si";
import { IStack } from "./istack.type";

export const MachineLearningStack: IStack[] = [
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
    name: "Tensorflow",
    icon: SiTensorflow,
    color: "text-blue-500",
  },
  {
    name: "IBM Watson",
    icon: SiIbmwatson,
    color: "text-blue-500",
  },
];
