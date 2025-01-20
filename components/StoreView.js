import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'
import React from 'react'

export default function StoreView({ title, price, imgURL, inStock }) {
    return (

        <View style={styles.container}>

            <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            >
                <View style={styles.insideView}>
                    <Image source={{ uri: imgURL }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title}>{price} </Text>
                    <Text style={styles.inStock}>{inStock ? 'STOKTA YOK ' : null}</Text>

                    {/* <Text style={styles.title}>{color}</Text> ceci met 
                noms des colors en bas du title  */}
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 250,

        margin: 15,
        borderRadius: 20,
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',

    },
    image: {
        width: 100, // Taille de l'image ajustée
        height: 100, // Taille de l'image ajustée
        resizeMode: 'contain', // Ajuste l'image pour qu'elle s'adapte sans être recadrée
        alignSelf: 'center', // Centre horizontalement
        marginBottom: 10, // Espacement sous l'image
    },
    button: {
        flex: 1,
    },
    insideView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        borderRadius: 20,
        marginBottom: 20,

    },
    inStock: {
        color: 'red',
        margin: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 15,


    },
    buttonPressed: {
        opacity: 0.5,// met opacite sur lors du clique sur les titles
    },
})