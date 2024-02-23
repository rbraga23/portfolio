import { cva } from "class-variance-authority";
import { HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary";
}

const buttonVariants = cva("text-md font-medium me-2 px-4 py-2 rounded", {
  variants: {
    variant: {
      primary: "bg-green-500 text-white hover:bg-green-600",
      secondary:
        "bg-transparent border border-green-500 text-green-500 hover:bg-green-600 hover:text-white",
    },
  },
});

export function Button({ variant, text }: ButtonProps) {
  return <button className={buttonVariants({ variant })}>{text}</button>;
}
