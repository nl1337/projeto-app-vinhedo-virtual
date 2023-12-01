import React, { useContext } from 'react';
import {View, Text, Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import styles from '../estilos/styles';
import MenuInicial from "./MenuInicial.js";
import { MaterialIcons } from '@expo/vector-icons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { adicionarItem } from './CarrinhoCompras';
import { Feather } from '@expo/vector-icons';

const DetalhesProduto =  ({route, navigation}) => {
const { descricao, nome, preco, imagem, teorAlcolico, regiao, vinicola, volume, uva, quantidade } = route.params;

  navigation.setOptions({
    headerRight:() => (
      <TouchableOpacity onPress={()=>navigation.navigate('CarrinhoCompras', {
        preco: "",
        nome: "",
        imagem: "",
        quantidade: ""
      })} style={{marginRight: 15}}>
        <Feather
          name="shopping-cart"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    )
  });  

  return (
    <ScrollView>
    <View style={styles.containerVinhoDescricao}>
      <Image
        style={styles.imgVinhoDescricao}
        source={{
        uri: imagem,
        }}
      />  
      <Text style={styles.descPreco}>
        UN | R$: {preco}
      </Text>
    </View>

    <View style={styles.descricaoVinho}>
      <Text style={styles.descVinho}>{nome}</Text>
      
      <Text style={styles.textVinho}>
        {descricao}
      </Text>

      <View style={styles.detalhesVinho}>
        <Text style={styles.descFichaTecnica}>Ficha tecnica</Text>

        <View style={styles.borderFichaTecnica}>
          <Text style={styles.textDetalhesVinho}><Text style={styles.textDetalhesVinhoBold}>uvas - </Text>{uva}</Text>
          <IconCommunity style={styles.iconDetalhes}
            name="fruit-grapes"
            size={30} 
            color="#000" 
          />

          <Text style={styles.textDetalhesVinho}><Text style={styles.textDetalhesVinhoBold}>volume - </Text>{volume}</Text>

          <Icon5 style={styles.iconDetalhes}
            name="glass-martini-alt"
            size={24} 
            color="#000" 
          />


          <Text style={styles.textDetalhesVinho}><Text style={styles.textDetalhesVinhoBold}>teor alcoólico -</Text> {teorAlcolico}</Text>
          
          <Icon5 style={styles.iconDetalhes}  
            name="wine-bottle"
            size={24} 
            color="#000" 
          />


          <Text style={styles.textDetalhesVinho}><Text style={styles.textDetalhesVinhoBold}>país - </Text>{regiao}</Text>
          <Icon style={styles.iconDetalhes}
              name="globe"
              size={24}
              color="#000"
          />

          <Text style={styles.textDetalhesVinho}><Text style={styles.textDetalhesVinhoBold}> vinícola - </Text>{vinicola}</Text>

          <Icon style={styles.iconDetalhes}
            name="map-signs"
            size={24}
            color="#000"
          />  
        </View>
        
      </View> 

      <Button color='black'
        title="Adicionar ao carrinho"
        onPress={()=>navigation.navigate('CarrinhoCompras', {
            preco: preco,
            nome: nome,
            imagem: imagem,
            quantidade: quantidade,
          })}
      />

    </View>

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
    </ScrollView>


  )
}

export default DetalhesProduto;