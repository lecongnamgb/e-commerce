import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RecommendListItem from '../homeComponents/RecommendListItem'
import SearchScreen from '../../screens/SearchScreen'
import LogInScreen from '../../screens/LogInScreen'
import CartScreen from '../../screens/CartScreen'

import ResultSearchScreen from '../../screens/ResultSearchScreen'
import Product from '../../screens/Product'
import EvaluationScreen from '../../screens/EvaluationScreen'
import NotiMain from '../notiComponents/NotiMain'
import MainUserScreen from '../userComponents/MainUserScreen'
import SignInScreen from '../../screens/SignInScreen'
import EditInfoScreen from '../../screens/EditInfoScreen'
import LikedProduct from '../../screens/LikedProduct'
import RecentlyView from '../../screens/RecentlyView'
import BuyAgain from '../../screens/BuyAgain'
import BillStatus from '../../screens/BillStatus'
import RegisterSeller from '../../screens/RegisterSeller'
import ShopScreen from '../../screens/ShopScreen'
import ResultShop from '../../screens/ResultShop'
import EditName from '../../screens/EditScreen/EditName'
import EditPhoneNumber from '../../screens/EditScreen/EditPhoneNumber'
import EditAddress from '../../screens/EditScreen/EditAddress'
import EditPassword from '../../screens/EditScreen/EditPassword'
import ProductReview from '../../screens/ProductReview'
import ProductManager from '../../screens/ProductManager'
import EditProductInfo from '../../screens/EditProductInfo'
import OrderManager from '../../screens/OrderManager'
import MyReview from '../../screens/MyReview'
import ConfirmBuyProducts from '../../screens/ConfirmBuyProducts'

const Stack = createStackNavigator();
export default function HomeStackNavigation() {
  return (
    <Stack.Navigator
    >
    <Stack.Screen
        name = {"Home"}
        component = {RecommendListItem}
        options={
            {
                headerShown: false,
            }
        }
    />
        <Stack.Screen
            name = {"Cart"}
            component = {CartScreen}
            options={
                {
                    headerShown: false
                }
            }
        />
       <Stack.Screen
            name = {"BillStatus"}
            component= {BillStatus}
            options = {
                {
                    headerShown: false,
                }
            }
        />
        <Stack.Screen
            name = {"Search"}
            component= {SearchScreen}
            options = {
                {
                    headerShown: false,
                }
            }
        />
        <Stack.Screen
            name = {"resultSearch"}
            component= {ResultSearchScreen}
            options = {
                {
                    headerShown: false,
                }
            }
        />
         <Stack.Screen
            name = {"Product"}
            component= {Product}
            options = {
                {
                    headerShown: false,
                }
            }
        />
        <Stack.Screen
            name = {"Evaluation"}
            component= {EvaluationScreen}
            options = {
                {
                    headerShown: false,
                }
            }
        />
         <Stack.Screen
            name = {"LogIn"}
            component= {LogInScreen}

            options = {
                {
                    headerShown: false,
                
                }
            }
        />
         <Stack.Screen
            name = {"NotiMain"}
            component= {NotiMain}

            options = {
                {
                    headerShown: false,
                
                }
            }
        />
        <Stack.Screen
            name = {"User"}
            component= {MainUserScreen}

            options = {
                {
                    headerShown: false,
                
                }
            }
        />
          <Stack.Screen
            name = {"SignIn"}
            component = {SignInScreen}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"EditInfo"}
            component = {EditInfoScreen}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"LikedProduct"}
            component = {LikedProduct}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"RecentlyView"}
            component = {RecentlyView}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"BuyAgain"}
            component = {BuyAgain}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"RegisterSeller"}
            component = {RegisterSeller}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"Shop"}
            component = {ShopScreen}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"resultShop"}
            component = {ResultShop}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"EditName"}
            component = {EditName}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"EditPhoneNumber"}
            component = {EditPhoneNumber}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"EditAddress"}
            component = {EditAddress}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"EditPassword"}
            component = {EditPassword}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"Review"}
            component = {ProductReview}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"ProductManager"}
            component = {ProductManager}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"EditProductInfo"}
            component = {EditProductInfo}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"orderManager"}
            component = {OrderManager}
            options= {
                {
                    headerShown: false
                }
            }
        />
          <Stack.Screen
            name = {"MyReview"}
            component = {MyReview}
            options= {
                {
                    headerShown: false
                }
            }
        />
         <Stack.Screen
            name = {"ConfirmBuy"}
            component = {ConfirmBuyProducts}
            options= {
                {
                    headerShown: false
                }
            }
        />
    </Stack.Navigator>
  )
}