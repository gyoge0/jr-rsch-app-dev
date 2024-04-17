import TodoDetails from "@components/TodoDetails";
import { useEffect } from "react";

import { Todo } from "../todo";

interface ShowScreenProps {
    route: any;
    navigation: any;
}

const ShowScreen = ({ route, navigation }: ShowScreenProps) => {
    const item: Todo = route.params;

    useEffect(() => {
        navigation.setOptions({ title: item.title });
    }, []);

    return <TodoDetails todoItem={item} editable={false} />;
};

export default ShowScreen;
