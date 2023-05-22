import { StatusBar } from "expo-status-bar";
import { StyleSheet,View,Text } from "react-native";
import Button from "./components/Button";
import { BUTTON_TYPES } from "./data/Constant";

export default function App() {
  const onBtnClick=()=>{
    console.log("I'm clicked")
  }
  return (
    <View style={styles.container}>
      <Button
        type={BUTTON_TYPES.PRIMARY}
        text="Hi Durga "
        // icon={
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     class="icon icon-tabler icon-tabler-arrow-right"
        //     width="20"
        //     height="20"
        //     viewBox="0 0 24 24"
        //     stroke-width="1.5"
        //     stroke="#ffffff"
        //     fill="none"
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //   >
        //     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //     <path d="M5 12l14 0" />
        //     <path d="M13 18l6 -6" />
        //     <path d="M13 6l6 6" />
        //   </svg>
        // }
        // iconposition='right'
        
        onClick={onBtnClick}
        size="large"
        loading="true"
      />
      <Button type={BUTTON_TYPES.SECONDARY} text="How" onPress={onBtnClick}/>
      <Button type={BUTTON_TYPES.TERTIARY} text="are you !"/>
      <Button type={BUTTON_TYPES.DASHED} text="Welcome to our page... !"/>
      <Button type={BUTTON_TYPES.DANGER} text="Don't Click here ... ☠️" loading="true" loadingcolor="red"/>
      <Button type={BUTTON_TYPES.TEXT} text="Instead Click here ... ❤️"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"space-evenly",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center"
  },
});
