import { Box, Image } from "native-base";
import React from "react";
import { View } from "react-native";

type ImagePreviewProprs = {
    showDescription: boolean;
    image: string;
    alt: string;
};

export const ImagePreview: React.FC<ImagePreviewProprs> = ({
    showDescription = false,
    image,
    alt
}: ImagePreviewProprs) => {
    return (
        <Box
            width={"100%"}
            height={!showDescription ? "280" : "200"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Image
                src={image}
                width={"350px"}
                height={"250px"}
                alt={alt}
                resizeMode="contain"
                flex={"1"}
            />
        </Box>
    );
};
