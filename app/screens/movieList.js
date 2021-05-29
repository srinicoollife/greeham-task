import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { connect } from 'react-redux';
import MovieCard from "../components/movieCard";

const icon_plus = require("../../assets/icons/plus.png");

const MovieList = ({navigation, movies}) => {    
    return (     
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>               
                {
                    movies.map((movie,index) => (<MovieCard key={index} movie={movie}/>))
                }                
            </ScrollView>  
            
            <TouchableOpacity style={styles.add_button} activeOpacity={0.7} onPress={() => navigation.navigate("newMovie")}>
                <Image source={icon_plus} style={{width: 36, height: 36}}></Image>
            </TouchableOpacity>            
        </View>           
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8FF',
      paddingTop: 24,      
      paddingLeft: 15,
      paddingRight: 15      
    },   
    add_button: {
      backgroundColor: "#2F80ED",
      width: 59,
      height: 59,
      borderRadius: 50,
      position: "absolute",
      bottom: 22,
      right: 15,
      justifyContent: "center",
      alignItems: "center"
    }
});

const mapStateToProps = (state) => {
    const { app } = state;
    const { movies } = app;    
    return { movies }
  };
  
export default connect(mapStateToProps, {})(MovieList);