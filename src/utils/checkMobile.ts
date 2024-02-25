import { UseTailwindConfig } from "../hooks/useTailwind.hook";

export function checkMobile() {
  const tailwindConfig = UseTailwindConfig();
  return window.innerWidth < parseInt(tailwindConfig.theme.screens.md);
}

export function emptyOnMobile(object: object) {
  return checkMobile() ? {} : object;
}
