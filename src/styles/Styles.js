
import { StyleSheet} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';


const styles = StyleSheet.create(
    {
      letraGordita: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      letra: {
        fontSize: 20,
        padding: 5,
      },
      viewfrutas: {
        padding: 10,
        alignItems:'center',
        backgroundColor: '#e4b5c5'
      },
      informacion: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,  
      },
      input: {
        borderColor: 'black',
        borderWidth: 1,
        padding:5,
        height:30,
        width:100,
        marginBottom:20,
        marginTop:10
        
      },
      enunciado:{
        fontSize:18,
        fontWeight:'bold',
        color:'#f2e428',
        textShadowColor:'black',
        textShadowRadius:10,

      },
      imagenfondo:{
        width: '100%',
        height: '100%',
        flex: 1 
      },
      imagenFruta:{
        width: 170,
        height: 170,
        flex: 1 
      },
      viewfrigorifico: {
        padding: 10,
        alignItems:'center',
      },
      desple:{
        marginTop:-20,
        paddingBottom:10,
        width:15,
        height:15
      },
      fruta:{
        color:'#3ac27a',
        fontWeight:'bold',
        textShadowColor:'black',
        textShadowRadius:15,
        fontSize:30,
      },
      precio:{
      color:'#f52a3e',
      fontWeight:'bold',
      textShadowColor:'black',
      textShadowRadius:15,
      fontSize:30
    },

    }
  )
export default styles;  