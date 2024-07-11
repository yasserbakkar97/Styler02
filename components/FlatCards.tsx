import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style= {styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
          </View>  
          <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
          </View>  
          <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
          </View> 
          <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 4</Text>
          </View> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  cardOne:{
    backgroundColor: 'lightblue'
  },
  cardTwo:{
    backgroundColor: 'lightgreen'
  },
  cardThree:{
    backgroundColor: 'lightyellow'
  },
})