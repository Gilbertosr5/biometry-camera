import React from "react";
import { View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons"

import * as S from "./styles";
import { palette } from "../../helpers";

const Home = ({navigation, route}) => {
  return (
    <S.Container>
      <S.Header>
        <S.Row justify="flex-start">
          <S.ImageContainer>
            <EvilIcons name="user" color={palette.dark.rgba(.7)} size={70} />
          </S.ImageContainer>
          <View>
            <S.ProfileName>Gilberto dos Santos Ribeiro</S.ProfileName>
            <S.Level>Nível 57</S.Level>
          </View>
        </S.Row>
      </S.Header>

      <S.Section>
        <S.SectionTitle>Section Title 1</S.SectionTitle>
        <S.Text>Lorem Ipson asdhadioasdjahdiausdahdkuashdiaudgaidjkahsduagduyahdbagsaduyagd</S.Text>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Section Title 2</S.SectionTitle>
        <S.SectionSubTitle>Section Subtitle</S.SectionSubTitle>
        <S.Text>Lorem Ipson asdhadioasdjahdiausdahdkuashdiaudgaidjkahsduagduyahdbagsaduyagd</S.Text>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Section Title 3</S.SectionTitle>
        <S.Text>Lorem Ipson asdhadioasdjahdiausdahdkuashdiaudgaidjkahsduagduyahdbagsaduyagd</S.Text>
      </S.Section>
    </S.Container>
  );
};

export default Home;