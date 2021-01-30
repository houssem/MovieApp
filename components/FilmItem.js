import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import FadeIn from '../Animations/FadeIn';
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {

  _displayFavoriteImage () {
    if (this.props.isFilmFavorite) {
    return (
      <Image style={styles.favorite_image} source={require('../assets/ic_favorite.png')} ></Image>
    );
    }
  }

  render() {
    // console.log(this.props)
    // const film = this.props.film;
    // const displayDetailForFilm = this.props.displayDetailForFilm;
    const { film, displayDetailForFilm } = this.props
    
    return (
      <FadeIn>
        <TouchableOpacity style={styles.film_main_container}
          onPress={()=> displayDetailForFilm(film.id)}>
          
          <Image style={styles.image} 
                source={{uri: getImageFromApi(film.poster_path)}} />

          <View style={styles.content_container}>
              <View style={styles.header_container} >
                {this._displayFavoriteImage()}
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
              </View>
              <View style={styles.description_container} >
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sortii le {film.release_date}</Text>
              </View>
          </View>
        </TouchableOpacity>
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  film_main_container: {
    // flex: 1,
    flexDirection: 'row',
    // margin : 5,
    height: 190
  },
  image: {
    width: 120,
    height: 180,
    margin: 5
  },
  content_container: {
    flex: 1,
    margin: 5,
   // flexDirection: 'column'
  },
  header_container: {
    flex: 3, 
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: 5,
    flex: 1,
    flexWrap: 'wrap'
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  }, 
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})

export default FilmItem
