import { useFormDataContext } from "../../contexts";
import { TodoListItem } from "../TodoListItem";

export const TodoList = () => {
  const { formData } = useFormDataContext();

  const mappedTodos = (() => {
    if (formData.length > 0) {
      return formData.map((todo) => {
        return <TodoListItem key={todo.name} {...todo} />;
      });
    }

    return <p className="text-center">Please add todo.</p>;
  })();

  return <div className="py-3 flex flex-col gap-3">{mappedTodos}</div>;
};
