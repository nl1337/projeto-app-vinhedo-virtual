import React, { useState, useEffect } from 'react';
import { Text, View, Button, Pressable, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import styles from '../estilos/styles';
import { MaterialIcons } from '@expo/vector-icons';
import DetalhesProduto from './DetalhesProduto';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { Feather } from '@expo/vector-icons';



function MenuInicial({navigation, route}) {
  // Função para verificar se o título do produto é maior do que 12 caracteres, fazendo o corte com '...' a fim de evitar quebrar o layout
  function filterDesc(desc){
    if(desc.length < 13){
      return desc;
    }else{
      return `${desc.substring(0, 12)}...`;
    }
  }

  navigation.setOptions({
    headerRight:() => (
      <TouchableOpacity onPress={()=>navigation.navigate('CarrinhoCompras', {
        preco: "",
        nome: "",
        imagem: "",
        quantidade: "",
      })} style={{marginRight: 15}}>
        <Feather
          name="shopping-cart"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    )
  });  

  
  const DATA = [
    {
      "id": 1009220,
      "name": "Vinho tinto",
      "type": "Tinto",
      "quantidade": 1,
      "value": 89.99,
      "volume": "750ml",
      "alcohol_content": "11,99%",
      "country": "França",
      "vineyard": "Aurora",
      "grapes": ['Cabernet Sauvignon'],
      "description": "O vinho tinto é um vinho tranquilo de cor vermelha e que possui níveis consideráveis de tanino. São elaborados necessariamente com castas tintas. É a principal variedade de vinho consumido no mundo, com grande gama de estilos e características.",
      "modified": "2020-04-04T19:01:59-0400",
      "thumbnail": {
        "path": "https://img.panoramasistemas.com.br/viadelvino.img/produto/531/vinho-tinto-miolo-sebrumo-cabernet-sauvignon-750-ml-1248-large.png",
        "extension": "jpg"
      }
    },
    {
      "id": 1009220,
      "name": "Vinho Rosé",
      "type": "Rosé",
      "quantidade": 1,
      "value": 59.99,
      "volume": "750ml",
      "alcohol_content": "11,99%",
      "country": "França",
      "vineyard": "Aurora",
      "grapes": ['Cabernet Sauvignon'],
      "description": "O vinho rosé é aquele de cor rosada, cuja intensidade varia de acordo com as uvas e os métodos de produção utilizados. A tonalidade pode ir de um rosa quase translúcido até um vermelho pálido. Esse estilo de vinho, delicado e versátil, vem conquistando muitos paladares no mundo todo.",
      "modified": "2014-03-05T13:17:50-0500",
      "thumbnail": {
        "path": "https://famigliavalduga.vteximg.com.br/arquivos/ids/160888-900-1200/Naturelle-Rose-Suave---rolha-ecommerce.jpg?v=638076562921870000",
        "extension": "jpg"
      }
    },
    {
      "id": 1017295,
      "name": "Vinho branco",
      "type": "Branco",
      "quantidade": 1,
      "value": 49.99,
      "volume": "750ml",
      "alcohol_content": "11,99%",
      "country": "França",
      "vineyard": "Aurora",
      "grapes": ['Cabernet Sauvignon'],
      "description": "Os vinhos brancos são vinhos tranquilos de coloração amarela em variados tons, em alguns casos quase incolor e com concentrações imperceptíveis de tanino. São vinhos naturalmente mais leves e ácidos, ideais para serem consumidos a temperaturas próximas a 10º C e acompanham bem comidas leves.",
      "thumbnail": {
        "path": "https://images.tcdn.com.br/img/img_prod/727044/vinho_branco_dona_florencia_sauvignon_blanc_d_o_vale_do_maule_2021_50530_1_444b54924cd43301e6a210430e5a8b2c.jpg",
        "extension": "jpg"
      }
    },
    {
      "id": 1017575,
      "name": "Vinho espumante",
      "type": "Espumante",
      "quantidade": 1,
      "value": 49.99,
      "volume": "750ml",
      "alcohol_content": "11,99%",
      "country": "França",
      "vineyard": "Aurora",
      "grapes": ['Cabernet Sauvignon'],
      "description": "Espumante (ou frisante) é um tipo vinho que tem nível significativo de dióxido de carbono, fazendo-o borbulhar quando servido. O Dióxido de carbono resulta de fermentação natural, seja ela feita dentro da garrafa (Método champenoise) ou fora dela (Método Charmat).",
      "thumbnail": {
        "path": "https://cdn.dooca.store/2208/products/55dbca75-cbb6-4c90-8ef9-392db018666f.jpeg?v=1615858861000",
        "extension": "jpg"
      }
    }
  ]

  const Vinho = ({ item, evento, link }) => (  
      <View style={styles.vinhoContainer}>
          <Pressable onPress={evento}>
            <Text style={styles.titulo}>{filterDesc(item.name)}</Text>          
            <Image
                style={styles.logoVinho}
                source={{
                uri: link,
                }}
            />
            <Text style={styles.price}>UN | R$: {item.value} </Text>
          </Pressable>
      </View>
  );

  const ExibirVinho = ({ item }) => (

      <Vinho
          item={item}
          evento={()=>navigation.navigate('DetalhesProduto', {
            descricao: item.description, 
            nome: item.name,
            preco: item.value,
            imagem: item.thumbnail.path,
            teorAlcolico: item.alcohol_content,
            regiao: item.country,
            vinicola: item.vineyard,
            volume: item.volume,
            uva: item.grapes,
            quantidade: item.quantidade,
          })}
          link={item.thumbnail.path} 
      />
  );

  return (
      <SafeAreaView style={styles.container}>
          <FlatList
              ListHeaderComponent={      
                <View>
                    <Image
                      source={require('../imagens/headerNoText.jpg')}
                      style={styles.imgHeader}
                    />
                  <View style={styles.line} />
                  
                  <View style={styles.textHeader}>
                    <Text style={styles.menuInicialVinho}>mais vendidos</Text>
                     <TouchableOpacity
                        style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
                        onPress={() => navigation.navigate('Categoria' , {
                           flatListData: DATA
                        })}>
                      
                    
                      <MaterialIcons
                        name="filter-list"
                        size={24}
                        color="#000"
                      />
                    </TouchableOpacity>
                  </View>

                  

                </View>
              }
              ListFooterComponent={
                
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
              }
              numColumns={2}
              data={DATA}
              renderItem={ExibirVinho} 
              keyExtractor={item => item.id}
          />
      </SafeAreaView>
  )

}

export default MenuInicial;
