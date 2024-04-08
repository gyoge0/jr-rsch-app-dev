import TodoDetails from "@components/TodoDetails";
import { useContext, useEffect } from "react";

import { Todo, TodosContext } from "../todo";

interface EditScreenProps {
    navigation: any;
    route: any;
}

const EditScreen = ({ navigation, route }: EditScreenProps) => {
    const item: Todo = route.params;

    useEffect(() => {
        navigation.setOptions({ title: item.title });
    }, []);

    const { todos, setTodos } = useContext(TodosContext);

    const submit = (todo: Todo) => {
        setTodos(todos.map((other) => (other.id === item.id ? todo : other)));
    };

    return (
        <TodoDetails
            todoItem={item}
            editable
            buttonText="Save"
            onButtonPress={submit}
            navigation={navigation}
        />
    );
};

export default EditScreen;
