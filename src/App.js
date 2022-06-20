import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar,Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorTextGithub = '#C9D1D9'
const colorTextNick = '#4F565E'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104567837?v=4'
const urlToMyGithub = 'https://github.com/IvaldoTrindade'


const App = () => {
    const handlePressToGithub = async () => {
        console.log('Verificando Link...');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link Aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
        <View style={style.content}>
            <Image accessibilityLabel="Ivaldo em um quarto branco sorrindo." style={style.avatar} source={{uri:imageProfileGithub}}/>
            <Text accessibilityLabel="Nome Ivaldo Trindade" style={[style.defaultText, style.name]}>Ivaldo Trindade</Text>
            <Text accessibilityLabel="Nickname IvaldoTrindade" style={[style.defaultText, style.nickname]}>IvaldoTrindade</Text>
            <Text accessibilityLabel="Estou iniciando na programação, e evoluindo a cada dia, assim como as linguagens." style={[style.defaultText, style.description]}>Estou iniciando na programação, e evoluindo a cada dia, assim como as linguagens.</Text>
            <Pressable onPress={handlePressToGithub}>                 
                <View style={style.button}>
                    <Text style={[style.colorGithub, style.textButton]}>Abrir GIthub</Text>
                </View>
            </Pressable>
        </View>
        </SafeAreaView>

    )
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGithub,
        flex: 1, //O Flex 1 preenche toda a coloração da tela. 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    content: {
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center'
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorTextGithub,        
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,   
    },
    nickname: {
        color: colorTextNick,
        fontSize: 18,
    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#ffff',
        borderRadius: 20,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 15,
    }
});