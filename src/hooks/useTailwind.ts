import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export function UseTailwindConfig() {
  return resolveConfig(tailwindConfig);
}
