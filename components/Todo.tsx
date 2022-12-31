import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type TodoProb = {
    content: string;
};

const Todo = ({ content }: TodoProb) => {
    return (
        <View style={styles.todo_container}>
            <Icon name="square-o" size={30}></Icon>
            {/* <Icon name="check-square-o" size={30} color="#900"></Icon> */}
            <Text>{content}</Text>
        </View>
    );
};

// styles

const styles = StyleSheet.create({
    todo_container: {
        position: "absolute",
        flex: 1,
        flexDirection: "row",
        top: "50%",
        justifyContent: "space-between",
        width: "200px",
    },
});

// todo: we might need to do a Icon.Button for toggling the checkbox

export default Todo;
