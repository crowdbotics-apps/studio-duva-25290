import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen49218913Navigator from '../features/BlankScreen49218913/navigator';
import Maps218895Navigator from '../features/Maps218895/navigator';
import Additem218894Navigator from '../features/Additem218894/navigator';
import Maps218890Navigator from '../features/Maps218890/navigator';
import UserProfile218886Navigator from '../features/UserProfile218886/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen49218913: { screen: BlankScreen49218913Navigator },
Maps218895: { screen: Maps218895Navigator },
Additem218894: { screen: Additem218894Navigator },
Maps218890: { screen: Maps218890Navigator },
UserProfile218886: { screen: UserProfile218886Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
