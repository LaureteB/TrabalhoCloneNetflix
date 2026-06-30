import React from "react";
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity, Alert, } from "react-native";

import api from "../services/api";

export default function FilmeScreen({ route, navigation }) {

    const { filme } = route.params;

    async function excluirFilme() {

        Alert.alert(
            "Excluir",
            "Deseja realmente excluir este filme?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: async () => {
                        try {

                            await api.delete(`/filmes/${filme.id}`);

                            Alert.alert("Sucesso", "Filme excluído.");

                            navigation.navigate("Home");

                        } catch {

                            Alert.alert("Erro", "Não foi possível excluir.");

                        }
                    },
                },
            ]
        );
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.conteudo}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={{ uri: filme.capa }}
                style={styles.imagem}
            />
            <Text style={styles.nome}>
                {filme.nome}
            </Text>

            <Text style={styles.info}>
                Ano: {filme.ano}
            </Text>

            <Text style={styles.info}>
                Gênero: {filme.genero}
            </Text>

            <Text style={styles.resumo}>
                {filme.resumo}
            </Text>
            <TouchableOpacity
                style={styles.botaoEditar}
                onPress={() =>
                    navigation.navigate("Editar", {
                        filme,
                    })
                }
            >
                <Text style={styles.textoBotao}>
                    Editar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={excluirFilme}
            >
                <Text style={styles.textoBotao}>
                    Excluir
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

    imagem: {
        width: 240,
        height: 340,
        borderRadius: 15,
        marginBottom: 20,
    },

    nome: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },

    info: {
        color: "#ddd",
        fontSize: 18,
        marginBottom: 5,
    },

    resumo: {
        color: "#ccc",
        fontSize: 16,
        marginTop: 20,
        textAlign: "justify",
        lineHeight: 24,
    },

    botaoEditar: {
        marginTop: 30,
        width: "100%",
        backgroundColor: "#1976D2",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    botaoExcluir: {
        marginTop: 15,
        width: "100%",
        backgroundColor: "#E50914",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    conteudo: {
        padding: 20,
        alignItems: "center",
    },

});