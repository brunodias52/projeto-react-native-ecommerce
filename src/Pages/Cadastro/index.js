import React, {useState} from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import api from '../../services/api';
import styles from './style';

export default function Cadastro() {
    //Implementação dos atributos
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cep, setCEP] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    const navigation = useNavigation();

    const handleRegisterClick =async() => {
    if(nome != '' && usuario != '' && email != '' && cpf != '' && dataNasc != '' && cep != '' && estado != '' && cidade != '' && bairro != '' && rua != '' && numero != '' && complemento != '') {
        let res = await api.setCliente(nome, usuario, email, cpf, dataNasc, cep, estado, cidade, bairro, rua, numero, complemento)
        alert("enviado")
    }else{
        alert("Não enviado")
    }}
    
    return(
        <ScrollView>
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.text}>Cadastro</Text>
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
                placeholder="CPF"
                autoCorrect={false}
                onChangeText={t=>setCpf(t)}
                />
                <TextInput
                style={styles.input}
                value={dataNasc}
                placeholder="Data de Nascimento"
                autoCorrect={false}
                onChangeText={t=>setDataNasc(t)}
                />
                <TextInput
                style={styles.input}
                value={cep}
                placeholder="CEP"
                autoCorrect={false}
                onChangeText={t=>setCEP(t)}
                />
                <TextInput
                style={styles.input}
                value={estado}
                placeholder="Estado"
                autoCorrect={false}
                onChangeText={t=>setEstado(t)}
                />
                <TextInput
                style={styles.input}
                value={cidade}
                placeholder="Cidade"
                autoCorrect={false}
                onChangeText={t=>setCidade(t)}
                />
                <TextInput
                style={styles.input}
                value={bairro}
                placeholder="Bairro"
                autoCorrect={false}
                onChangeText={t=>setBairro(t)}
                />
                <TextInput
                style={styles.input}
                value={rua}
                placeholder="Rua"
                autoCorrect={false}
                onChangeText={t=>setRua(t)}
                />
                <TextInput
                style={styles.input}
                value={numero}
                placeholder="Número"
                autoCorrect={false}
                onChangeText={t=>setNumero(t)}
                />
                <TextInput
                style={styles.input}
                value={complemento}
                placeholder="Complemento"
                autoCorrect={false}
                onChangeText={t=>setComplemento(t)}
                />

            </View>
            <TouchableOpacity
            style={styles.buttonSubmitCad}
            onPress={handleRegisterClick}
            >
                <Text style={styles.textColor}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonSubmitHome}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.textColor}>Voltar para Home</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
