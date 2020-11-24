import React from 'react';
import DatePicker from 'react-native-datepicker'
import {StyleSheet,View, Text,ScrollView,TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      folgar: false,
      msg: 'Selecione um data!'
    }
  }


  verificar = () => {
    if(!this.state.data){
      alert('Nenhuma data inserida!');
      return;
    }
    var res = this.state.data.split("-");
    var dt = new Date(res[2] + '-' + res[1] + '-' + res[0] );
    if((dt.getDay() === 5) || (dt.getDay() === 6)){
      this.setState({folgar: true, msg: `Sim, esta data cai em um ${dt.getDay() === 5 ? 'sabado' : 'domingo'}!`})
    }else{
      this.setState({folgar: false, msg: 'Não, esta data não cai em um final de semana!'})
    }

  }


  render() {

    return (
      <View style={styles.content}>
      <View style={styles.containerTitulo}>
        <Text style={styles.TituloTexto}>Vou Folgar</Text>
      </View>
  <View>
   
  <DatePicker
              style={{ width: '100%', paddingTop: 22, paddingBottom: 22 }}
              date={this.state.data}
              mode="date"
              placeholder="Selecionar data"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              maxDate="31-12-2500"
              confirmBtnText="OK"
              cancelBtnText="Cancelar"
              customStyles={{
                dateIcon: {
                  
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                  
                }
              }}
              onDateChange={(date) => this.setState({data: date}) }
            />
  
    <View style={styles.containerResult}>
            <Text>{this.state.data ? this.state.msg : 'Selecione um data!'}</Text>
                  </View>
    <View style={{paddingBottom: 10, paddingTop: 15,flexDirection: 'column', width:'100%',justifyContent:'center', alignItems:'center' }}>
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.touch} onPress={() => {this.verificar()}}>
              <Text style={styles.textButton}>Vou folgar?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
  </View>
  
  
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: '100%',
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      // alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
     entrar2: {
      alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
      paddingBottom: '6%',
      backgroundColor: '#336666',
      borderColor: '#fff',
      width: '90%',
      marginBottom: 100,
    },
    entrar3: {
      alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
      paddingBottom: '6%',
      backgroundColor: '#336666',
      borderColor: '#fff',
      width: '90%',
      marginBottom: 100,
     
    },
    textButton: {
      fontSize: 13,
      color: '#fff',
      fontWeight: 'bold',
      // fontFamily: 'open-sans-bold',
      fontWeight: 'bold'
    },  
    mainContainer: {
      marginLeft: 10,
      marginRight: 10,
    },
    containerTitulo: {
      alignItems: 'center',
      marginTop: 10,
  
    },
    containerResult: {
      alignItems: 'center',
      marginTop: 10,
  
    },
    TituloTexto: {
      fontSize: 20,
    },      
    touch: {
      marginLeft: 10,
      marginRight: 10,
      height: 40,
      borderRadius: 10,
      backgroundColor: '#2b419a',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
})



