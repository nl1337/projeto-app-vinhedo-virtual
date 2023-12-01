import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Image, ImageBackground} from 'react-native';
import styles from '../estilos/styles';

const MENSAGEM_CAMPO_VAZIO = "Ops!! Existem campos deixados em branco!";
const EMAIL_PADRAO = "eve1.holt@reqres.in";
const SENHA_PADRAO = "cityslicka";  

function TelaLogin({ navigation }) {
  const [email, setemail] = useState(EMAIL_PADRAO);
  const [senha, setsenha] = useState(SENHA_PADRAO);

const ValidarLogin = async (email, senha, navigation ) => {
  
  if (email.trim().length === 0 || senha.trim().length === 0) {
    alert(MENSAGEM_CAMPO_VAZIO);
  return
  }
  if (SENHA_PADRAO == senha && EMAIL_PADRAO == email) {
    navigation.navigate('MenuInicial')
  }else{
    alert('dados incorretos')
  } 
}


return (
    <View style={styles.container}>
    <ImageBackground style={styles.imagemFundo} source={require("../imagens/fundo.png")}>
        <Text style={styles.tituloLogo}>Vinhedo Virtual</Text>
        <Image style={styles.logo} source={require("../imagens/logo.PNG")} />
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          placeholderTextColor="grey"
          clearButtonMode="always"
          value={email}
          onChangeText={setemail}
          maxLength={200}
        />

        <Text>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite sua senha'}
          placeholderTextColor="grey"
          clearButtonMode="always"
          secureTextEntry={true}
          value={senha}
          onChangeText={setsenha}
          maxLength={200}
        />
        <View style={styles.button}>
          <Button style={styles.btnCustom} color='black'
            onPress={() => ValidarLogin(email, senha, navigation)}
            title="Entrar"
          />
        </View>
        
        <View style={{ marginTop: 10 }}>
        </View>
      </ImageBackground>
    </View>


);
}
export default TelaLogin;