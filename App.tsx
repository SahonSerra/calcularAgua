import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [nome, setNome] = useState('');
  const [resultado, setResultado] = useState('');

  function limpar() {
    setPeso('');
    setNome('');
    setResultado('');
  }

  function calcularImc() {
    let calAgua = parseFloat(peso) * 0.035;

    // Verifica se o peso é um número válido e se o nome está preenchido
    if (isNaN(calAgua) || nome.trim() === '') {
      setResultado('Por favor, insira um nome e um peso válidos.');
      return;
    }

    let result = calAgua;
    setResultado(`${nome}, você deve beber aproximadamente ${result.toFixed(2)} litros de água por dia.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cal. Água</Text>

      <View style={styles.bloco}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          keyboardType='default'
          value={nome}
          onChangeText={(valor) => setNome(valor)}
        />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={peso}
          onChangeText={(valor) => setPeso(valor)}
        />
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn} onPress={calcularImc}>
          <Text style={styles.btnTxt}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTxt}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.titulo}>{resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 80,
    color: 'black'
  },
  bloco: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    width: '80%',
    fontSize: 20,
    marginLeft: '10%',
    color: 'black' 
  },
  input: {
    width: '80%',
    fontSize: 20,
    marginLeft: '10%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  btn: {
    width: '80%',
    marginLeft: '10%',
    borderRadius: 10,
    backgroundColor: 'cyan',
    padding: 10 
  },
  btnTxt: {
    fontSize: 30,
    color: "#FFF",
    textAlign: 'center'
  }
});
