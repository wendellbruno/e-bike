import { Box } from "native-base";
import React from "react";
import {DetailBackground, MainBanner} from '../../atomic';

export const Home: React.FC = () => {
  return (
  <Box flex="1" padding="20px" pt="-10px" position="relative" >
    <DetailBackground />
    <MainBanner />
  </Box>
  );
};
