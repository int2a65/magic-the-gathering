import React from 'react';
import { CardContainer, Info, CardPanel, Image, Name, Artist, SetName, Type } from './CardStyles';

const Card = ({
  data: { imageUrl, name, artist, setName, type }
}) => {
  return (
    <CardContainer>
      <CardPanel>
        <Image src={imageUrl}></Image>
      </CardPanel>
      <Info>
        <Name>{name}</Name>
        <Artist>{`By ${artist}`}</Artist>
        <SetName>{setName}</SetName>
        <Type>{type}</Type>
      </Info>
    </CardContainer>
  )
};
export default Card;