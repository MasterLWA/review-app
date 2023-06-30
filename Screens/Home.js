import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../Style/Globle';

export default function Home() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        </View>
    );
}
