import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import {DetailBackground, Card, HomeHeader} from '../../atomic';
import { api } from "../../service";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export type CardProps = {
    title: string;
    price: number;
    model: string;
    image: string;
    id: string;

}

export const Home: React.FC = () => {

    const [equipments, setEquipments] = useState<CardProps[]>([]);

    const {navigate} = useNavigation()

    useEffect(() =>{

        async function getEquipments(){
            try{    
                const { data } = await api.get('equipments');
                setEquipments(data);
            }catch(erro){
                console.log(erro);
            }
        }
        getEquipments();
    },[])

    function handleRedirect(id: string){
        navigate('Detail', {
            equimentId: id,
        });
    }


  return (
  <Box flex="1" padding="20px" pt="-10px" position="relative" >
    <DetailBackground />
    <FlatList
    data={equipments}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    ListHeaderComponent={() => <HomeHeader/> }
    keyExtractor={item => item.id}
    renderItem={ ({item}) => <Card key={item.id} 
    onPress={() => {handleRedirect(item.id)}}
    image={item.image} 
    id={item.id} 
    model={item.model} 
    price={item.price}
    title={item.title} 
    />}
    />
  </Box>
  );
};
