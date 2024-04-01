import { ChangeEvent, useState } from "react";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { TFormData, useFormDataContext } from "../../contexts";

type TFormValue = Omit<TFormData, "isDone">;

export const TodoForm = () => {
  const [formValue, setFormValue] = useState<TFormValue>({
    name: "",
  });

  const { setFormData } = useFormDataContext();

  const onSubmit = () => {
    setFormData((prev) => [
      ...prev,
      {
        ...formValue,
        isDone: false,
      },
    ]);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-3">
        <Input name="name" onChange={handleOnChange} />
        <Button type="button">Submit</Button>
      </div>
    </form>
  );
};
