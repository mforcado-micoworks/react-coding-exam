import classNames from "classnames";
import { TFormData, useFormDataContext } from "../../contexts";

type TProps = TFormData;

export const TodoListItem = (props: TProps) => {
  const { name, isDone } = props;

  const { setFormData } = useFormDataContext();

  const handleOnCheck = () => {
    setFormData((prev) => {
      return prev.map((todo, index) => {
        if (index === prev.length - 1) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }

        return todo;
      });
    });
  };

  return (
    <div
      className={classNames("border p-3 flex gap-3 rounded", {
        "bg-green-100": isDone,
      })}
    >
      <input name={name} onChange={handleOnCheck} type="checkbox" />
      <p>{name}</p>
    </div>
  );
};
