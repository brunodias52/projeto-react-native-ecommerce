import React, {useState} from 'react';
import { 
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import api from '../../../services/api';

export default function Cadastro() {
    //Implementação dos atributos
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');

    const navigation = useNavigation();

    const handleRegisterClick =async() => {
    if(nome != '' && usuario != '' && email != '' && cpf != '') {
        let res = await api.setCliente(nome, usuario, email, cpf)
        alert("enviado")
       
    }else{
        alert("Não enviado")
    }}
    
    return(
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.textTitle}>Cadastro</Text>
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                value={nome}
                placeholder="Nome completo"
                autoCorrect={false}
                onChangeText={t=>setNome(t)}
                />
                <TextInput
                style={styles.input}
                value={usuario}
                placeholder="Nome de usuário"
                autoCorrect={false}
                onChangeText={t=>setUsuario(t)}
                />
                <TextInput
                style={styles.input}
                value={email}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={t=>setEmail(t)}
                />
                <TextInput
                style={styles.input}
                value={cpf}
                secureTextEntry={true}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={t=>setCpf(t)}
                />
            </View>

            <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={handleRegisterClick}
            >
                <Text style={styles.textColor}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.textColor}>Voltar para Home</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        width: '90%',
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: "#fff",
        width: "70%",
        marginBottom: 15,
        color: '#222',
        padding: 10,
        borderRadius: 15
    },
    textColor: {
        fontWeight: 'bold',
        color: 'yellow'
    },
    textTitle: {
        marginTop: 50,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 34
    },
    buttonSubmit: {
        backgroundColor: '#33BB',
        width: '50%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 20
    },
    registerText: {
        color: '#fff'
    }
})