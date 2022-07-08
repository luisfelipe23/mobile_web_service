import { View } from "native-base";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Button } from "react-native-elements/dist/buttons/Button";
import BooksContext from "../../context/BooksContext";
import { FontAwesome } from '@expo/vector-icons';

export default ({ route, navigation }) => {
    const [book, setBook] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(BooksContext);

    return (
        <View style={styles.form}>
            <Text style={styles.text}>Author</Text>
            <TextInput
                style={styles.input}
                onChangeText={author => setBook({ ...book, author })}
                placeholder="Write book author's name"
                value={book.author}
            />
            <Text style={styles.text}>Title</Text>
            <TextInput
                style={styles.input}
                onChangeText={title => setBook({ ...book, title })}
                placeholder="Write book's title"
                value={book.title}
            />
            <Text style={styles.text}>URL</Text>
            <TextInput
                style={styles.input}
                onChangeText={url => setBook({ ...book, url })}
                placeholder="Write book's URL"
                value={book.url}
            />
            <Text style={styles.text}>Rating:</Text>
            <View style={styles.stars}>
                {book.rating >= 1 ? (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 1 })}>
                        <FontAwesome size={30} style={styles.star} color='black' name='star' />
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 1 })}>
                        <FontAwesome size={30} style={styles.star} color='black' name='star-o' />
                    </TouchableWithoutFeedback>
                )
                }
                {book.rating >= 2 ? (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 2 })}>
                        <FontAwesome size={30} style={styles.star} color='black' name='star' />
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 2 })}>
                        <FontAwesome size={30} style={styles.star} color='black' name='star-o' />
                    </TouchableWithoutFeedback>
                )
                }
                {book.rating >= 3 ? (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 3 })}>
                        <FontAwesome size={30} color='black' style={styles.star} name='star' />
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 3 })}>
                        <FontAwesome size={30} color='black' style={styles.star} name='star-o' />
                    </TouchableWithoutFeedback>
                )
                }
                {book.rating >= 4 ? (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 4 })}>
                        <FontAwesome size={30} color='black' style={styles.star} name='star' />
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 4 })}>
                        <FontAwesome size={30} color='black' style={styles.star} name='star-o' />
                    </TouchableWithoutFeedback>
                )
                }
                {book.rating >= 5 ? (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 5 })}>
                        <FontAwesome size={30} color='black' style={styles.star} name='star' />
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setBook({ ...book, rating: 5 })}>
                        <FontAwesome size={30} color='black' style={styles.star} name='star-o' />
                    </TouchableWithoutFeedback>
                )
                }
            </View>
            <Button
                buttonStyle={styles.button}
                title="SAVE"
                onPress={() => {
                    dispatch({
                        type: book.id ? 'updateBook' : 'addBook',
                        payload: book
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },

    text: {
        fontWeight: 'bold',
        paddingBottom: 5
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },

    stars: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 15
    },

    star: {
        marginLeft: 5
    },

    button: {
        backgroundColor: '#005C53'
    }
});