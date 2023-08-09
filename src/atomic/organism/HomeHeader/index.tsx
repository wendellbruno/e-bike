import React from 'react';
import { View } from 'react-native';
import { Header, MainBanner } from '../../molecules';
import { CategoryList } from '../CategoryList';

// import { Container } from './styles';

export const HomeHeader: React.FC = () => {
  return (
    <>
    <Header title="Choose Your Bike"/>
    <MainBanner/>
    <CategoryList />
    </>
  )
}
