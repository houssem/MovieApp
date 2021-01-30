import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FilmDetail from '../components/FilmDetails';
import Search from '../components/Search';
import Favorites from '../components/Favorites'
import Test from '../components/Test'

const SearchStackNavigor = createStackNavigator({
  Home: {
    screen: Search,
    navigationOptions: {
        title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
});

const FavoritesStackNavigor = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
        title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
});

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
      screen: SearchStackNavigor,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image source={require('../assets/ic_search.png')}
          style={styles.icon} />
        }
      }
    },
    Test : {
      screen: Test,
    },
    Favorites: {
      screen: FavoritesStackNavigor,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image source={require('../assets/ic_favorite.png')}
          style={styles.icon} />
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  }
);

const styles = StyleSheet.create({
  icon: {
    width:30,
    height:30
  }
});

export default createAppContainer(MoviesTabNavigator);
