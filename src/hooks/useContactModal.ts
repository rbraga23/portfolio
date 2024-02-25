import { useContext } from "react";
import { ContactModalContext } from "../contexts/contactModalContext";

export function useContactModal() {
  return useContext(ContactModalContext);
}
