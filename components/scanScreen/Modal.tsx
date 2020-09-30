import React, { useState } from "react";
import Modal from "react-native-modal";
import { StyleSheet, Button, Image } from "react-native";
import { Text, View } from "../../components/Themed";

type ModalPanelProps = {
  scanned: string;
  close: () => void;
};

const ModalPanel: React.FC<ModalPanelProps> = ({ scanned, close }) => {
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => setAmount((state) => state + 1);

  const decreaseAmount = () =>
    setAmount((state) => (amount === 1 ? 1 : state - 1));

  return (
    <Modal
      isVisible={!!scanned}
      swipeDirection={["down"]}
      scrollOffsetMax={400 - 300}
      onSwipeComplete={close}
      onBackdropPress={close}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.content}>
          <View style={styles.item}>
            <Image
              style={styles.itemImg}
              source={{
                uri:
                  "https://seicha.cz/wp-content/uploads/revslider/Seicha%20Matcha%20Produkte1/Yuzu_Slider2018.png",
              }}
            />
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>Macha seicha grapefruit</Text>
              <View style={styles.contentBottom}>
                <Text style={styles.itemPrice}>30$</Text>
                <View style={styles.cart}>
                  <Button title="+ Cart" onPress={() => {}} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.amount}>
            <View style={styles.amountWrapper}>
              <View style={styles.amountBtn}>
                <Button title="-" onPress={decreaseAmount} color="white" />
              </View>
              <View style={styles.amountInput}>
                <Text style={styles.amountLabel}>{amount}</Text>
              </View>
              <View style={styles.amountBtn}>
                <Button title="+" onPress={increaseAmount} color="white" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.checkout}>
          <Button title="Go to Checkout" color="white" onPress={() => {}} />
        </View>
        <Text>{scanned}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    height: 400,
    padding: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  content: {
    flex: 1,
  },
  contentBottom: {
    paddingTop: 15,
    flexDirection: "row",
  },
  item: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  itemImg: {
    width: 100,
    height: 100,
  },
  itemContent: {
    flex: 1,
    paddingLeft: 15,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#c00",
  },
  cart: {
    marginLeft: "auto",
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: "center",
    backgroundColor: "black",
  },
  amount: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#e3eaef",
    marginBottom: 20,
  },
  amountInput: {
    width: 80,
    backgroundColor: "#e3eaef",
  },
  amountLabel: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  amountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e3eaef",
  },
  amountBtn: {
    borderRadius: 5,
    paddingHorizontal: 6,
    backgroundColor: "black",
  },
  checkout: {
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#2396f3",
  },
});

export default ModalPanel;
