import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ContactModalContextProps {
  isContactModalOpen: boolean;
  setIsContactModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ContactModalContext = createContext<ContactModalContextProps>(
  {} as ContactModalContextProps
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <ContactModalContext.Provider
      value={{ isContactModalOpen, setIsContactModalOpen }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}
