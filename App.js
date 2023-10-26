import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

import React from 'react';
import BookCount from './components/BookCount'
import { Ionicons } from '@expo/vector-icons';
import CustomActionButton from './components/CustomActionButton'


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
      
    }),
    () => {
      console.log(this.state.books);
    }
  )
}

markAsRead = (selectedBook, index) => {
  let newList = this.state.books.filter(book => book !== selectedBook)

  this.setState(prevState => ({
    books: newList,
    inProcessCount: prevState.inProcessCount - 1,
    finishedCount: prevState.finishedCount + 1
  }))
}

renderItem = (item, index) => (
  <View style={{height: 50, flexDirection: 'row'}}>
    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 5}}>
      <Text>
        {item}
      </Text>
    </View>
    <CustomActionButton
      style={{width:100, backgroundColor: 'black'}}
      onPress={() => this.markAsRead(item, index)}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>
          Mark as Read
      </Text>
    </CustomActionButton>

  </View>
)

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
            <CustomActionButton
              style={{backgroundColor: 'gold'}}
              onPress={() => this.addBook(this.state.textInputData)}>
              <Ionicons name='ios-checkmark' color='darkgreen' size={40}/>
            </CustomActionButton>
            <CustomActionButton onPress={this.hideAddNewBook}>
              <Ionicons name='ios-close' color='red' size={40}/>
            </CustomActionButton>
            
          </View>
              )}

              <FlatList
              data={this.state.books}
              renderItem={({ item }, index) => this.renderItem(item, index)}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={
                <View style={{marginTop: 50, alignItems: 'center'}}>
                  <Text style={{ fontWeight: 'bold'}}>
                    No books added yet!
                  </Text>
                </View>
              }
            />
          <CustomActionButton
            position = 'right'
            style={{ backgroundColor: 'gold', borderRadius: 25 }}
            onPress={this.showAddNewBook}>
            <Text
              style={{
                fontSize: 30,
                color: 'darkgreen',
                fontWeight: 'bold',
                
              }}>
              +
            </Text>
          </CustomActionButton>
          
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
