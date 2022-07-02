import React from "react";
import {View, Text, StyleSheet, TextInput, FlatList} from "react-native";
import product_data from "./product_data.json";
import Product from "./components/product";

function App(){

  const renderProduct = ({item}) => <Product products={item}/>

  return(
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Text style={styles.logo}>PATIKASTORE</Text>
            <TextInput placeholder="Ara..." style={styles.search_bar}/>
          </View>
        }
        data={product_data}
        renderItem = {renderProduct}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:"white",
    flex:1,
  },
  logo : {
    color:"purple",
    fontWeight:"bold",
    fontSize:20,
    margin:10
  },
  search_bar : {
    backgroundColor:"#f0f0f0",
    borderRadius:10,
    margin:10,
    color:"gray",
    height:40
  }
})

export default App;