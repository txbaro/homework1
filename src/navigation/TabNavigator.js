import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from "./AuthStack";
import ListScreen from "../screens/ListScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Task 1" component={AuthStack} />
      <Tab.Screen name="Task 2" component={ListScreen} />
    </Tab.Navigator>
  );
}
