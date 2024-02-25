import { forwardRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div className="relative min-h-11 w-full min-w-[200px]">
        <textarea
          className="peer h-full w-full border-b border-gray-800 dark:border-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-black dark:text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          ref={ref}
          {...rest}
        />
        <label className="after:content[' '] pointer-events-none absolute left-0 -top-4 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-900 dark:text-gray-200 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 dark:after:border-gray-200 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-green-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 dark:peer-focus:text-gray-300 peer-focus:after:scale-x-100 peer-focus:after:border-gray-800 dark:peer-focus:after:border-gray-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {label}
        </label>
      </div>
    );
  }
);
