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

export default function AdicionarScreen({ navigation }) {

    const [nome, setNome] = useState("");
    const [ano, setAno] = useState("");
    const [genero, setGenero] = useState("");
    const [resumo, setResumo] = useState("");
    const [capa, setCapa] = useState("");

    async function salvarFilme() {

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

            await api.post("/filmes", {
                nome,
                ano,
                genero,
                resumo,
                capa,
            });

            Alert.alert("Sucesso", "Filme cadastrado!");

            navigation.navigate("Home");

        } catch (error) {

            Alert.alert("Erro", "Não foi possível cadastrar.");

        }

    }

    return (

        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >

            <Text style={styles.titulo}>
                Novo Filme
            </Text>

            <TextInput
                placeholder="Nome"
                placeholderTextColor="#999"
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                placeholder="Ano"
                placeholderTextColor="#999"
                keyboardType="numeric"
                style={styles.input}
                value={ano}
                onChangeText={setAno}
            />

            <TextInput
                placeholder="Gênero"
                placeholderTextColor="#999"
                style={styles.input}
                value={genero}
                onChangeText={setGenero}
            />

            <TextInput
                placeholder="Resumo"
                placeholderTextColor="#999"
                multiline
                style={styles.inputResumo}
                value={resumo}
                onChangeText={setResumo}
            />

            <TextInput
                placeholder="URL da capa"
                placeholderTextColor="#999"
                style={styles.input}
                value={capa}
                onChangeText={setCapa}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={salvarFilme}
            >
                <Text style={styles.textoBotao}>
                    Salvar Filme
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
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 25,
        alignSelf: "center",
    },

    input: {
        backgroundColor: "#222",
        color: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
    },

    inputResumo: {
        backgroundColor: "#222",
        color: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        height: 140,
        textAlignVertical: "top",
    },

    botao: {
        backgroundColor: "#E50914",
        padding: 16,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
    },

    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

});