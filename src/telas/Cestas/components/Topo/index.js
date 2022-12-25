import { Image, StyleSheet,Dimensions } from "react-native"
import topo from '../../../../../assets/topo.png';
import Texto from "../../../../components/Texto"

const width = Dimensions.get('screen').width;

export default function Topo({titulo}){

    return<>
            <Image style={estilos.topo} source={topo}/>
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    
} 

const estilos = StyleSheet.create({
    topo:{
        width:"100%",
        height:578 /768 * width,
    },
    titulo:{
        width:"100%",
        textAlign:"center",
        position: "absolute",
        fontSize:16,
        lineHeight:26,
        color:"white",
        padding:16,
        fontFamily:"MBold"
    },
})