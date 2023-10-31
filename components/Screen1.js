import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Screen1({navigation}){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://653f235e9e8bd3be29dffce8.mockapi.io/Screen1')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);
    return(
        <View style = {styles.container}>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
                <Image style={{width: 300, height: 300, borderRadius: '20px', borderWidth: 1, borderColor: 'black',}} source={require('../assets/task1.png')}></Image>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color:'#8353e2'}}>MANAGE YOUR TASK</Text>
            </View>
            

            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingVertical: 20}}>
                <Image style={{width: 20, height: 20, borderColor: 'black',}} source={require('../assets/enter.png')}></Image>
                <TextInput  placeholder='Enter your name' style={{borderWidth: 1, color: '#C4C4C4', borderRadius: 10, height: 50, width: 300}}></TextInput>
            </View>
            
             
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Button title='GET STARTED ->' color={'#00bdd6'} onPress={()=>{navigation.navigate('Screen2')}}></Button>
            </View>
           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Screen1;