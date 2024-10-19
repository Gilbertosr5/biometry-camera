import React, {useEffect, useState, useRef} from "react";
import { View, Text, Alert, ActivityIndicator, Linking } from "react-native";
import { Camera, CameraType } from "expo-camera/legacy";
import { HelloModal } from "../../components/HelloModal";
import axios, {a} from "axios";

import * as S from "./styles";
import { RegisterModal } from "../../components/RegisterModal";

const Login = ({ navigation })=>{
  const [isLogin, setIsLogin] = React.useState(true);
  const [loadingCamera, setLoadingCamera] = React.useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null)
  const [picture, setPicture] = React.useState(null);
  const [pictureUri, setPictureUri] = React.useState(null);
  const [helloVisible, setHelloVisible] = React.useState(true);
  const [registerVisible, setRegisterVisible] = React.useState(false);
  const [loadingRegister, setLoadingRegister] = React.useState(false);

  useEffect(()=>{
    if(!permission?.granted){
      requestPermission();
    }
  },[])

  const cleanPicture = ()=>{
    setPicture(null);
    setPictureUri(null);
  }

  const loginUser = async () => {
    const body = new FormData();
    body.append('file', {
      uri: pictureUri,
      name: 'photo.jpg',
      type: 'image/jpeg'
    });

    try {
      console.log("Tentando fazer a requisição Login")
      const response = await axios.post('http://192.168.15.7:8080/authenticate', body, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Response:", response.data);
      navigation.navigate('Home', {username: response.data.username});
    } catch (error) {
      console.log(error.response ? error.response.data.detail : error.message);
    }
  };

  async function registerUser(username: string){
    const body = new FormData();
    body.append('file', {
      uri: pictureUri,
      name: username + '_face.jpg',
      type: 'image/jpeg'
    });
    setLoadingRegister(true);
    try {
      console.log("Tentando fazer a requisição registrar")
      const response = await axios.post(`http://192.168.15.7:8080/register/${username}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response.data);
      navigation.navigate('Home', {username: response.data.username});
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }finally{
      setLoadingRegister(false);
    }
  }

  const takePicture = async()=>{
    try{
      setLoadingCamera(true);
      const picture = await cameraRef.current.takePictureAsync({quality: 0.5});
      await cameraRef.current.pausePreview();
      console.log("PICTURE: ", picture);
      setPicture(picture);
      setPictureUri(picture.uri);
      if(isLogin) {
        loginUser()
      }else{
        setRegisterVisible(true);
      };
    }catch(err){
      console.log("Erro tirar foto -->", err)
      throw err
    }finally{
      setLoadingCamera(false)
    }
  }

  const CameraComponent = ()=>{
    return(
      <S.CameraContainer>
        <Camera
          type={CameraType.front}
          style={{width: "100%", flex:1, justifyContent:"center", alignItems:"center"}}
          flashMode={Camera.Constants.FlashMode.off}
          ref={cameraRef}
        >
         {loadingCamera && <ActivityIndicator
            color={"white"}
            size={30}
          />}
        </Camera>
      </S.CameraContainer>
    )
  }
  return(
    <S.Container>
      <HelloModal 
        visible={helloVisible}
        setVisible={setHelloVisible}
        setIsLogin={setIsLogin}
      />
      <RegisterModal
        visible={registerVisible}
        setVisible={setRegisterVisible}
        request={registerUser}
        pictureUri={pictureUri}
        loading={loadingRegister}
      />
      <S.Header>
        {isLogin? <S.Title>Acessar conta</S.Title> : <S.Title>Cadastrar Biometria</S.Title>}
      </S.Header>
      <S.Body>
        {
          permission ? <CameraComponent />
          : (
            <S.SignInBtn onPress={()=> Linking.openSettings()}>
              <S.SignInBtnText>Habilitar camera</S.SignInBtnText>
            </S.SignInBtn>
          )
        }
      </S.Body>
      {isLogin? (
      <S.Footer>
        <S.SignInBtn onPress={()=> takePicture()}>
          <S.SignInBtnText>Acessar</S.SignInBtnText>
        </S.SignInBtn>
        <S.RegisterBtn onPress={() => setIsLogin(false)}>
          <S.RegisterBtnText>Registrar Biometria</S.RegisterBtnText>
        </S.RegisterBtn>
      </S.Footer>
      ) : (
        <S.Footer>
          <S.SignInBtn onPress={async()=> {
            await takePicture();
          }}>
            <S.SignInBtnText>Cadastrar</S.SignInBtnText>
          </S.SignInBtn>
          <S.RegisterBtn onPress={()=> setIsLogin(true)}>
            <S.RegisterBtnText>Fazer Login</S.RegisterBtnText>
          </S.RegisterBtn>
        </S.Footer>
      )}
    </S.Container>
  )
}

export default Login;