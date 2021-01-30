import React from 'react'
import { View, TextInput, Button, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import FilmList from './FilmList'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: [],
      isLoading: false
    }
    this.page = 0; // compteur pour connaitre la page courante
    this.totalPages = 0; // Nombre de pages totales pour savoir si on a atteint la fin des retours de l'API TMDB
    this.searchText = ""
    this._loadFilms = this._loadFilms.bind(this)
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState(
      {
        films: [],
      }, 
      () => { this._loadFilms() }
    )
  }

  _loadFilms() {
    console.log("#### "+this.test)
    this.setState({isLoading: true});
    if (this.searchText.length > 0) {
        getFilmsFromApiWithSearchedText(this.searchText, this.page + 1).then(data => {
        this.page = data.page;
        this.totalPages = data.total_pages;
        this.setState({
          films: [...this.state.films, ...data.results], 
          isLoading: false
        })
      })
    } else {
      console.log('length is not greater then 0')
    }
  }

  _searchTextInput(text) {
    this.searchText = text
  }

  _displayLoading() {
    if (this.state.isLoading == true) {
      return (
        <View style={[styles.loading_container]}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
      console.log("RENDER Search Component")
        
      return (
        <View style={styles.main_contaier}>

          <TextInput onChangeText={(text) => this._searchTextInput(text) } 
            onSubmitEditing = {() => this._searchFilms()}
            style={ [styles.textinput, {backgroundColor: 'yellow'}] } 
            placeholder='Titre du film'/>

          <Button style={{height: 50}} title='Rechercher' onPress={() => {this._searchFilms()}}/>
          
          <FilmList 
            films={this.state.films}
            navigation={this.props.navigation}
            loadFilms={this._loadFilms}
            page={this.page}
            totalPages={this.totalPages}
            favoriteList={false}
          />

          {this._displayLoading()}
        </View>
      )
    }
}


const styles = StyleSheet.create({
  main_contaier: {
    //marginTop: 40,
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },

  loading_container: {
    position: 'absolute',
    top:100,
    left: 0,
    right:0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Search