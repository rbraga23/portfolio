import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...ìnputs: ClassValue[]) {
  return twMerge(clsx(...ìnputs));
}
