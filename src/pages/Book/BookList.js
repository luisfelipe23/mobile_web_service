import { ScrollView } from "native-base";
import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, Alert, LogBox, StyleSheet } from 'react-native';
import { ListItem, Avatar, Button, Icon, SearchBar } from 'react-native-elements'
import BooksContext from "../../context/BooksContext";
import { FontAwesome } from '@expo/vector-icons'; 

export default props => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const { state, dispatch } = useContext(BooksContext);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    function confirmBookDeletion(book) {
        Alert.alert('Delete book', 'Do you want to delete this book?', [
            {
                text: 'Yes',
                onPress() {
                    dispatch({
                        type: 'deleteBook',
                        payload: book
                    })
                }
            },
            {
                text: 'No'
            }
        ])
    }

    function getBookItem({ item: book }) {
        return (
            <View>
                <ListItem bottomDivider>
                    <Avatar rounded source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/03/21/16/book-2282152_960_720.png' }} />
                    <ListItem.Content>
                        <ListItem.Title>{book.title}</ListItem.Title>
                        <ListItem.Subtitle>{book.author}</ListItem.Subtitle>
                        <ListItem.Subtitle>{book.url}</ListItem.Subtitle>
                        <ListItem.Subtitle>
                            { book.rating >= 1 ?
                                ( <FontAwesome size={20} color='black' name='star' /> ) : 
                                ( <FontAwesome size={20} color='black' name='star-o' /> ) 
                            }
                            { book.rating >= 2 ?
                                ( <FontAwesome size={20} color='black' name='star' /> ) : 
                                ( <FontAwesome size={20} color='black' name='star-o' /> ) 
                            }
                            { book.rating >= 3 ?
                                ( <FontAwesome size={20} color='black' name='star' /> ) : 
                                ( <FontAwesome size={20} color='black' name='star-o' /> ) 
                            }
                            { book.rating >= 4 ?
                                ( <FontAwesome size={20} color='black' name='star' /> ) : 
                                ( <FontAwesome size={20} color='black' name='star-o' /> ) 
                            }
                            { book.rating >= 5 ?
                                ( <FontAwesome size={20} color='black' name='star' /> ) : 
                                ( <FontAwesome size={20} color='black' name='star-o' /> ) 
                            }
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <Button onPress={() =>
                        props.navigation.navigate('BookForm', book)}
                        type="clear"
                        icon={<Icon name="edit" size={25} color="#005C53" />}
                    />
                    <Button onPress={() =>
                        confirmBookDeletion(book)}
                        type="clear"
                        icon={<Icon name="delete" size={25} color="red" />}
                    />
                </ListItem>
            </View>
        )
    }

    function searchBooks() {
        var result = state.books.filter(u => u.title.toLowerCase().indexOf(search.toLowerCase()) != -1);
        return result;
    }

    return (
        <View>
            <ScrollView>
                <SearchBar
                    containerStyle={{ backgroundColor: "#042940" }}
                    inputContainerStyle={{ backgroundColor: "#042940" }}
                    inputStyle={{ color: "#DBF227" }}
                    searchIcon={{ color: "#DBF227" }}
                    clearIcon={{ color: "#DBF227" }}
                    placeholder="Search for book's name"
                    onChangeText={updateSearch}
                    value={search}
                />
                <FlatList
                    keyExtractor={book => book.id.toString()}
                    data={searchBooks()}
                    renderItem={getBookItem}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    stars: {
        marginRight: 3
    }
})