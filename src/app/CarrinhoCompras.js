import {Text, View, FlatList, TouchableOpacity, Button, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../estilos/styles';
import AsyncStorage from '@react-native-async-storage/async-storage'

const CarrinhoCompras = ({route, navigation}) => {
  const {nome, preco, imagem } = route.params;
  const [quantidade, setQuantidade] = useState(route.params.quantidade);
  const [data, setData] = useState([]);

  function filterDesc(desc){
    if(desc.length < 20){
      return desc;
    }else{
      return `${desc.substring(0, 12)}...`;
    }
  }

  useEffect(() => {
    const carregarDadosEAdicionarItem = async () => {
      try {

        const dadosArmazenados = await AsyncStorage.getItem('@vinhedoVirtual:dados');

        if (dadosArmazenados) {      
          setData(JSON.parse(dadosArmazenados));
        }

        adicionarItem();
      } catch (error) {
        console.error('Erro ao carregar dados do AsyncStorage:', error);
      }
    };


    carregarDadosEAdicionarItem();
  }, []); 

  const removerItem = (item) => {
    const novosDados = data.filter((elemento) => elemento !== item);
    setData(novosDados);
    salvarDadosNoAsyncStorage(novosDados);
  };



  const renderItem = ({ item }) => (
    <View style={styles.vinhoContainerCompra}>
      
      <Text style={styles.tituloCompra}>{filterDesc(item.nome)}</Text>
        <Image
          style={styles.logoVinhoCompra}
          source={{
          uri: item.imagem
          }}
        />
      <Text style={styles.tituloCompra}>UN | {item.preco}</Text>
      

      <View style={styles.alinharBotaoCompra}>
        <Text style={styles.tituloCompra}>Quantidade <Text style={styles.quantidadeTituloCompra}>{item.quantidade}</Text></Text>

        <TouchableOpacity onPress={() => setQuantidade(item.quantidade ++)}>
          <Text style={styles.btnCompra}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{
            if (item.quantidade > 1) {
              setQuantidade(item.quantidade --);
            }
          }}>
          <Text style={styles.btnCompra}> - </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => removerItem(item)}>
        <Text style={styles.btnCompra}> Remover item </Text>
      </TouchableOpacity>
      
    </View>
  );


  const adicionarItem = () => {
    if(!(nome == "" || preco == "" || imagem == "" || quantidade == "")){
    
    const novoItem = {
      preco: `${preco}`,
      nome: `${nome}`,
      imagem: `${imagem}`,
      quantidade: `${parseInt(quantidade, 10)}`
    };

    setData(prevData => {
      const novoArray = [...prevData, novoItem];
      salvarDadosNoAsyncStorage(novoArray);
      return novoArray;
    });
    }
  };

  const calcularValorTotal = () => {
  let valorTotal = 0;

  data.forEach((item) => {
    valorTotal += item.preco * item.quantidade;
  });

  return valorTotal.toFixed(2); 
};

  const salvarDadosNoAsyncStorage = async (dados) => {
    try {

      await AsyncStorage.setItem('@vinhedoVirtual:dados', JSON.stringify(dados));
    } catch (error) {
      console.error('Erro ao salvar dados no AsyncStorage:', error);
    }
  };

   


  return ( 
    <View>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListFooterComponent={
      <View>

        <Text style={styles.tituloValorFinalCompra}>Valor total R$: <Text style={styles.valorFinalCompra}>{calcularValorTotal()}</Text> </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('MenuInicial')}
          style={styles.btnGerenciarCompra}>
          <Text style={{ color: 'white' }}>Continuar comprando</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>{
             if (!(calcularValorTotal() == 0)){
              navigation.navigate('Checkout', {valorFinal: calcularValorTotal()})
            }else{
              alert('Você não possui itens selecionados !!')
            }

          }}


          style={styles.btnGerenciarCompra}>
          <Text style={{ color: 'white' }}>Finalizar compra</Text>
        </TouchableOpacity>
        

      </View>
      
      }
    />
   </View>
   
  );
  
}

export default CarrinhoCompras;