import { useRoute } from "@react-navigation/native";
import { Box, Text, HStack, Image, Button, Icon } from "native-base";
import rectangle from "../../img/rectangle.png";
import React, { useEffect, useState } from "react";
import { api } from "../../service";
import { CardProps } from "../Home";
import { ButtonDetail, ImagePreview } from "../../atomic";

type RouterParams = {
    equimentId: string;
};

export const Detail: React.FC = () => {
    const route = useRoute();
    const { equimentId } = route.params as RouterParams;

    const [equipment, setEquipment] = useState({} as CardProps);

    useEffect(() => {
        async function getEquipmentById() {
            try {
                const { data } = await api.get(`equipments/${equimentId}`);
                setEquipment(data);
            } catch (erro) {
                console.log(erro);
            }
        }

        getEquipmentById();
    }, []);

    return (
        <>
            <Box
                flex="1"
                position="relative"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    source={rectangle}
                    alt="img detail"
                    position="absolute"
                    top="-5px"
                    right="0"
                    bottom="0"
                />
                <ImagePreview
                    showDescription={false}
                    image={equipment.image}
                    alt={equipment.title}
                />
            </Box>

            {/*    <Box 
            bg={'primary.100'} justifyContent={'center'} 
            padding={7} borderTopRadius={30} 
            shadow={5} height={'110px'}
            >
                <HStack w='100%' justifyContent={'space-between'}>
                    <ButtonDetail title='Description' />
                    <ButtonDetail title='Specfication' />
                </HStack>
            </Box> */}
            <Box bg={"primary.10"} borderTopRadius={30} shadow={5} h={460}>
                <Box pl={7} pr={7} pt={7}>
                    <HStack w="100%" justifyContent={"space-between"}>
                        <ButtonDetail title="Description" />
                        <ButtonDetail title="Specfication" />
                    </HStack>
                    <Box mt={30}>
                        <Text bold color={"white"} fontSize={17}>
                            {equipment.title}
                        </Text>
                        <Text bold color={"white"} opacity={0.6} mt={8}>
                            The LR01 uses the same design as the most iconic
                            bikes from PEUGEOT Cycles' 130-year history and
                            combines it with agile, dynamic performance that's
                            perfectly suited to navigating today's cities. As
                            well as a lugged steel frame and iconic PEUGEOT
                            black-and-white chequer design, this city bike also
                            features a 16-speed Shimano Claris drivetrain.
                        </Text>
                    </Box>
                </Box>
                    <HStack 
                        bg={'primary.200'}
                        borderTopRadius={30}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        shadow={5}
                        h={85}
                        w={'100%'}
                        mt={30}
                        p={7}
                    >
                     <Text bold color='ocean.200' fontSize={17}>{equipment.price}</Text>   
                        <Button 
                        w={149} h={43} 
                        justifyContent={'center'} alignItems={'center'} 
                        borderRadius={10} shadow={5}
                        bg='ocean.200'
                        _pressed={{bgColor: 'ocean.100'}} 
                        onPress={() => {}}
                        >
                            Add to Cart
                        </Button>
                     
                    </HStack>
            </Box>
        </>
    );
};
