import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

export function ProductCard({nome, descricao, valor, fotoLink, onPress}) {
  const Image_Http_URL = {uri: `${fotoLink}`};
  1;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={Image_Http_URL} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.price}>R$ {valor}</Text>
      </View>
    </TouchableOpacity>
  );
}
const deviceWidth = Math.round(Dimensions.get("window").width)

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: deviceWidth - 30,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 8,
    marginVertical: 20,
  },
  thumb: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    height: 400
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: "center",
  },
  desc: {
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 15,
    textAlign: "center",
  },
  price: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 8,
  },
});
