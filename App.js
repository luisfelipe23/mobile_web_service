import { Component } from 'react';
import { StyleSheet, View, Content, FlatList, Text, TextInput } from 'react-native';
import Book from './src/pages/Book';
import api from './src/services/Api';
import { NativeBaseProvider } from 'native-base';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    let response = await api.get('/books');
    this.setState({
      books: response.data
    });
  }

  async getByTitle (title) {
    const response = await api.get('/books/search?title='+ title);
    this.setState({
      books: response.data
    })
  }

  render() {
    return(
      <NativeBaseProvider>
        <View style={styles.header}>
          <Text style={styles.title}>Books Web Service</Text>
        </View>
        <View style={styles.search}>
          <TextInput placeholder="Write book name here" style={styles.input} onChangeText={ (text) => this.getByTitle(text) } />    
        </View>
        <View>
            <FlatList 
            data={this.state.books}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Book data={item} />}
            />  
        </View>
      </NativeBaseProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    maxHeight: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#002343'
  },
  title: {
    color: '#eeeeee',
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: 30
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12
  },
  input: {
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#eeeeee'
  },

  iconSearch: {
    marginLeft: 10
  }
});
