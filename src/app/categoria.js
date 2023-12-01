import React, { useState } from 'react';
import {View, Text, Button, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../estilos/styles';
import { MaterialIcons } from '@expo/vector-icons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { Feather } from '@expo/vector-icons';

const WineSearch = ({route, navigation}) => {

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

const { flatListData } = route.params;

  const [wineType, setWineType] = useState('');
  const [wineValue, setWineValue] = useState('');
  const [wineCountry, setWineCountry] = useState('');
  const [wineGrapes, setWineGrapes] = useState('');
  const [filteredWines, setFilteredWines] = useState([]);
  const [searchedImage, setSearchedImage] = useState(null);

  const allWines = flatListData;

  function filterDesc(desc){
    if(desc.length < 13){
      return desc;
    }else{
      return `${desc.substring(0, 12)}...`;
    }
  }

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
            <Text style={styles.price}> UN | R$: {item.value} </Text>
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

  const applyFilter = () => {
    // Lógica de filtragem adicional, se houver
    const filteredWines = allWines.filter((wine) => {
      if (wineType && wineType !== wine.type) {
        return false;
      }

      if (wineValue) {
        const [min, max] = wineValue
          .split('-')
          .map((val) => parseFloat(val.replace(',', '.')));

        if (isNaN(min) || isNaN(max)) {
          return false;
        }

        const wineValueNumber = parseFloat(wine.value.replace(',', '.'));

        if (
          isNaN(wineValueNumber) ||
          wineValueNumber < min ||
          wineValueNumber > max
        ) {
          return false;
        }
      }

      if (wineCountry && wineCountry !== wine.country) {
        return false;
      }

      if (wineGrapes && !wine.grapes.includes(wineGrapes)) {
        return false;
      }

      return true;
    });

    setFilteredWines(filteredWines);

    if (filteredWines.length > 0) {
      setSearchedImage(filteredWines[0].image);
    } else {
      setSearchedImage(null);
    }
  };
  const handleBuyButtonPress = (wineItem) => {
    console.log(`Comprar vinho: ${wineItem.type}`);
  };

  return (

      <FlatList
        ListHeaderComponent={      
          <View>
          
              <Image
                source={require('../imagens/headerNoText.jpg')}
                style={styles.imgHeader}
              />
            <View style={styles.line} />
            
            <View style={styles.textHeader}>
              <Text style={styles.text}>Filtros</Text>

              <Text style={styles.label}>Tipo de Vinho:</Text>
              <Picker
                selectedValue={wineType}
                onValueChange={(itemValue) => setWineType(itemValue)}
                style={[styles.picker, styles.pickerWithBorder]}>
                <Picker.Item label="Selecione o tipo" value="" />
                <Picker.Item label="Tinto" value="Tinto" />
                <Picker.Item label="Branco" value="Branco" />
                <Picker.Item label="Rosé" value="Rosé" />
                <Picker.Item label="Espumante" value="Espumante" />
              </Picker>

              <Text style={styles.label}>Valor do Vinho:</Text>
              <Picker
                selectedValue={wineValue}
                onValueChange={(itemValue) => setWineValue(itemValue)}
                style={[styles.picker, styles.pickerWithBorder]}>
                <Picker.Item label="Selecione o valor" value="" />
                <Picker.Item label=" $10-20" value="10-20" />
                <Picker.Item label="$20 - $50" value="20-50" />
                <Picker.Item label="$50 - $100" value="50-100" />
                <Picker.Item label="$100 - $1000" value="100-1000" />
              </Picker>

              <Text style={styles.label}>País:</Text>
              <Picker
                selectedValue={wineCountry}
                onValueChange={(itemValue) => setWineCountry(itemValue)}
                style={[styles.picker, styles.pickerWithBorder]}>
                <Picker.Item label="Selecione o país" value="" />
                <Picker.Item label="França" value="França" />
                <Picker.Item label="Itália" value="Itália" />
                <Picker.Item label="Espanha" value="Espanha" />
                <Picker.Item label="Argentina" value="Argentina" />
              </Picker>

              <Text style={styles.label}>Uvas:</Text>
              <Picker
                selectedValue={wineGrapes}
                onValueChange={(itemValue) => setWineGrapes(itemValue)}
                style={[styles.picker, styles.pickerWithBorder]}>
                <Picker.Item label="Selecione as uvas" value="" />
                <Picker.Item label="Cabernet Sauvignon" value="Cabernet Sauvignon" />
                <Picker.Item label="Chardonnay" value="Chardonnay" />
                <Picker.Item label="Merlot" value="Merlot" />
                <Picker.Item label="Glera" value="Glera" />
              </Picker>

              <TouchableOpacity onPress={applyFilter} style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Pesquisar</Text>
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

        data={filteredWines}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ExibirVinho}
        numColumns={2}
      />
  );
};


export default WineSearch;
