import { ChangeEventHandler } from "react";

type TProps = {
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Input = (props: TProps) => {
  const { ...rest } = props;

  return (
    <input
      {...rest}
      className="border rounded p-3 w-full"
      placeholder="Write your task..."
    />
  );
};
