import { useContext } from "react";
import { ContactModalContext } from "../contexts/ContactModal.context";

export function useContactModal() {
  return useContext(ContactModalContext);
}
