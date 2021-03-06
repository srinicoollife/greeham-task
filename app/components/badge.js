import React, {useState} from "react";
import { Text, TouchableOpacity } from "react-native";

const Badge = ({label, onSelect}) => {
    const [isSelected, setisSelected] = useState(false);    
    handleOnpress = () => {
        setisSelected(!isSelected)
        onSelect(label)
    }
    return(
        <TouchableOpacity style={{marginHorizontal: 8, marginVertical: 8, borderRadius: 50, paddingHorizontal: 8, paddingVertical: 2,
            borderColor: "#0275d8", borderWidth: 1,
            backgroundColor: isSelected? "#0275d8": "#fff"            
            }}
        onPress={handleOnpress}>
            <Text style={{fontSize: 12, color: isSelected? "#fff": "black", fontWeight: '500'}}>{label}</Text>
        </TouchableOpacity>
    )
}
export default Badge;