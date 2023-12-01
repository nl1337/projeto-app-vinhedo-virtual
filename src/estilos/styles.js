import { StyleSheet } from "react-native";

export default StyleSheet.create({
button: {
  backgroundColor: 'grey',
  color: 'white',
  fontSize: 15,
  width: 150,
  height: 35,
  marginTop: 20,
  marginHorizontal: 20,
  textAlign: 'center',
  alignSelf: 'center',
},
btnCustom: {
  borderRadius:20,
},
  container: {
  flex: 1,
  justifyContent: 'center',
  padding: 5,

},
  input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
},
logo: {
  height:150,
  width: 120,
  resizeMode: 'stretch',
  textAlign: 'center',
  alignSelf: 'center',
  margin: 20
},
tituloLogo: {
  fontSize: 28,
  textTransform: 'uppercase',
  textAlign:'center',
  fontWeight:'bold',
},
logoVinho: {
    width: 80,
    height: 120,
    alignSelf: 'center',
},
titulo: {
    margin: 12,
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
},
price: {
    margin: 12,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',  
},
paragraph: {
  margin: 12,
  padding: 10,
  fontSize: 14,
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'Justify',

},
vinhoContainer: {
  width: '44%',
  borderWidth: 1,
  margin: 9,
  marginRight: 10,
  
},
imagemFundo: {
  flex: 1,
  resizeMode: "cover",
  width: '100%',
  height: '100%',
  justifyContent: 'center',
},
imgHeader: {
  justifyContent: 'center',
  resizeMode: "cover",
  width: '94%',
  marginRight: 9,
  marginLeft: 9

},
textHeader: {
  margin: 9,
  textTransform: "uppercase",

},
text: {
  fontSize: 20,
  fontWeight: 'bold',
},
line: {
  borderBottomColor: '#000',
  borderBottomWidth: 2,

},
imgFooter: {
  height: 50,
  width: 35,
  resizeMode: "stretch",
  alignSelf: 'center',
},
textFooter: {
  margin: 9,
  textTransform: "uppercase",
  justifyContent: 'center',
  alignSelf: 'center',
  
},
formTextFooter: {
  fontSize: 18,
  fontWeight: 'bold',

},
imgVinhoDescricao: {
    height: 330,
    width: 220,
    margin: 20,
    alignSelf: 'center',
    borderWidth: 1,
},
containerVinhoDescricao: {
  borderBottomWidth: 2
  
},
descricaoVinho: {
  margin: 9,
  justifyContent: 'center',
  textAlign: "justify",
},
textVinho: {
  fontSize: 18,
  marginBottom: 20,
  marginTop: 15,
  textAlign: 'justify',
  lineHeight: 30,
  paddingLeft: 5,
  paddingRight: 5,
},
descVinho: {
  textTransform: "uppercase",
  paddingBottom: 7,
  paddingTop: 7,
  fontSize: 20,
  alignSelf: 'center',
  fontWeight: "bold"

},
menuInicialVinho: {
  textTransform: "uppercase",
  fontSize: 20,
  fontWeight: "bold"

},
descPreco: {
  paddingBottom: 13,
  fontSize: 20,
  alignSelf: 'center',
  fontWeight: "bold"
},
descBtn: {
  width: '10%'
},
detalhesVinho: {
  textAlign: "justify",
  paddingBottom: 20,
},
iconDetalhes: {
  flex: 1,
  right: 0, 
  alignSelf: 'flex-start',
  bottom: '8.5%',
  position: "relative",
  
 
},
borderFichaTecnica: {
  borderWidth: 1,
  padding: 5,
  borderRadius: 8,
  paddingTop: 20,
  backgroundColor: '#fff',
},
textDetalhesVinho: {
  fontSize: 18,
  marginBottom: 2,
  marginTop: 2,
  paddingLeft: 40,
},
textDetalhesVinhoBold: {
  fontSize: 16,
  fontWeight: 'bold',
  textTransform: 'uppercase',
},
descFichaTecnica: {
  textTransform: "uppercase",
  paddingBottom: 7,
  paddingTop: 7,
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 20,
  alignSelf: 'center',
},
supTextFooter: {
  fontSize: 14,
  fontWeight: 'bold',
  alignSelf: 'center',
  padding: 5,
  color: '#5e2129',
},
iconSupFooter: {
  position: 'absolute',
  right: 45, 
  top: 5,
  alignSelf: 'center',
  color: '#5e2129',

},
containerSup: {
  marginTop: 5,
},


wineName: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#000000',
  textAlign: 'center',
},
wineValue: {
  fontSize: 16,
  color: 'black',
  fontWeight: 'bold',
},
  picker: { 
  marginBottom: 16,
  borderWidth: 2,
  borderColor: '#2e2e2e',
  borderRadius: 8,
  padding: 5,
  marginTop: 10,
  textTransform: 'uppercase',
  fontSize: 12,
  fontWeight: 'bold',
  margin: 5,
  
},
searchButton: {
  marginTop: 15,
  marginBottom: 10,
  backgroundColor: '#000000',
  padding: 10,
  alignItems: 'center',
},
searchButtonText: {
  color: '#fff',
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 16,
  textAlign: 'center',
},
label: {
  fontSize: 16,
  marginTop: 15,
  fontWeight: 'bold'
},

resultItem: {
  marginBottom: 16,
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 16,
  borderRadius: 8,
  backgroundColor: '#fff',
},
searchedImage: {
  width: 100,
  height: 150,
  resizeMode: 'contain',
  alignSelf: 'center',
  borderRadius: 8,
  marginBottom: 16,
},
buyButton: {
  marginTop: 16,
  backgroundColor: '#000000',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
},
buyButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},
tituloCompra: {
    margin: 5,
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    alignSelf: 'center'
},
vinhoContainerCompra: {
  borderWidth: 1,
  margin: 5,
  marginRight: 10,
  
},
logoVinhoCompra: {
    width: 40,
    height: 60,
    alignSelf: 'center',

},
btnCompra: {
  borderWidth: 1,
  alignSelf: 'center',
  padding: 5,
  margin: 5,
  backgroundColor: '#000',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: 14,
  borderRadius: 5,

},
alinharBotaoCompra:{
    flexDirection: 'row', // Define o layout para linha (horizontal)
    justifyContent: 'center', 
    
},
quantidadeTituloCompra:{
    margin: 5,
    fontSize: 13,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    alignSelf: 'center',

},
tituloValorFinalCompra: {
    margin: 5,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,

},
valorFinalCompra: {
    margin: 5,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    alignSelf: 'center',  
},
btnGerenciarCompra: {
  borderWidth: 1,
  alignSelf: 'center',
  width: '95%',
  padding: 8,
  margin: 8,
  backgroundColor: '#000',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: 14,
  textAlign: 'center',
  borderRadius: 5,

},
tituloCheckout: {
  textTransform: "uppercase",
  fontSize: 20,
  fontWeight: "bold",
  margin: 5,
  marginTop: 15,
},
valorFinalCheckout: {
  textTransform: "uppercase",
  fontSize: 20,
  fontWeight: "bold",
  margin: 5,
  textAlign: 'center',
  color: 'red',
},
inputCheckout: {
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
},
btnCheckout: {
  borderWidth: 1,
  width: '100%',
  padding: 8,
  margin: 2,
  backgroundColor: '#000',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: 14,
  textAlign: 'center',
  borderRadius: 5,
  marginBottom: '5%',
},
centeredView: {
  flex: 1,
  marginTop: '60%',
},
modalView: {
  margin: 20,
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 35,
  shadowColor: "#000",
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 8,
  borderWidth: 2,
  height: "50%",

  
},
modalText: {
  marginBottom: 15,
  textAlign: "justify",
  fontSize: 14,
},
modalTitle: {
  marginBottom: 15,
  textAlign: "center",
  textTransform: 'uppercase',
  fontSize: 14,
},
modalTextPagamento:{
  textTransform: 'uppercase',
  fontSize: 14,
},
modalTextBold:{
  textTransform: 'uppercase',
  fontSize: 14,
  fontWeight: 'bold',
},
modalTitleName: {
  marginBottom: 15,
  textAlign: "center",
  textTransform: 'uppercase',
  fontSize: 14,
  fontWeight: 'bold',
},
descSuporte: {
  margin: 5,
  padding: 5,
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'justify',
},
footer: {
  flex: 1,
  justifyContent: 'flex-end',
  padding: 5,  
},
containerSuporte: {
  margin: 4,
  flex: 1,
},
emailSuporte: {
  margin: 4,
  fontSize: 18,
  fontWeight: 'bold',
  color: 'red',
}
});