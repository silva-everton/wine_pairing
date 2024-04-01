import { View, Text, TextInput, Button, Link, Image, TouchableOpacity, StyleSheet, Pressable, Alert, ImageBackground} from "react-native";
import React, {useRef, useState} from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";


export default function SignIn(){     
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleLogin = async ()=> {
        if(!emailRef.current || !passwordRef.current){
            Alert.alert('Sign In', "Please fill all the fields");
            return;
        }
       
        setLoading(true);
        const response = await login(emailRef.current, passwordRef.current);
        setLoading(false);
        console.log('sign in response :', response);
        if(!response.success){
            //Alert.alert('Sign In', response.msg);
        }   
        
    }
    
    
    return (
        <ImageBackground source={require('../assets/winery1.png')} style={styles.image}>
        <CustomKeyboardView>
            <StatusBar style="dark" />       
            <View style={{paddingTop: hp(8), paddingHorizontal: wp(5)}} className="flex-1 gap 12">
                {/* Sign In */}
                <View style={{ marginBottom: 60 }} className="items-center">
                    <Image style={{height: hp(25), width: wp('50%'), height: hp('20%')}} resizeMode='contain' source={require('../assets/logo.png')} />
                </View>

                <View className="gap-10">
                    <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800"> Sign In</Text>
                    {/* inputs */}
                    <View className="gap-4">
                        <View style ={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                            <Octicons name="mail" size={hp(2.7)} color="gray" />
                            <TextInput 
                                onChangeText={value=> emailRef.current = value}
                                style={{fontSize: hp(2)}} 
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder='Email address'
                                placeholderTextColor={'gray'}
                                
                            />
                        </View>
                        <View className="gap-3">
                            <View style ={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                                <Octicons name="lock" size={hp(2.7)} color="gray" />
                                <TextInput 
                                onChangeText={value=> passwordRef.current = value}
                                    style={{fontSize: hp(2)}} 
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    placeholderTextColor={'gray'}
                                    
                                />
                            </View> 
                            <Text style={{fontSize: hp(2), color: 'white'}} className="font-semibold text-right text-neutral-500">Forgot password?</Text>

                        </View>    

                        {/* Submit button */}

                        <View>
                            {
                                loading?(
                                    <View className="flex-row justify-center">
                                        <Loading size={hp(12)}/>
                                    </View>

                                ):(
                                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                                        <Text style={styles.buttonText}>Sign In</Text>
                                    </TouchableOpacity>


                                )

                            }

                        </View>

                       

                        {/* Sign Up */}
                        <View className="flex-row justify-center">
                            <Text style={{fontSize: hp(2), color: 'white'}} className="text-neutral-500">Don't have an account? </Text>
                            <Pressable onPress={()=> router.push('signUp')}>                            
                                <Text style={{fontSize: hp(2), color: 'white'}} className="font-bold text-neutral-800"> Sign Up</Text>
                            </Pressable>
                         </View>       

                    </View>                                           
                                       
                </View>
            </View>
        </CustomKeyboardView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#6750a4',
        alignItems: 'center',
        height: 50,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
});