import { ReactNode, useState } from "react";
import { FormDataContext } from "./FormDataContext";
import { TFormData } from "./TFormData";

type TProps = {
  children: ReactNode;
};

export const FormDataProvider = (props: TProps) => {
  const { children } = props;

  const [formData, setFormData] = useState<TFormData[]>([]);

  return (
    <FormDataContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
