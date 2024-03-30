import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image } from "react-native";
import React, { useEffect } from "react";
import {Slot, useSegments, useRouter} from "expo-router";
import "../global.css";
import { AuthContextProvider, useAuth }  from '../context/authContext';

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();


    useEffect(() => {
        //CHECK IF USER IS AUTHENTICATED or NOT
        if(typeof isAuthenticated=='undefined') return;
        const inApp = segments[0]=='(app)';
        if(isAuthenticated && !inApp) {
         //REDIRECT TO home
         router.replace('home');
             
        }else if(isAuthenticated==false) {
         //REDIRECT TO signIn
         router.replace('signIn');
               
        }
    },  [isAuthenticated])
         

    return <Slot/>
}

export default function RootLayout (){
    return (
        <AuthContextProvider>
            <MainLayout/>
        </AuthContextProvider>
    )
}