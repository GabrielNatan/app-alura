import React from 'react';
import { Text,StyleSheet } from 'react-native';

export default function Texto({children,style}){
    let styles = estilos.text;

    if(style?.fontWeight === "bold"){
        styles = estilos.textNegrito;
    }
 
    return <Text style={{...styles,...style}}>{children}</Text>
}

const estilos = StyleSheet.create({
    text:{
        fontfamily:"MRegular",
        fontWeight:"normal"
    },
    textNegrito:{
        fontfamily:"MBold",
        fontWeight:"normal"
    }
})