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
import { ICNotif, IcPensil, IcTask } from "../../assets";
import { MiniCard } from "../../Componets";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
const WINDOW_HEIGHT = Dimensions.get("window").height;

export default TaskScreen = ({ navigation }) => {
  const nama = useSelector((state) => state.user.nama);
  const email = useSelector((state) => state.user.email);
  const month = useSelector((state) => state.config.bulan);
  const day = useSelector((state) => state.config.hari);
  const curDate = new Date();
  const hari = curDate.getDay();
  const curMonth = curDate.getMonth();
  const hariSekarang = day[hari];
  const hariBesok = day[hari + 1];
  const hariLusa = day[hari + 2];
  const tglSekarang = curDate.getDate();
  const tglBesok = tglSekarang + 1;
  const tglLusa = tglSekarang + 2;
  const displayMonth = month[curMonth];
  const onPresDate = (date) => {
    alert("tes" + date);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#261863", flex: 1 }}>
      <View style={style.containerTop}>
        <View>
          <Text style={style.textNameStyle}>Samanta Anna</Text>
        </View>
        <View>
          <Image source={ICNotif} />
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
          <Text style={style.textall}>All Task </Text>
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
});