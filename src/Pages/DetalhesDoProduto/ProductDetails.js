import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';
import {CartContext} from '../../contexts/CartContext';
import {getProduct} from '../../services/ProductsService';

function ProductDetails({route}) {
  const {productId} = route.params;
  const [product, setProduct] = useState({});

  const {addItemToCart} = useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getProduct(productId);
      setProduct(response);
    }
    fetchData();
  }, []);

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView style={styles.card}>
      <ScrollView>
        <Image style={styles.image} source={{uri: `${product.fotoLink}`}} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.nome}</Text>
          <Text style={styles.price}>R$ {product.valor}</Text>
          <Text style={styles.description}>{product.descricao}</Text>
          <Button onPress={onAddToCart} title="Adicionar ao Carrinho" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 320,
    width: '100%',
    resizeMode: "contain"
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});

export default ProductDetails;
