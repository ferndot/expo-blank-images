import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Text
} from 'react-native'
import Swiper from 'react-native-swiper'
import SlideGradient from '~/components/layout/SlideGradient'

import { Actions } from 'react-native-router-flux'

export default class Slides extends Component {
  render() {
    return (
      <Swiper
        {...sliderStyles}
        showsButtons={true}
        nextButton={<Text style={sliderStyles.controlButton}>›</Text>}
        prevButton={<Text style={sliderStyles.controlButton}>‹</Text>}
        autoplay
        autoplayTimeout={5}
      >
        <TouchableOpacity
          style={styles.slide}
          onPress={() => Actions.productList()}
        >
          <ImageBackground
            source={require('~/assets/slides/1.jpg')}
            style={styles.slideBackground}
          />
          <SlideGradient />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.slide}
          onPress={() => Actions.productList()}
        >
          <ImageBackground
            source={require('~/assets/slides/2.jpg')}
            style={styles.slideBackground}
          />
          <SlideGradient />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.slide}
          onPress={() => Actions.productList()}
        >
          <ImageBackground
            source={require('~/assets/slides/3.jpg')}
            style={styles.slideBackground}
          />
          <SlideGradient />
        </TouchableOpacity>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  slideBackground: {
    width: '100%',
    height: '100%',
  },
  slideRootsContainer: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  slideRootsText: {
    width: 400,
    color: '#c2984f',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 20,
  },
  slideTeamContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  slideTeamTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 20,
  },
  slideTeamAddress: {
    marginBottom: 40,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 20,
  },
})

sliderStyles = {
  dotColor: 'rgba(255, 255, 255, 0.3)',
  activeDotColor: '#fff',
  controlButton: {
    color: '#fff',
    fontSize: 50,
  },
}
