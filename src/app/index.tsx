import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const frases = [
  "A persistência é o caminho do êxito.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "Não espere por oportunidades, crie-as.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "A vida é 10% o que acontece com você e 90% como você reage a isso.",
];

export default function HomeScreen() {
  const [fraseAtual, setFraseAtual] = useState(
    "Toque o botão para gerar uma frase!",
  );

  function gerarNovaFrase() {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    setFraseAtual(frases[numeroAleatorio]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inspire-se com uma frase:</Text>

      <View style={styles.card}>
        <Text style={styles.textoFrase}>"{fraseAtual}"</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={gerarNovaFrase}>
        <Text style={styles.textoBotao}>Gere uma Frase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000e85",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 45,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 35,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  textoFrase: {
    fontSize: 25,
    color: "#000e85",
    textAlign: "center",
    fontStyle: "italic",
  },
  botao: {
    backgroundColor: "#000e85",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
