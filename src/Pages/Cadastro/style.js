import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 20,
    },
    container: {
        width: '90%',
        alignItems: 'center',
        paddingTop: 30,
    },
    input: {
        backgroundColor:'#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 26.5,
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#9B9B9B',
        lineHeight: 25,
        letterSpacing: -0.5,
        opacity: 0.7,
        paddingLeft: 15,
    },
    textColor: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    },
    buttonSubmitCad: {
        backgroundColor: '#333',
        width: '80%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 26.5,
        marginBottom: 7.5,
    },
    buttonSubmitHome: {
        backgroundColor: '#333',
        width: '80%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 26.5,
        marginBottom: 20,
    },
    registerText: {
        color: '#fff'
    }
});

export default styles;


