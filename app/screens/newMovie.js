import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NewMovie = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <Text>hello</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
export default NewMovie;