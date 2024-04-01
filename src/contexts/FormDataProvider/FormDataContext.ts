import { Dispatch, SetStateAction, createContext } from "react";
import { TFormData } from "./TFormData";

type TFormDataContext = {
  formData: TFormData[];
  setFormData: Dispatch<SetStateAction<TFormData[]>>;
};

export const FormDataContext = createContext<TFormDataContext>({
  formData: [],
  setFormData: () => {},
});
