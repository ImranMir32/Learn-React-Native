import HomeScreen from "./HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const HomeStackScreen = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={{ HomeScreen }} />
    </Drawer.Navigator>
  );
};
export default HomeStackScreen;
