import * as Dialog from "@radix-ui/react-dialog";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Modal({ children, isOpen, setIsOpen, title }: ModalProps) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 bg-opacity-50 transition-opacity z-40"
        />
        <Dialog.Content className="w-full max-w-2xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 md:px-0 shadow rounded-md bg-stone-100 dark:bg-slate-900 dark:text-white z-50">
          <div className="w-full flex justify-between border-b dark:border-gray-800">
            <Dialog.Title className="py-4 px-8 text-2xl">{title}</Dialog.Title>
            <Dialog.Close
              onClick={() => setIsOpen(false)}
              className="py-4 px-6 text-2xl"
            >
              <IoIosCloseCircle />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
