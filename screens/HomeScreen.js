import React, { useState, useCallback } from "react";
import { View, FlatList, RefreshControl, StyleSheet,} from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import api from "../services/api";
import FilmeCard from "../components/FilmeCard";

export default function HomeScreen({ navigation }) {

    const [filmes, setFilmes] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    async function carregarFilmes() {
        try {
            const response = await api.get("/filmes");
            setFilmes(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function atualizar() {
        setRefreshing(true);
        await carregarFilmes();
        setRefreshing(false);
    }

    useFocusEffect(
        useCallback(() => {
            carregarFilmes();
        }, [])
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filmes}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={styles.lista}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={atualizar}
                    />
                }
                renderItem={({ item }) => (
                    <FilmeCard
                        filme={item}
                        onPress={() =>
                            navigation.navigate("Detalhes", {
                                filme: item,
                            })
                        }
                    />
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000",
    },

    lista: {
        padding: 15,
    },

});