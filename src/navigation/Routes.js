import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Login from "src/components/login/Login";
import HomeFastMeetings from "src/components/fast_meetings/HomeFastMeetings";
import RoomSetupMeeting from "src/components/setup_meetings/RoomSetupMeeting";
import HomeMyMeetings from "src/components/my_meeting/HomeMyMeetings";
import HomeCalendar from "src/components/calendar/HomeCalendar";
import Icon from "react-native-vector-icons/MaterialIcons";
import ModalPicker from "src/components/common/ModalPicker";

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
        backgroundColor: "#DC3343"
      }
    }
  }
);
const FastMeetingModalStack = createStackNavigator(
  {
    Home: { screen: FastMeetingsStack },
    Modal: { screen: ModalPicker }
  },
  {
    mode: "modal",
    headerMode: "none",
    transparentCard: true
  }
);

const CalendarStack = createStackNavigator(
  {
    Home: HomeCalendar
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#DC3343"
      }
    }
  }
);
const MeetingsStack = createStackNavigator(
  {
    Home: HomeMyMeetings
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#DC3343"
      }
    }
  }
);
const MainTab = createBottomTabNavigator(
  {
    FastMeeting: FastMeetingModalStack,
    MyMeetings: MeetingsStack,
    Calendar: CalendarStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "FastMeeting") {
          iconName = "flash";
        } else if (routeName === "MyMeetings") {
          iconName = "contact";
        } else if (routeName === "Calendar") {
          iconName = "calendar";
        }
        return <Icon name="chat" size={20} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "tomato",
      style: {
        backgroundColor: "#DC3343"
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
