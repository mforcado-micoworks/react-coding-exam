import { Button } from "../../components";
import { Input } from "../../components/Input";

export const TodoForm = () => {
  return (
    <form>
      <div className="flex gap-3">
        <Input />
        <Button>Submit</Button>
      </div>
    </form>
  );
};
