import { useRoute } from "@react-navigation/native";
import { Box, Text, Image, } from "native-base";
import rectangle from '../../img/rectangle.png';
import React, {useEffect, useState} from "react";
import { SafeAreaView } from "react-native";
import { api } from "../../service";
import { CardProps } from "../Home";

type RouterParams = {
    equimentId: string;
}

export const Detail: React.FC = () => {

    const route = useRoute();
    const {equimentId} = route.params as RouterParams

    const [equipment, setEquipment] = useState({} as CardProps)

    useEffect(() =>{
        async function getEquipmentById() {
            try{
                const {data} = await api.get(`equipments/${equimentId}`)
                setEquipment(data)
            }catch(erro){
                console.log(erro)
            }
        }

        getEquipmentById();
    }, [])

    return (
            <Box 
            flex='1' 
            position='relative'
            justifyContent='center' 
            alignItems='center'
            >
                <Image 
                source={rectangle}
                alt="img detail"          
                position='absolute'
                top='-5px'  
                right='0'
                bottom='0'    
                />
            </Box>
    );
};
