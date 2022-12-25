import React from "react";
import Texto from "../../../../components/Texto";
import { 
    Image,
    StyleSheet, 
    TouchableOpacity, 
    View, 
} from "react-native";
export default function Detalhes({botao,nome,logoFazenda,nomeFazenda,descricao,preco}){
    return<>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemfazenda} source={logoFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>
            {descricao}
        </Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        color:"#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight:"bold"
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical:12
    },
    imagemfazenda:{
        width:32,
        height:32
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        fontWeight:"bold"
    },
    descricao:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26,
    },
    preco:{
        color:"#2A9F85",
        fontWeight: "bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8,
    },
    botao:{
        marginTop:26,
        backgroundColor:"#2A9F85",
        paddingVertical: 16,
        borderRadius:6
    },
    textoBotao:{
        color:"#FFFFFF",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:16,
        lineHeight:26
    }
})