import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
        <Text>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,

    },
});