import { View, Text } from "react-native";
import SafeArea from '../../components/common/SafeArea'
import ForYouScreen from "../../screens/tabs/ForYouScreen";

export default function ForYou() {
  return (
    <SafeArea >
      <ForYouScreen/>
    </SafeArea>
  );
}