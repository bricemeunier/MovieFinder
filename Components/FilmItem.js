import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import {getImageFromApi} from '../API/TMDBApi'


class FilmItem extends React.Component {
  render() {
    const {film, displayDetailForFilm} = this.props
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => displayDetailForFilm(film.id)}>
        <Image
          style={styles.image}
          source={{uri:getImageFromApi(film.poster_path)}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text} numberOfLines={2}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container : {
    height : 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin:5
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text : {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 5,
    flexWrap: 'wrap',
    paddingRight: 8
  },
  vote_text: {
    fontWeight: 'bold',
    flex:1,
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
  }
})

export default FilmItem
