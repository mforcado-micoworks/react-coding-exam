import { ButtonHTMLAttributes } from "react";

type TProps = {
  children: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export const Button = (props: TProps) => {
  const { children, ...rest } = props;

  return (
    <button {...rest} type="button" className="border rounded p-3">
      {children}
    </button>
  );
};
