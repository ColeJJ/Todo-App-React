import { StyleSheet, Text, View } from "react-native";
import Todo from "../components/Todo";

const Home = () => {
    return (
        <View style={styles.view_container}>
            <Text style={styles.header}>Todos</Text>
            <Todo content="Test" />
        </View>
    );
};

const styles = StyleSheet.create({
    view_container: {
        position: "relative",
        flex: 1,
        flexDirection: "column",
    },
    header: {
        position: "relative",
        top: "20%",
    },
});

export default Home;
