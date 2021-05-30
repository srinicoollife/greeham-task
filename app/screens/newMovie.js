import React, {useState, useEffect, useRef} from "react";
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectGenre, clearSelectedGenres, addNewMovie } from "../actions/action";
import Badge from "../components/badge";

const icon_length = require("../../assets/icons/length.png");
const icon_genre = require("../../assets/icons/genre.png");
const icon_year = require("../../assets/icons/year.png");
const icon_actor = require("../../assets/icons/actor.png");
const icon_plot = require("../../assets/icons/plot.png");

const NewMovie = ({navigation, genres, selectGenre, addNewMovie, selectedGenres, clearSelectedGenres}) => {    
    const [movieName, setmovieName] = useState("");
    const [movieLength, setmovieLength] = useState("");
    const [movieYear, setmovieYear] = useState("");
    const [movieActors, setmovieActors] = useState("");
    const [moviePlot, setmoviePlot] = useState("");

    const setHeaderRight = () => {	
    	navigation.setOptions({ headerRight: (props) => (<RightButton title="save" handleSave={handleSave}/>)});  		
	}  
    setHeaderRight();

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => clearSelectedGenres());
        return unsubscribe;
    }, [navigation]);    

    const handleSave = () => {
        if(!movieName.trim().length){
            alert("please fill in Movie Name")
        } else if(!movieLength.trim().length){
            alert("please fill in Movie Length")
        } else if(!movieYear.trim().length){
            alert("please fill in Movie Year")
        } else if(!selectedGenres.length){
            alert("please select a Genre")
        } else if(!movieActors.trim().length){
            alert("please fill in Actors")
        } else if(!moviePlot.trim().length){
            alert("please fill in Movie Plot")
        } else{        
            let payload = {            
                "title": movieName,
                "year": movieYear,
                "runtime": movieLength,
                "genres": selectedGenres,
                "director": "Tim Burton",
                "actors": movieActors,
                "plot": moviePlot
            };        
            addNewMovie(payload);
            navigation.goBack();   
        }     
    }

    return ( 
        <KeyboardAwareScrollView style={styles.container}>
            <TextField              
              autoCapitalize={"none"}
              returnKeyType="next"
              label="Movie Name"
              value={movieName}
              onChangeText={(value) => setmovieName(value)}                 
            />       
            <View style={{paddingTop: 13, paddingBottom: 46}}>
                <MovieInput label="Length" icon={icon_length}>
                    <TextInput 
                    keyboardType="numeric" 
                    maxLength={3}
                    style={{width: 100, fontSize: 14, fontWeight: '500'}}
                    placeholder="xxx"
                    value={movieLength}
                    onChangeText={(value) => setmovieLength(value)}
                    >                        
                    </TextInput>
                </MovieInput>
                <MovieInput label="Year" icon={icon_year}>
                    <TextInput
                    keyboardType="numeric"
                    maxLength={4}
                    style={{width: 100, fontSize: 14, fontWeight: '500'}}
                    placeholder="xxxx"
                    value={movieYear}
                    onChangeText={(value) => setmovieYear(value)}
                ></TextInput>
                </MovieInput>
                <View style={{borderColor: "#EDF2F7", borderBottomWidth: 4, paddingVertical: 15}}>            
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={icon_genre} style={{width: 24, height: 24}}></Image>                        
                        <Text style={styles.label}>Genre {selectedGenres.length}</Text>            
                    </View>
                    <View style={{flexDirection: "row", flexWrap: "wrap", paddingTop: 15}}>
                        {genres.map((genre, index) => (<Badge key={index} label={genre} onSelect={selectGenre}/>))}
                    </View>
                </View>

                <View style={{borderColor: "#EDF2F7", borderBottomWidth: 4, paddingVertical: 15}}>            
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={icon_actor} style={{width: 24, height: 24}}></Image>                        
                        <Text style={styles.label}>Actors</Text>                        
                    </View>                                                
                    <TextField              
                        autoCapitalize={"none"}
                        returnKeyType="next"
                        placeholder="Enter Actor Name"
                        value={movieActors}
                        onChangeText={(value) => setmovieActors(value)}                 
                    />                                                                            
                </View>

                <View style={{borderColor: "#EDF2F7", borderBottomWidth: 4, paddingVertical: 15}}>            
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={icon_plot} style={{width: 24, height: 24}}></Image>                        
                        <Text style={styles.label}>Plot</Text>            
                    </View>
                    <TextInput
                    multiline={true}
                    textAlignVertical="top"
                    style={{ height: 100}}
                    placeholder="Type in description of movie"
                    value={moviePlot}
                    onChangeText={(value) => setmoviePlot(value)}                 
                    >                        
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
    const { genres, selectedGenres } = app;    
    return { genres, selectedGenres }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        selectGenre,
        clearSelectedGenres,
        addNewMovie
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);