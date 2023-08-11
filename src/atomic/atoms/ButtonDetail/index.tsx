import { Button } from "native-base";
import React from "react";
import { View } from "react-native";

// import { Container } from './styles';
type ButtonDetailProprs = {
    title: string;
}

export const ButtonDetail: React.FC<ButtonDetailProprs> = ({title}: ButtonDetailProprs) => {
    return (
        <Button
            _pressed={{ bgColor: "primary.50" }}
            shadow={1}
            borderRadius={10}
            bg={"primary.10"}
            w={149}
            h={42}
        >
           {title}
        </Button>
    );
};
