import {Text, View, TextInput, TouchableOpacity, Modal, Button, Image } from 'react-native';
import React, { useState } from 'react';
import styles from '../estilos/styles';
import { Picker } from '@react-native-picker/picker';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Checkout = ({route, navigation}) => {
const {valorFinal } = route.params;

const [nome, setnome] = useState("");
const [email, setemail] = useState("");
const [pagamento, setPagamento] = useState("");
const [modalVisible, setModalVisible] = useState(false);

const ValidateLogin = async (setModalVisible) => {
  setModalVisible(true);
}

return ( 
    <View style={styles.containerSuporte}>
      <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Obrigado pela preferência <Text style={styles.modalTitleName}>{nome}</Text>!!</Text>
                <Text style={styles.modalText}>Qualquer atualização sobre seu pedido, encaminharemos ao seu email <Text style={styles.modalTextBold}>{email}</Text></Text>
                <Text style={styles.modalTextPagamento}>seu método de pagamento: <Text style={styles.modalTextBold}>{pagamento}</Text></Text>

                <View style={styles.button}>
                  <Button color="black" onPress={() => setModalVisible(!modalVisible)} title="Fechar"/>
                </View>

              </View>
            </View>
      </Modal> 
      <Text style={styles.tituloCheckout}>Dados pessoais</Text>    
      
      <View>
        <TextInput
          style={styles.inputCheckout}
          placeholder={'Digite seu nome'}
          placeholderTextColor="black"
          clearButtonMode="always"
          value={nome}
          onChangeText={setnome}
          maxLength={200}
        />     

        <TextInput
          style={styles.inputCheckout}
          placeholder={'Digite seu e-mail'}
          placeholderTextColor="black"
          clearButtonMode="always"
          value={email}
          onChangeText={setemail}
          maxLength={200}
        />   
      </View>

      <Text style={styles.tituloCheckout}>seu pedido <Text style={styles.valorFinalCheckout}>R$: {valorFinal}</Text></Text>

      <View style={styles.line} />
      
      <Text style={styles.tituloCheckout}>Meio de pagamento</Text>      
      <Picker
        selectedValue={pagamento}
        onValueChange={(itemValue) => setPagamento(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Selecione o tipo" value="" />
        <Picker.Item label="Boleto bancário" value="Boleto bancário" />
        <Picker.Item label="Crédito" value="Crédito" />
        <Picker.Item label="Débito" value="Débito" />
        <Picker.Item label="Pix" value="Pix" />
      </Picker>

      <TouchableOpacity onPress={() =>{
        if (!(pagamento == "" || email == "" || nome == "")) {
          ValidateLogin(setModalVisible)
        }else{
          alert('Existe campos vazios!!')
        }
      }}>
        <Text style={styles.btnCheckout}>Finalizar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <View style={{backgroundColor:'#D3D3D3', marginTop: 20}}>
          <View style={styles.line} />
          <View style={styles.textFooter}>
            <Text style={styles.formTextFooter}>
                Vinhedo Virtual | 2023
            </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Suporte')} style={styles.containerSup}>

          <Text style={styles.supTextFooter}>
              suporte  |
          </Text>              
        <Icon5 style={styles.iconSupFooter}
              name="headset"
              size={20} 
              color="#000" 
        />
        </TouchableOpacity>
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