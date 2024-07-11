import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>More..</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>More..</Text>
        </View>
      </ScrollView>
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
        padding: 10,
      },
      card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 100,
        height: 100,
        margin: 8,
      },
      cardElevated:{
        backgroundColor: 'lightblue',
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
})