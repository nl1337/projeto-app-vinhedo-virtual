import {Text, View, TextInput, TouchableOpacity, Modal, Button, Image } from 'react-native';
import React, { useState } from 'react';
import styles from '../estilos/styles';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Checkout = ({navigation}) => {
const [problema, setProblema] = useState("");
const problema1 = "Se você estiver enfrentando problemas no pagamento, como congelamento de tela ou erro de processamento, considere atualizar o aplicativo para ultima versão, se o problema persistir, entre em contato com nosso suporte!";
const problema2 = "Caso você não esteja encontrando o vinho desejado no nosso catálogo, pode-ser que o estoque esteja esgotado, nosso reabastecimento ocorre dia 10 todo mês";  
const problema3 = "Se você estiver enfrentando problemas ao adicionar produtos no carrinho de compras, considere atualizar o aplicativo para ultima versão, se o problema persistir, entre em contato com nosso suporte!";

  let problemaSelecionadoTexto = "";

switch (problema) {
  case "problema1":
    problemaSelecionadoTexto = problema1;
    break;
  case "problema2":
    problemaSelecionadoTexto = problema2;
    break;
  case "problema3":
    problemaSelecionadoTexto = problema3;
    break;
  default:
    problemaSelecionadoTexto = "";
}

return ( 

    <View style={styles.containerSuporte}> 
      <View>
          <Image
            source={require('../imagens/headerNoText.jpg')}
            style={styles.imgHeader}
          />
        <View style={styles.line} />
      </View> 
      <Text style={styles.tituloCheckout}>Problemas frequentes</Text>      
      <Picker
        selectedValue={problema}
        onValueChange={(itemValue) => setProblema(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Selecione o tipo" value="" />
        <Picker.Item label="falha no pagamento" value="problema1" />
        <Picker.Item label="falha no filtro" value="problema2" />
        <Picker.Item label="falha no carrinho de compras" value="problema3" />
      </Picker>

      <Text style={styles.descSuporte}>{problemaSelecionadoTexto}</Text>
      

      <Text style={styles.tituloCheckout}>Suporte</Text> 
      <Text style={styles.emailSuporte}>vinhedoVirtual@suporte.com</Text> 
      
      <View style={styles.footer}>
        <View style={{backgroundColor:'#D3D3D3', marginTop: 20}}>
          <View style={styles.line} />
          <View style={styles.textFooter}>
            <Text style={styles.formTextFooter}>
                Vinhedo Virtual | 2023
            </Text>

            <Image
              source={require('../imagens/logo.PNG')}
              style={styles.imgFooter}
            />
          </View>                           
        </View>
        
      </View> 
    </View>


);
  
}

export default Checkout;