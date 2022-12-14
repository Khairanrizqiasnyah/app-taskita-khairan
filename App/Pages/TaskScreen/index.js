import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { ICNotif, IcPensil, IcTask, IconMail, IcCalendarCheck } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
const WINDOW_HEIGHT = Dimensions.get("window").height;


const CardView = (props)=>{
  return (
    <View style={{
      flexDirection:"row", 
      padding:14,
      borderBottomWidth:2,
      borderBottomColor:"#F9F9F9", 
      backgroundColor:"white"}}>
      <View style={{flex:1, alignContent:"center"}}>
          <Image source={IconMail} style={{width: 30, height: 30}}/>
      </View>
      <View style={{flex:5}}>
        <Text style={{fontSize:16, fontWeight:"bold", }}>{props.title}</Text>
        <Text>{props.value}</Text>
      </View>
    </View>
  )
}

export default TaskScreen = ({ navigation }) => {
  const summary = useSelector((state) => state.task.summary)
  const activedate = useSelector((state) => state.task.activedate)
  const timestart = useSelector((state) => state.task.timestart)
  const timeend = useSelector((state) => state.task.timeend)
  const nama = useSelector((state) => state.user.nama)
  const email = useSelector((state) => state.user.email)
  const dispatch = useDispatch()
  

  return (
    
    
    <SafeAreaView style={{ backgroundColor: "#261863", flex: 1 }}>

      <View style={style.containerTop}>
        <View >
          <Text style={style.textNameStyle}>{nama}</Text>
          <Text style={style.textWelcome}>{email}</Text>
        </View>
        <View>
          <Image
            source={ICNotif}/>
        </View>
      </View>

      <View style={style.bodyContent}>

        <ScrollView style={{ padding: 30 }}>
          <View style={{ flexDirection: "row" }}>

            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("AddNewScreen")}>
              <Image source={IcPensil} style={style.pensil} />
              <Text style={style.new}>Add New</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("")}>
              <Image source={IcTask} style={style.task} />
              <Text style={style.filter}>Filter Task</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      

      
      </View>
      <View style={style.bodyContent2}>
        <ScrollView style={{ padding: 30 }}>
          
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 0, marginRight: -90, height: 110, width:90, marginTop: 18}}>
            <Image source={IcCalendarCheck} style={{height:30, width:30, marginLeft: 20}}></Image>
              <Text>10 April 22</Text>
              <Text style={{marginLeft: 15, color:'#777878'}}>12.00</Text>
          </View>
            <View style={style.item}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={ICNotif} style={style.gambar1}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={style.teks1}>MEETING WITH CEO</Text>
                        </View>
                </View>
            </View>
        </View>
        

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  containerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
    paddingBottom: 50,
  },
  textNameStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#A85CA3",
    paddingLeft: 15,
  },
  textall: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  task: {
    resizeMode: "contain",
    marginTop: -10,
    marginRight: -10,
    marginLeft: 190,
    width: 40,
    height: 60,
  },
  pensil: {
    resizeMode: "contain",
    marginTop: -10,
    marginRight: -10,
    width: 40,
    height: 60,
  },
  new: {
    marginTop: 10,
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
  },
  filter: {
    marginTop: 10,
    marginLeft: 5,
    color: "white",
    fontWeight: "bold",
  },
  textWelcome: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 15,
  },
  bodyContent: {
    height: 150,
    backgroundColor: "violet",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bodyContent2: {
    marginTop: -60,
    height: WINDOW_HEIGHT,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  item: {
      backgroundColor: "#ECF0F1",
      padding: 15,
      borderColor: 'black',
      borderRadius: 30,
      flexDirection: 'column',
      height: 110,
      width: 330,
      marginLeft: 90,
      marginRight: 0,
      
  },
  gambar1: {
      borderRadius: 20,
      height:80,
      width:80,
  },
  teks1: {
      fontWeight: 'bold',
      fontSize: 18,
      top: 25,
      marginLeft: 10
  },
});