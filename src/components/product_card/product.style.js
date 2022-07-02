import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eceff1",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height:Dimensions.get("window").height/4,
        width: "100%",
        padding:10,
        resizeMode: 'contain',
        backgroundColor:"white"
    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
        color:"black"
    },
    price:{
        fontSize: 16,
        color:"gray",
        fontWeight: "bold",
    },
    stock:{
        color:"red",
        fontWeight:"bold",
        fontSize:16,
    },
    bottom_data:{
        flex:1,
        justifyContent:"flex-end"
    }
});