import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [showOtherView, setShowOtherView] = useState(false);

  const handleViewPress = () => {
    setShowOtherView(true);
  };

  return (
    <ImageBackground
      source={require('./assets/img/fondo.png')}
      style={styles.backgroundImage}
    >
      {showOtherView ? (
        <View style={styles.container}>
          <View style={styles.titulo}>
            <Text style={styles.tituloTexto}>Que Buscas</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>Electrisita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>Gafista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>Refrigeracion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>Pintor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>Durlockista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>Albañil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>Carpinteria</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.column}>
            <Text style={styles.text}>Registro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={handleViewPress}>
            <Text style={styles.text}>Cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={handleViewPress}>
            <Text style={styles.text}>Tecnico</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  // Vistas_Principales
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    width: '60%',
    backgroundColor: '#24508d',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 70,
    color: '#fff',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },

  // Vistas_Secundarias

  titulo: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#000',
    borderWidth: 10,
    marginBottom: 40, 
  },
  tituloTexto: {
    fontSize: 30,
    width: '50%',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
  },
  text2: {
    fontSize: 30,
    width: '50%',
    aspectRatio: 4,
    color: 'black',
    backgroundColor: '#fff',
    marginVertical: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
