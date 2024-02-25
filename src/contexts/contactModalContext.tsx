import { createContext, useState } from "react";

interface ContactModalContextProps {
  isContactModalOpen: boolean;
  setIsContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactModalContext = createContext<ContactModalContextProps>(
  {} as ContactModalContextProps
);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <ContactModalContext.Provider
      value={{ isContactModalOpen, setIsContactModalOpen }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}
