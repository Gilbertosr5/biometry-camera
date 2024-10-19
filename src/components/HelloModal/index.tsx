import React, {useState, useEffect} from "react";
import * as S from "./styles";

interface HelloModalProps{
  visible: boolean;
  setVisible: (visible: boolean)=>void;
  setIsLogin: (screen: boolean)=>void;
}

export const HelloModal = ({visible, setVisible, setIsLogin}: HelloModalProps)=>{

  const handleClose = (isLogin:boolean)=>{
    setIsLogin(isLogin);
    setTimeout(()=> setVisible(false), 500);
  }

  return(
    <S.Modal
      animationType="slide"
      visible={visible}
    >
      <S.ModalContainer>
        <S.Header>
          <S.Title>Olá, seja bem vindo!</S.Title>
        </S.Header>
        <S.Body>
          <S.Text>Vamos acessar?</S.Text>
          <S.ButtonArea>
            <S.Button onPress={()=> handleClose(false)}>
              <S.ButtonText>Cadastrar</S.ButtonText>
            </S.Button>
            <S.DarkText>Ou</S.DarkText>
            <S.Button onPress={()=> handleClose(true)}>
              <S.ButtonText>Logar</S.ButtonText>
            </S.Button>
          </S.ButtonArea>
        </S.Body>
      </S.ModalContainer>
    </S.Modal>
  )
}