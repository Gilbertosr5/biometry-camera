import React, {useEffect, useState, useRef} from "react";
import { View, Text, Alert, ActivityIndicator, Linking } from "react-native";
import { Camera, CameraType } from "expo-camera/legacy";
import { HelloModal } from "../../components/HelloModal";
import axios from "axios";

import * as S from "./styles";
import { RegisterModal } from "../../components/RegisterModal";
import { FaceDetectorContext } from "../../contexts/FaceDetector";
import Toast from "react-native-toast-message";

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
  const { setUsername } = React.useContext(FaceDetectorContext);
  const url = 'http://192.168.15.7:8080';

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

    setLoadingLogin(true);
    try {
      console.log("Tentando fazer a requisição Login")
      const response = await axios.post(`${url}/authenticate`, body, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Response:", response.data);
      setUsername(response.data.username);
      cleanPicture();
      Toast.show({
        type: 'success',
        text1: 'Bem vindo, ' + response.data.username+"!",
        text2: 'Logado com sucesso.',
      })
      navigation.navigate('Home', {username: response.data.username});
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
        text2: 'Tente novamente!',
      })
      console.log(error.response ? error.response.data.detail : error.message);
    }finally{
      setLoadingLogin(false);
    }
  };

  async function registerUser(username: string, level: string){
    const body = new FormData();
    body.append('file', {
      uri: pictureUri,
      name: username + '_face.jpg',
      type: 'image/jpeg'
    });
    setLoadingRegister(true);
    try {
      console.log("Tentando fazer a requisição registrar")
      const response = await axios.post(`${url}/register/${username}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response.data);
      setUsername(response.data.username);
      navigation.navigate('Home', {username: response.data.username});
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer cadastro',
        text2: 'Tente novamente!',
      })
      console.log('Error:', error.response ? error.response.data : error.message);
    }finally{
      setLoadingRegister(false);
    }
  }

  const takePicture = async()=>{
    try{
      console.log("Tirando foto ------")
      const picture = await cameraRef.current.takePictureAsync({quality: 0.5});
      console.log("Saiu do picture")
      // await cameraRef.current.pausePreview();
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
        />
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
        <S.SignInBtn onPress={takePicture}>
          {loadingLogin? <ActivityIndicator color={"white"} size={20} />:<S.SignInBtnText>Acessar</S.SignInBtnText>}
        </S.SignInBtn>
        <S.RegisterBtn onPress={() => setIsLogin(false)}>
          <S.RegisterBtnText>Registrar Biometria</S.RegisterBtnText>
        </S.RegisterBtn>
      </S.Footer>
      ) : (
        <S.Footer>
          <S.SignInBtn onPress={takePicture}>
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