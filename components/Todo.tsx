import { View, Text } from "react-native";

type TodoProb = {
    content: string;
};

const Todo = ({ content }: TodoProb) => {
    return (
        <View>
            <Text>{content}</Text>
        </View>
    );
};

export default Todo;
