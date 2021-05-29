import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MovieCard = ({movie}) => {
    const { title, year, runtime, genres, actors, plot } = movie;
    return (  
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{year} | {runtime} min | {genres.join(", ")}</Text>
            <Text style={styles.sub_title}>{actors}</Text>
            <Text style={styles.desc}>{plot}</Text>
        </View>
    );
}

const styles = StyleSheet.create({   
    card: {
        backgroundColor: '#EEEEEE',
        borderRadius: 20,        
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 20,        
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#062F82",
        paddingBottom: 5        
    },  
    sub_title:{
        fontSize: 14,
        fontWeight: "500",
        color: "#4C0AD8",
        paddingBottom: 5                
    },
    desc:{
        color: "#4A5568",
        fontSize: 12,
        fontWeight: "500",
        paddingBottom: 5
    }
});

export default MovieCard;