import React , { useEffect, useContext }from "react";
import {Text, View} from 'react-native';
import {Container, LoadIcon} from "./style";
/* import AsyncStorage from "@react-native-async-storage/async-storage"; */
import { useNavigation } from "@react-navigation/native";
import api from "../../services/ProductsService";




const Preload = () => {

    const navigation = useNavigation();

 

    return(
        <> 
            <Container>
                <Text>
                    Carregando...
                </Text>
                <LoadIcon size="large" color="#FFFFFF"/>
            </Container>
              
         </>
       
            
        
    )
}
export default Preload;