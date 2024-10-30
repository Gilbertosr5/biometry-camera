import React, {useState, useEffect} from "react";
import { Keyboard, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import * as S from "./styles";
import { palette } from "../../helpers";

interface RegisterModalProps{
  visible: boolean;
  setVisible: (visible: boolean)=>void;
  request: (username: string)=>void;
  pictureUri: string | null;
  loading: boolean;
}

export const RegisterModal = ({visible, setVisible, request, pictureUri, loading}: RegisterModalProps)=>{
  const [isFocused, setIsFocused] = useState(false);
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState<string>("");

  const handleClose = ()=>{
    setUsername("");
    setVisible(false);
  }

  return(
    <S.Modal
      animationType="slide"
      visible={visible}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.ModalContainer>
          <S.Header>
            <S.Title>Prestes à registrar!</S.Title>
            <S.Text>Antes, vamos saber qual é o seu nome.</S.Text>
          </S.Header>
          <S.Body>
            <S.Bold>Informe seu nome abaixo:</S.Bold>
            <S.ButtonArea>
              <S.LightText>Nome Completo:</S.LightText>
              <S.Input
                placeholder="Digite seu nome"
                placeholderTextColor={palette.dark.rgba(0.4)}
                onFocus={()=> setIsFocused(true)}
                onBlur={()=> setIsFocused(false)}
                isFocused={isFocused}
                value={username}
                onChangeText={(text)=> setUsername(text)}
              />
              <S.LightText>Nível (1 à 3):</S.LightText>
              <S.Input
                placeholder="Digite o número do nível"
                placeholderTextColor={palette.dark.rgba(0.4)}
                onFocus={()=> setIsFocused(true)}
                onBlur={()=> setIsFocused(false)}
                isFocused={isFocused}
                value={level}
                keyboardType="number-pad"
                onChangeText={(text)=> {
                  if((parseInt(text) > 3 || parseInt(text) < 1) || !parseInt(text)){
                    setLevel("");
                  }else{
                    setLevel(text);
                  }
                }}
              />
              <S.Button disabled={!pictureUri || (!username && username == "") || (!level && level == '')} onPress={()=> request(username, level)}>
                <S.ButtonText disabled={!pictureUri || (!username && username == "")}>
                  {loading? <ActivityIndicator color={palette.light.hex} size={15} /> :"Cadastrar"}
                </S.ButtonText>
              </S.Button>
            </S.ButtonArea>
            <S.BackButton onPress={()=> handleClose()}>
              <S.BackButtonText>Voltar</S.BackButtonText>
            </S.BackButton>
          </S.Body>
        </S.ModalContainer>
      </TouchableWithoutFeedback>
    </S.Modal>
  )
}