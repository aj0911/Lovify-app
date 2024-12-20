import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Swiper from "react-native-deck-swiper";
import { COLORS } from "../../utils/constants";
import { fsp } from "../../utils/helper";

const Swipe = ({
  cards = [],
  renderCard = () => {},
  onSwiped = () => {},
  onSwipedAll = () => {},
  stackSize
}) => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={renderCard}
        onSwiped={onSwiped}
        onSwipedAll={onSwipedAll}
        cardIndex={0}
        cardStyle={styles.cardStyle}
        backgroundColor="transparent"
        stackSize={stackSize} // Number of cards in the stack
        stackSeparation={0} // No separation between stacked cards
        infinite // Cards will loop after the last one
      ></Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardStyle: {
    borderRadius: fsp(10),
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    flex:1
  },
});

export default Swipe;
