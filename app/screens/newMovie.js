import React, {useState, useEffect, useRef} from "react";
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { connect } from 'react-redux';
import Badge from "../components/badge";

const icon_length = require("../../assets/icons/length.png");
const icon_genre = require("../../assets/icons/genre.png");
const icon_year = require("../../assets/icons/year.png");
const icon_actor = require("../../assets/icons/actor.png");
const icon_plot = require("../../assets/icons/plot.png");

const NewMovie = ({navigation, genres}) => {        
    useEffect(() => {
        setHeaderRight();
    }, []);

    const setHeaderRight = () => {	
    	navigation.setOptions({ headerRight: (props) => <RightButton handleSave={handleSave} title="Save"/> });  		
	}  

    const handleSave = () => {
        
    }
    return ( 
        <KeyboardAwareScrollView style={styles.container}>
            <TextField              
              autoCapitalize={false}
              returnKeyType="next"
              label="Movie Name"                 
            />       
            <View style={{paddingTop: 13, paddingBottom: 46}}>
                <MovieInput label="Length" icon={icon_length}>
                    <TextInput keyboardType="numeric" maxLength="3" style={{width: 100, fontSize: 14, fontWeight: '500'}} placeholder="xxx"></TextInput>
                </MovieInput>
                <MovieInput label="Year" icon={icon_year}>
                    <TextInput keyboardType="numeric" maxLength="4" style={{width: 100, fontSize: 14, fontWeight: '500'}} placeholder="xxxx"></TextInput>
                </MovieInput>
                <View style={{borderColor: "#EDF2F7", borderBottomWidth: 4, paddingVertical: 15}}>            
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={icon_genre} style={{width: 24, height: 24}}></Image>                        
                        <Text style={styles.label}>Genre</Text>            
                    </View>
                    <View style={{flexDirection: "row", flexWrap: "wrap", paddingTop: 15}}>
                        {genres.map(genre => (<Badge label={genre}/>))}
                    </View>
                </View>

                <View style={{borderColor: "#EDF2F7", borderBottomWidth: 4, paddingVertical: 15}}>            
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={icon_actor} style={{width: 24, height: 24}}></Image>                        
                        <Text style={styles.label}>Actors</Text>                        
                    </View>                                                
                    <TextField              
                        autoCapitalize={false}
                        returnKeyType="next"
                        placeholder="Enter Actor Name"                 
                    />                                                                            
                </View>

                <View style={{borderColor: "#EDF2F7", borderBottomWidth: 4, paddingVertical: 15}}>            
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={icon_plot} style={{width: 24, height: 24}}></Image>                        
                        <Text style={styles.label}>Plot</Text>            
                    </View>
                    <TextInput multiline={true} textAlignVertical="top" style={{ height: 100}} placeholder="Type in description of movie">                        
                    </TextInput>
                </View>
                
            </View>     
        </KeyboardAwareScrollView>
     );
}

const MovieInput = ({children, label, icon}) => {
    return (
        <View style={styles.movie_input_container}>            
            <Image source={icon} style={{width: 24, height: 24}}></Image>                        
            <Text style={styles.label}>{label}</Text>            
            <View style={{flexGrow: 1, alignItems: "flex-end"}}>
                {children}
            </View>
        </View>
    );
}

const RightButton = ({handleSave, title}) => {
    return(
        <TouchableOpacity onPress={handleSave} activeOpacity={0.8}>
            <Text style={{color: "#008000", fontWeight: "500", fontSize: 16, paddingRight: 23}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8FF',      
      paddingTop: 25,
      paddingHorizontal: 18
    },
    movie_input_container: {
        flexDirection: "row",       
        alignItems: "center",
        borderColor: "#EDF2F7",
        borderBottomWidth: 4,
        paddingVertical: 15
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        paddingLeft: 25
    }
});

const mapStateToProps = (state) => {
    const { app } = state;
    const { genres } = app;    
    return { genres }
  };
  
export default connect(mapStateToProps, {})(NewMovie);