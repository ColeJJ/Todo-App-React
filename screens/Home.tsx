import { Text, View } from "react-native";
import Todo from "../components/Todo";

const Home = () => {
    return (
        <View>
            <Text>Todos</Text>
            <Todo content="Test" />
        </View>
    );
};

export default Home;
