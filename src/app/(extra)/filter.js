import { View, Text } from "react-native";
import SafeArea from '../../components/common/SafeArea'
import ForYouScreen from "../../screens/tabs/ForYouScreen";
import Filter from "../../screens/extra/Filter";

export default function filters() {
  return (
    <SafeArea >
      <Filter/>
    </SafeArea>
  );
}