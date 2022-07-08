import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookForm from './pages/Book/BookForm';
import BookList from './pages/Book/BookList';
import { Button, Icon } from 'react-native-elements';
import { NativeBaseProvider } from 'native-base';
import { BooksProvider } from './context/BooksContext';

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <BooksProvider>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="BookList" screenOptions={screenOptions}>
                        <Stack.Screen
                            name="BookList"
                            component={BookList}
                            options={({ navigation }) => {
                                return {
                                    title: "Book List",
                                    headerRight: () => (
                                        <Button onPress={() => navigation.navigate("BookForm")} type='clear' icon={
                                            <Icon name='add' size={25} color='#DBF227'></Icon>
                                        } />     
                                    )
                                }
                            }}
                        />
                        <Stack.Screen
                            name="BookForm"
                            component={BookForm}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </BooksProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#042940'
    },
    headerTintColor: '#DBF227',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
};