import { cva } from "class-variance-authority";

export type BadgeVariants =
  | "blue"
  | "gray"
  | "green"
  | "red"
  | "yellow"
  | "purple";

interface BadgeProps {
  text: string;
  variant?: BadgeVariants;
}

const badgeVariants = cva("text-xs font-medium me-2 px-2.5 py-0.5 rounded", {
  variants: {
    variant: {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      gray: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
      green:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      yellow:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      purple:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    },
  },
});

export function Badge({ text, variant }: BadgeProps) {
  return <div className={badgeVariants({ variant })}>{text}</div>;
}
