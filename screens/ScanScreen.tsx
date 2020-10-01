import React, { useState, useEffect } from "react";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { BarCodeScannerResult } from "expo-barcode-scanner";
import Frame from "../components/scanScreen/Frame";
import Modal from "../components/scanScreen/Modal";

const finderWidth: number = 280;
const finderHeight: number = 230;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

const ScanScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    const { type, data, bounds: { origin } = {} } = scanningResult;

    // @ts-ignore
    const { x, y } = origin;

    if (
      x >= viewMinX &&
      y >= viewMinY &&
      x <= viewMinX + finderWidth / 2 &&
      y <= viewMinY + finderHeight / 2
    ) {
      setScanned(data);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? (undefined as any) : handleBarCodeScanned}
        style={styles.scanner}
      />
      <Frame />
      <Modal scanned={scanned} close={() => setScanned("")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scanner: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default ScanScreen;
