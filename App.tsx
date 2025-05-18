import { useState } from 'react'; 
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
 
export default function App() {
 
  const [peso,setPeso] = useState(''); 
  const [nome, setNome] = useState('');
  const [resultado, setResultado] = useState('');
 
  function limpar(){
    setPeso('');
    setNome('');
    setResultado('');
  }  
 
  function calcularImc(){
    let aguaideal = parseFloat(peso) * 0.035;
    let Nome = parseFloat(nome);
    let result = aguaideal;
    setResultado(nome + ", você deve beber aproximadamente "+ result.toFixed(2) +"litros de água por dia ");
 
   
  }
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Meu ideal de água!</Text>
        <View style={styles.img}> 
      <Image source={require('./assets/img/agua.png')}/>
      </View>
     
      <View style={styles.bloco}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            keyboardType='default'
            value={nome}
            onChangeText={(valor)=>setNome(valor)}
          />
      </View>
      <View style={styles.bloco}>
          <Text style={styles.label} >Peso corporal</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={peso}
            onChangeText={(valor)=>setPeso(valor)}
           
          />
      </View>
      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={calcularImc} >
              <Text style={styles.btnTxt}>Calcular</Text>
          </TouchableOpacity>  
      </View>
      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={limpar} >
              <Text style={styles.btnTxt}>Limpar</Text>
          </TouchableOpacity>  

           <View style={styles.bloco}>
      <Text style={styles.titulo}>{resultado}</Text>
 
      </View>
      
      </View>
     
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:80,
    color:'blue'
  },
  bloco:{
    width:'100%',
    marginTop:20,
   
  },
  label:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%',
    color:'blue'
     },
  input:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%',
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'white'
  },
  btn:{
    width:'80%',
    marginLeft:'10%',
    borderRadius:10,
    backgroundColor:'blue'
   
  },
  btnTxt:{
    fontSize:30,
    color:"#FFF",
    textAlign:'center'
  },
img: { 
  alignItems: 'center', 
  padding:'2%' 
}

    


    

  
  
 
});