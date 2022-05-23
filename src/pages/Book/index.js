import { View } from "native-base";
import React, {Component} from "react";
import { Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class Book extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.book}>
                    <View style={styles.item}>
                        <Ionicons name="person" size={16} color="#eeeeee" />
                        <Text style={styles.text}>{this.props.data.author}</Text>
                    </View>
                    <View style={styles.item}>
                        <Entypo name="book" size={16} color="#eeeeee" />
                        <Text style={styles.text}>{this.props.data.title}</Text> 
                    </View>
                    <View style={styles.item}>
                        <AntDesign name="link" size={16} color="#eeeeee" />
                        <Text style={styles.text}>{this.props.data.url}</Text> 
                    </View>
                </View>
            </View>     
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#004687',
      borderRadius: 15,
      marginBottom: 10
    },
    book: {
        padding: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3
    },
    text: {
        marginLeft: 5,
        color: '#eeeeee'
    }
 });
  