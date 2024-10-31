import React from "react";
import { View, FlatList } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons"

import * as S from "./styles";
import { palette } from "../../helpers";
import { useRoute } from "@react-navigation/native";
import { FaceDetectorContext } from "../../contexts/FaceDetector";

const Home = () => {
  const { username, role } = React.useContext(FaceDetectorContext);

  const randomContent = [
    {
      id: 1,
      title:"Desmatamento na Amazônia",
      content: "A Amazônia perde milhões de árvores todos os anos, Desmatamento destrói biodiversidade e ecossistemas inteiros, Poluição do ar aumenta com queimadas descontroladas, Luta global para proteger a maior floresta tropical do mundo.",
      level: 'normal',
    },
    {
      id: 2,
      title:"Poluição dos Oceanos",
      content: "Toneladas de plástico invadem nossos mares, Animais marinhos sofrem e muitas vezes morrem, Resíduos tóxicos contaminam a vida aquática, Soluções urgentes são necessárias para salvar os oceanos.",
      level: 'minister',
    },
    {
      id: 3,
      title:"Aquecimento Global",
      content: "Temperaturas médias sobem de forma alarmante, Geleiras derretem, níveis do mar aumentam, Eventos climáticos extremos se tornam mais frequentes, Todos nós temos um papel na mitigação do aquecimento global.",
      level: 'director',
    },
    {
      id: 4,
      title:"Extinção de Espécies",
      content: "Milhares de espécies estão desaparecendo a um ritmo alarmante, Perda de habitat e mudanças climáticas são culpados principais, Cada extinção desequilibra nossos ecossistemas, Conservação é vital para manter a biodiversidade.",
      level: 'normal',
    },
    {
      id: 5,
      title:"Desastres Naturais",
      content: "Incêndios florestais, inundações e furacões aumentam, Alterações climáticas intensificam desastres naturais, Comunidades vulneráveis sofrem as maiores perdas, Mitigação e adaptação são essenciais para sobrevivência.",
      level: 'minister',
    },
    {
      id: 6,
      title:"Poluição do Ar",
      content: "Qualidade do ar decai em cidades ao redor do mundo, Emissões de fábricas e veículos são grandes vilões, Doenças respiratórias se proliferam com a poluição, Descarbonização e energia limpa são caminhos necessários.",
      level: 'director',
    },
    {
      id: 7,
      title:"Esgotamento dos Recursos Naturais",
      content: "Exploração excessiva esgota recursos cruciais, Água, minerais e combustíveis fósseis em risco, Sustentabilidade e reciclagem são imperativos globais, Preservar o planeta é responsabilidade de todos.",
      level: 'minister',
    },
    {
      id: 8,
      title:"Desafios da Energia Renovável",
      content: "Energia eólica e solar são promessas para o futuro, Investimentos ainda precisam crescer exponencialmente, Transição energética enfrenta barreiras econômicas e políticas, Renováveis são chave para um amanhã sustentável.",
      level: 'normal',
    },
  ]

  const renderItem = ({item})=>{
    if(
      (role === 'normal' && item.level === 'normal') ||
      (role === 'director') ||
      (role === 'minister' && (item.level === 'minister' || item.level === 'normal'))
    ){
      return(
        <S.Section key={item.id}>
          <S.SectionTitle>
            {item.title}  
            <S.Level style={{fontSize:12}}> nível {item.level}</S.Level>
          </S.SectionTitle>
          <S.Text>{item.content}</S.Text>
        </S.Section>
      )
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.Row justify="flex-start">
          <S.ImageContainer>
            <EvilIcons name="user" color={palette.dark.rgba(.7)} size={70} />
          </S.ImageContainer>
          <View>
            <S.ProfileName>{username}</S.ProfileName>
            <S.Level>Nível {role}</S.Level>
          </View>
        </S.Row>
      </S.Header>

      <FlatList
        renderItem={renderItem}
        data={randomContent}
        keyExtractor={item => item.id}
      />
    </S.Container>
  );
};

export default Home;