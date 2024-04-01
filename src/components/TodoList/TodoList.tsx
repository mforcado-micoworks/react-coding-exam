import { TodoListItem } from "../TodoListItem";

export const TodoList = () => {
  return (
    <div className="py-3 flex flex-col gap-3">
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};
