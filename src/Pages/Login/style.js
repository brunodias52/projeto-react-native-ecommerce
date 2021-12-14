import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        width: 150,
        marginTop: 50,
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        paddingTop: 50,
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
        paddingTop: 50,
    },
    imput: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 26.5,
        padding: 10,
        paddingLeft: 15,
        borderWidth: 1.5,
        borderColor: '#9B9B9B',
        lineHeight: 25,
        letterSpacing: -0.5,
        opacity: 0.7,
    },
    btnSubmit: {
        backgroundColor: '#333',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 26.5,
    },
    submitText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
    },
    btnRegister: {
        marginTop: 10,
    },
    registerText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default styles;

// import React from "react";

// import styled from "styled-components/native";

// export const Container = styled.SafeAreaView`

//     background-color: #63C2D1;
//     flex: 1;
//     justifyContent: center;
//     alignItems: center;
// `;

// export const LoadIcon = styled.ActivityIndicator`
//     margin-top: 50px;
// `;


