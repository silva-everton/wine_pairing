import { View, Text, TextInput, Button, Link, Image, TouchableOpacity, StyleSheet, Pressable, Alert, ImageBackground} from "react-native";
import React, {useRef, useState} from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from '../context/authContext';


export default function SignUp(){     
    const router = useRouter();
    const {register} = useAuth(); 
    const [loading, setLoading] = useState(false);

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("");
    const profileRef = useRef("");

    const handleRegister = async ()=> {
      if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
        Alert.alert('Sign Up', "Please fill all the fields");
        return;
      }

      setLoading(true);

      let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current);
      setLoading(false);

      console.log('got result : ', response);
      if (!response.success){
        Alert.alert('Sign Up', response.msg);
      }
    }
    
    
    return (
        <ImageBackground source={require('../assets/winery1.png')} style={styles.image}>
            <CustomKeyboardView>
            
                <StatusBar style="dark" />       
                <View style={{paddingTop: hp(7), paddingHorizontal: wp(5)}} className="flex-1 gap 12">
                    {/* Sign In */}
                    <View className="items-center">
                            <Image style={{height: hp(20), width: wp('50%'), height: hp('20%')}} resizeMode='contain' source={require('../assets/logo.png')} />
                    </View>

                    <View className="gap-10">
                        <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800"> Sign Up</Text>
                        {/* inputs */}
                        <View className="gap-4">
                            <View style ={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                                <Feather name="user" size={hp(2.7)} color="gray" />
                                <TextInput 
                                    onChangeText={value=> usernameRef.current = value}
                                    style={{fontSize: hp(2)}} 
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder='Username'
                                    placeholderTextColor={'gray'}
                                    
                                />
                            </View>
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

                            <View style ={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                                <Feather name="image" size={hp(2.7)} color="gray" />
                                <TextInput 
                                    onChangeText={value=> profileRef.current = value}
                                    style={{fontSize: hp(2)}} 
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder='Profile url'
                                    placeholderTextColor={'gray'}
                                    
                                />
                            </View>
                                

                            {/* Submit button */}

                            <View>
                                {
                                    loading?(
                                        <View className="flex-row justify-center">
                                            <Loading size={hp(12)}/>
                                        </View>

                                    ):(
                                        <TouchableOpacity onPress={handleRegister} style={styles.button}>
                                            <Text style={styles.buttonText}>Sign Up</Text>
                                        </TouchableOpacity>


                                    )

                                }

                            </View>

                        

                            {/* Sign Up */}
                            <View className="flex-row justify-center">
                                <Text style={{fontSize: hp(2), color: 'white'}} className="text-neutral-500">Already have an account? </Text>
                                <Pressable onPress={()=> router.push('signIn')}>                            
                                    <Text style={{fontSize: hp(2), color: 'white'}} className="font-bold text-neutral-800"> Sign In</Text>
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