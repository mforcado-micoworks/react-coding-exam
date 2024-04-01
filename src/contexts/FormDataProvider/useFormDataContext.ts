import { useContext } from "react";
import { FormDataContext } from "./FormDataContext";

export const useFormDataContext = () => {
  const formDataContext = useContext(FormDataContext);

  if (!formDataContext) {
    throw new Error(
      "useFormDataContext must be used within a FormDataProvider"
    );
  }

  return formDataContext;
};
