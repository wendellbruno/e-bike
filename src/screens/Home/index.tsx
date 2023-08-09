import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import {DetailBackground, MainBanner, Card} from '../../atomic';
import { api } from "../../service";
import { FlatList } from "react-native";

export type CardProps = {
    title: string;
    price: number;
    model: string;
    image: string;
    id: string;

}

export const Home: React.FC = () => {

    const [equipments, setEquipments] = useState<CardProps[]>([]);

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


  return (
  <Box flex="1" padding="20px" pt="-10px" position="relative" >
    <DetailBackground />
    <FlatList
    data={equipments}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    ListHeaderComponent={() => <MainBanner/> }
    keyExtractor={item => item.id}
    renderItem={ ({item}) => <Card key={item.id} 
    image={item.image} 
    id={item.id} 
    model={item.model} 
    price={item.price}
    title={item.title} />}
    />
  </Box>
  );
};
