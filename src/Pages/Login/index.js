import React, { useState, useEffect, useContext } from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { UserContext } from '../../contexts/UserContext'
import styles from "./style";



export default function Login() {

  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [senha, setSenha] = useState('');
  const [userTemp, setUserTemp] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    api.get(`/cliente`)
      .then(res => {
        const prod = res.data;
        setUserTemp(prod);
      });
  }, []);
  //Criar estados para acessar e-mail e senha


  const handleLoginClick = async () => {


    if (senha != '') {
      for (let index = 0; index < userTemp.length; index++) {
        if (userTemp[index].cpf === senha) {
          setUser(userTemp[index]);

          await AsyncStorage.setItem('user', user);

          navigation.reset({
            routes: [{ name: 'Home' }]
          })

        }
      }


    } else {
      alert("Usuario ou senha incorreto!!");

    }
  }
  const handlemensageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'Cadastro' }]
    })
  }

  const logo = '../../../assets/logo.png';

  return (
    <KeyboardAvoidingView style={styles.background}>

      <Image
        source={require(logo)}
        style={styles.logo}
      />

      <Text style={styles.text}>Entrar</Text>

      <View style={styles.container}>

        <TextInput
          style={styles.imput}
          value={senha}
          placeholder="CPF"
          secureTextEntry={true}
          autoCorrrect={false}
          onChangeText={setSenha}
        />


        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={handleLoginClick}
        >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handlemensageButtonClick}
        >
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}

