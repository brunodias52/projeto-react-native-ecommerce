import React , { useState, useEffect, useContext }from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/api";
import {UserContext} from '../../../contexts/UserContext'



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
    
    
    if(senha != '' ){
       for (let index = 0; index < userTemp.length; index++) {
          if(userTemp[index].cpf === senha){
            setUser(userTemp[index]);
            
            await AsyncStorage.setItem('user', user);
        
            navigation.reset({
              routes:[{name: 'Home'}]
            })

        }
    } 
    
        
    }else {
      alert("Usuario ou senha incorreto!!");
  
    }
  }
  const handlemensageButtonClick =() => {
    navigation.reset({
      routes:[{name: 'Cadastro'}]
    }) 
  }

    return(
    <KeyboardAvoidingView style={styles.background}>
    
    
    <View style={styles.container}>
      {/* <TextInput
      style={styles.imput}
      value={email}
      placeholder="Email"
      autoCorrrect={false}
      onChangeText={setEmail} 
      /> */}

      <TextInput
      style={styles.imput}
      value={senha}
      placeholder="cpf"
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
       


const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    containerLogo:{
        flex:1,
        alignItems: 'center'
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },
    imput:{
        backgroundColor:'#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnSubmit:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText:{
        color: "#fff",
        fontSize: 17
    }, 
    btnRegister:{
        marginTop: 10
    },
    registerText:{
        color: '#fff'
    }

});
