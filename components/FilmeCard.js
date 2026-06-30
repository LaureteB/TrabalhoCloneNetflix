import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";

export default function FilmeCard({ filme, onPress }) {

    return (

        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={onPress}
        >

            <Image
                source={{ uri: filme.capa }}
                style={styles.imagem}
            />

            <View style={styles.info}>

                <Text style={styles.nome}>
                    {filme.nome}
                </Text>

                <Text style={styles.texto}>
                    Ano: {filme.ano}
                </Text>

                <Text style={styles.texto}>
                    Gênero: {filme.genero}
                </Text>

            </View>

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    card:{
        flexDirection:"row",
        backgroundColor:"#181818",
        borderRadius:12,
        overflow:"hidden",
        marginBottom:18,
    },

    imagem:{
        width:110,
        height:160,
    },

    info:{
        flex:1,
        justifyContent:"center",
        padding:15,
    },

    nome:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },

    texto:{
        color:"#bbb",
        fontSize:16,
        marginBottom:5,
    }

});