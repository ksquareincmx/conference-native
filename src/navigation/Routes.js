import React from 'react'
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Login from "../components/login/Login";
import HomeFastMeetings from "../components/fast_meetings/HomeFastMeetings";
import RoomSetupMeeting from "../components/setup_meetings/RoomSetupMeeting"
import HomeMyMeetings from "../components/my_meeting/HomeMyMeetings";
import HomeCalendar from "../components/calendar/HomeCalendar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../utils/Colors'

const AuthStack = createStackNavigator({
  SignIn: Login
});
const FastMeetingsStack = createStackNavigator(
  {
    Home: HomeFastMeetings,
    Setup: RoomSetupMeeting
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DC3343'
      }
    }
  }
);
const CalendarStack = createStackNavigator({
  Home: HomeCalendar
});
const MeetingsStack = createStackNavigator({
  Home: HomeMyMeetings
});
const MainTab = createBottomTabNavigator(
  {
    FastMeeting: FastMeetingsStack,
    MyMeetings: MeetingsStack,
    Calendar: CalendarStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'FastMeeting') {
          iconName = 'flash'
        } else if (routeName === 'MyMeetings') {
          iconName = 'contact'
        } else if (routeName === 'Calendar') {
          iconName = 'calendar'
        }
        return <Icon name='chat' size={20} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "tomato",
      style: {
        backgroundColor: '#DC3343'
      }
    }
  }
);
const SwitchNav = createSwitchNavigator(
  {
    Login: AuthStack,
    MainApp: MainTab
  },
  {
    initialRouteName: "Login"
  }
);

export const AppContainer = createAppContainer(SwitchNav);
