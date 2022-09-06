import React, { useContext } from "react";
import NextLink from 'next/link';
import { Image, Text, Button, Flex, Heading } from "@chakra-ui/react";
import Card from "../Card/Card";
import MoonLoader from 'react-spinners/MoonLoader';
import { MainContext } from "../../context/maincontext";

const NoData = () => {
  return (
    <Flex justifyContent={'center'} w={'100%'} direction={'column'} alignItems={'center'}>
      <Image alt={'No results'} objectFit={'contain'} src={'./ft_icon.svg'}/>
      <Heading mb={5}>No hemos encontrado animales</Heading>
      <Text mb={5} fontSize={{ base: 'md', lg: 'lg' }} color={'gray5'}>
          ¡Modifica la búsqueda para poder verlos aquí!
      </Text>
      <NextLink href="/">
          <Button color={'white'} _active={{ bg: 'primarypastel' }} _hover={{ bg: 'primarylight' }} bg={'primary'}>Volver al inicio</Button>
      </NextLink>
    </Flex>
  );
}

const CardsContainer = () => {
  const { data, isLoading } = useContext(MainContext);
  
  return (
    <Flex p={5} mb={10} alignItems={'center'} justifyContent={'center'} h={'full'}>
      { isLoading ? <MoonLoader size={100} color="#578887" /> :
        <Flex h={'full'} w={'100%'} flexWrap={'wrap'} flexDirection={'row'}>
          {data.totalResults > 0 && data.results.map((p) => ( <Card key={p.id} {...p} /> ))}
          {data.totalResults === 0 && <NoData />}
        </Flex>
      }
    </Flex>
  );
};

export default CardsContainer;