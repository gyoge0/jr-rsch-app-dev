import TodoDetails from "@components/TodoDetails";
import { useContext } from "react";

import { randomId, Todo, TodosContext } from "../todo";

interface CreateScreenProps {
    navigation: any;
}

const CreateScreen = ({ navigation }: CreateScreenProps) => {
    const { todos, setTodos } = useContext(TodosContext);

    const submit = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const todo: Todo = {
        title: "",
        content: "",
        id: randomId(),
    };

    return (
        <TodoDetails
            todoItem={todo}
            editable
            buttonText="Save"
            onButtonPress={submit}
            navigation={navigation}
        />
    );
};

export default CreateScreen;
