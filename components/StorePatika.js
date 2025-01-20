import React from 'react';
import { FlatList, StyleSheet, View, Text, TextInput } from 'react-native';
import StoreView from './StoreView';



const STORE = [
    {
        id: 0,
        title: 'Xiaomi Mi True Wireless Earbuds',
        imgURL:
            'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
        price: '₺134,77',
        inStock: true,
    },
    {
        id: 1,
        title: 'General Mobile GM 20',
        imgURL:
            'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
        price: '₺1.810,21',
        inStock: true,
    },
    {
        id: 2,
        title: 'Philips 58PUS8505/62 The One',
        imgURL:
            'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
        price: '₺6.992,25',
        inStock: false,
    },
    {
        id: 3,
        title: 'LG 49UM7100PLB Ultra HD 4K',
        imgURL:
            'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
        price: '₺4.614,38',
        inStock: true,
    },
    {
        id: 4,
        title: 'Samsung Galaxy M31 SM-M315F',
        imgURL:
            'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
        price: '₺2.995,80',
        inStock: true,
    },
    {
        id: 5,
        title: 'Apple AirPods Series 2',
        imgURL:
            'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
        price: '₺1.299,00',
        inStock: true,
    },
    {
        id: 6,
        title: 'Lenovo Tab M10 Plus',
        imgURL:
            'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
        price: '₺2.496,50',
        inStock: false,
    },
    {
        id: 7,
        title: 'Xiaomi Redmi 20000 Mah',
        imgURL:
            'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
        price: '₺134,70',
        inStock: false,
    },
    {
        id: 8,
        title: 'Xiaomi Mijia Smart Home 360',
        imgURL:
            'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
        price: '₺269,73',
        inStock: true,
    },
    {
        id: 9,
        title: 'Xiaomi Mi Box S 4K Ultra HD',
        imgURL:
            'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
        price: '₺478,53',
        inStock: true,
    },
    {
        id: 10,
        title: 'Haylou Solar LS-5 Smartwatch',
        imgURL:
            'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
        price: '₺296,00',
        inStock: true,
    },
];


export default function StorePatika() {
    // Fonction pour rendre chaque item de la liste
    const renderStoreItem = ({ item }) => {
        // console.log(item);

        return (
            <StoreView
                title={item.title}
                price={item.price}
                imgURL={item.imgURL}
                inStock={item.inStock}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.patika}>PATIKASTORE</Text>
                <TextInput placeholder='Ara...' style={styles.input} />
            </View>
            <View>
                <FlatList
                    data={STORE}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderStoreItem}
                    numColumns={2}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', // Couleur de fond claire et propre
    },
    text: {
        margin: 15,
    },
    patika: {
        fontSize: 24, // Taille plus grande pour mettre en valeur le titre
        color: '#4CAF50', // Couleur verte pour un style moderne
        fontWeight: 'bold', // Texte en gras
        textAlign: 'center', // Centrer le texte
        marginBottom: 10, // Espacement sous le titre
    },
    input: {
        backgroundColor: '#e0e0e0', // Couleur de fond grise claire
        borderRadius: 10,
        paddingHorizontal: 15, // Plus de padding pour une meilleure expérience utilisateur
        paddingVertical: 8, // Ajout de padding vertical
        fontSize: 16, // Taille de police pour rendre le texte lisible
    },
});
