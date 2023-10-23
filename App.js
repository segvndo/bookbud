import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import React from 'react';

import BookCount from './components/BookCount'

import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      totalCount: 0,
      inProcessCount: 0,
      finishedCount: 0,
      isAddNewBookVisible: false,
      textInputData: '',
      books: []
    }
  };

showAddNewBook = () => {
  this.setState({ isAddNewBookVisible: true })
};

hideAddNewBook = () => {
  this.setState({ isAddNewBookVisible: false})
};

addBook = (book) => {
  this.setState(
    (state, props) => ({
      books: [...state.books, book],
      totalCount: state.totalCount + 1,
      inProcessCount: state.inProcessCount + 1,
      finishedCount: state.finishedCount,
    }),
    () => {
      console.log(this.state.books);
    }
  )
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: 'darkgreen'}}/>
        <View 
          style={{
            height: 70,
            backgroundColor:'darkgreen',
            borderBottomWidth: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'gold'}}>
          <Text style={{fontSize: 25}}>Book Bud</Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: '#004000'
          }}>
          {this.state.isAddNewBookVisible && (
          <View style={{height: 50, flexDirection: 'row'}}>
            <TextInput
              onChangeText={(text)=>this.setState({textInputData: text})}
              style={{
                flex: 1,
                backgroundColor: 'lightgrey',
                paddingLeft: 5,
              }}
              placeholder='Enter book name'
              placeholderTextColor='darkgrey'
            />
            <TouchableOpacity onPress={() => this.addBook(this.state.textInputData)}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'gold',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Ionicons name='ios-checkmark' color='darkgreen' size={40}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.hideAddNewBook}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'gold',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Ionicons name='ios-close' color='red' size={40}/>
              </View>
            </TouchableOpacity>
          </View>
              )}
          <TouchableOpacity
            onPress={this.showAddNewBook}
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20
            }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'gold',
              alignItems: 'center',
              justifyContent: 'center'
            }}>

            <Text
              style={{
                fontSize: 30,
                color: 'darkgreen',
                fontWeight: 'bold',
                
              }}>
              +
            </Text>

          </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 70,
            backgroundColor: 'ivory',
            borderTopWidth: 0.5,
            borderTopColor: 'gold',
            flexDirection: 'row',
          }}>
          <BookCount title='Total' count={this.state.totalCount} />
          <BookCount title='In Process' count={this.state.inProcessCount} />
          <BookCount title='Finished' count={this.state.finishedCount} />
        </View>
        <SafeAreaView style={{ backgroundColor: 'ivory'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 50, width: 50, backgroundColor: 'red'
  }
});
