import React from "react";
import { StyleSheet, Button, Image, ScrollView, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { StackNavigationProp } from "@react-navigation/stack";

type CartScreenNavigationProp = StackNavigationProp<any, "Cart">;

type Props = {
  navigation: CartScreenNavigationProp;
};

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const handleCheckout = () => {
    navigation.navigate("Shopping", { screen: "Checkout" });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentTop}>
          <Text>Total</Text>
          <Text style={styles.total}>30$</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemImg}
            source={{
              uri:
                "https://seicha.cz/wp-content/uploads/revslider/Seicha%20Matcha%20Produkte1/Yuzu_Slider2018.png",
            }}
          />
          <Text style={styles.itemTitle}>Macha seicha grapefruit</Text>
          <TextInput
            style={styles.itemInput}
            value="1"
            keyboardType="number-pad"
          />
          <Text style={styles.itemPrice}>30$</Text>
        </View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <View style={styles.checkout}>
          <Button
            title="Go to Checkout"
            color="white"
            onPress={handleCheckout}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  contentTop: {
    flexDirection: "row",
    borderColor: "#e3eaef",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  total: {
    marginLeft: "auto",
    fontWeight: "600",
    fontSize: 16,
  },
  item: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  itemImg: {
    width: 60,
    height: 60,
  },
  itemTitle: {
    fontWeight: "500",
    marginLeft: 10,
    flex: 5,
  },
  itemInput: {
    fontSize: 16,
    width: 50,
    height: 40,
    textAlign: "center",
    marginLeft: 10,
    borderRadius: 10,
    borderColor: "#e3eaef",
    borderWidth: 2,
  },
  itemPrice: {
    textAlign: "right",
    color: "#c00",
    marginLeft: 10,
    flex: 1,
  },
  btnWrapper: {
    borderTopWidth: 1,
    borderColor: "#e3eaef",
    paddingTop: 20,
  },
  checkout: {
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#2396f3",
  },
});

export default CartScreen;
