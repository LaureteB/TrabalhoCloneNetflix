import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";

import api from "../services/api";

export default function EditarScreen({ route, navigation }) {

    const { filme } = route.params;

    const [nome, setNome] = useState(filme.nome);
    const [ano, setAno] = useState(String(filme.ano));
    const [genero, setGenero] = useState(filme.genero);
    const [resumo, setResumo] = useState(filme.resumo || "");
    const [capa, setCapa] = useState(filme.capa);

    async function atualizarFilme() {

        if (
            !nome ||
            !ano ||
            !genero ||
            !resumo ||
            !capa
        ) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        try {

            await api.put(`/filmes/${filme.id}`, {
                nome,
                ano: Number(ano),
                genero,
                resumo,
                capa,
            });

            Alert.alert(
                "Sucesso",
                "Filme atualizado com sucesso!"
            );

            navigation.navigate("Home");

        } catch (error) {

            console.log(error);

            Alert.alert(
                "Erro",
                "Não foi possível atualizar."
            );

        }

    }

    return (

        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >

            <Text style={styles.titulo}>
                Editar Filme
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Ano"
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={ano}
                onChangeText={setAno}
            />

            <TextInput
                style={styles.input}
                placeholder="Gênero"
                placeholderTextColor="#999"
                value={genero}
                onChangeText={setGenero}
            />

            <TextInput
                style={styles.inputResumo}
                placeholder="Resumo"
                placeholderTextColor="#999"
                multiline
                value={resumo}
                onChangeText={setResumo}
            />

            <TextInput
                style={styles.input}
                placeholder="URL da capa"
                placeholderTextColor="#999"
                value={capa}
                onChangeText={setCapa}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={atualizarFilme}
            >
                <Text style={styles.textoBotao}>
                    Salvar Alterações
                </Text>
            </TouchableOpacity>

        </ScrollView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000",
    },

    content: {
        padding: 20,
    },

    titulo: {
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 25,
    },

    input: {
        backgroundColor: "#222",
        color: "#FFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
    },

    inputResumo: {
        backgroundColor: "#222",
        color: "#FFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        height: 140,
        textAlignVertical: "top",
    },

    botao: {
        backgroundColor: "#1976D2",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },

    textoBotao: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },

});