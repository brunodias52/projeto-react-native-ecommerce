import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {CartContext} from '../contexts/CartContext';
function Cart({navigation}) {
  const {items, getTotalPrice, deleteItemFromCart, updateItemFromCart} =
    useContext(CartContext);

  const showConfirmDialog = id => {
    return Alert.alert(
      'Remover Produto',
      'Tem certeza que deseja remover este item do carrinho?',
      [
        // Botão SIM
        {
          text: 'Yes',
          onPress: () => {
            onDeleteItemFromCart(id);
          },
        },
        // Botão NÃO
        {
          text: 'No',
        },
      ],
    );
  };

  const showCheckoutDialog = id => {
    return Alert.alert(
      'Checkout',
      'Deseja prosseguir para o pagamento?',
      [
        {
          text: 'Yes',
          // onPress: () => {
          //   onDeleteItemFromCart(id); // inserir navegação para pagamento
          //},
        },
        {
          text: 'No',
        },
      ],
    );
  };

  function onDeleteItemFromCart(id) {
    deleteItemFromCart(id);
  }

  function renderItem({item}) {
    return (
     
      <View>
        <View style={styles.cartLine}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductDetails', {
                productId: item.id,
              });
            }}>
            <Text style={styles.lineLeft}>{item.product.nome}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.lineRight}>R$ {item.totalPrice}</Text>

        <Text>Quantidade</Text>
        <Picker
          selectedValue={item.qty.toString()}
          onValueChange={(itemValue, itemIndex) =>
            updateItemFromCart(item.id, itemValue)
          }
          style={{height: 50, width: 100}}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="5" />
        </Picker>

        <Button
          onPress={() => showConfirmDialog(item.id)}
          title="Remover"
          style={{}}
        />
      </View>
      
    );
  }
  function Totals() {
    const [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    }, []);
    return (
      <>
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>R$ {total}</Text>
      </View>
      <View>
      <Button
          onPress={() => showCheckoutDialog()}
          title="Checkout"
          style={{}}
        />
      </View>
      </>
    );
  }
  return (
    <FlatList
      style={styles.itemsList}
      data={items}
      contentContainerStyle={styles.itemsListContainer}
      keyExtractor={item => item.product.id.toString()}
      renderItem={renderItem}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  cartLine: {
    flexDirection: 'row',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
    paddingTop: 10,
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
    paddingTop: 10,
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  lineTotal: {
    fontWeight: 'bold',
    paddingBottom: 30,
  },

});

export default Cart;
