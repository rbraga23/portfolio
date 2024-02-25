import {
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
} from "react-icons/si";
import { IStack } from "./istack.type";

export const DataStack: IStack[] = [
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-500",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "text-red-500",
  },
  {
    name: "RabbitMQ",
    icon: SiRabbitmq,
    color: "text-orange-500",
  },
];
