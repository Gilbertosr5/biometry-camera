import styled from 'styled-components/native';
import { palette } from '../../helpers/index';

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.dark.hex};
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${palette.primary.hex};
  padding: 20px;
  width: 100%;
  margin-top: 25px;
`;

export const Title = styled.Text`
  color: ${palette.light.hex};
  font-size: 20px;
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* border: 1px solid ${palette.light.hex}; */
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid ${palette.light.hex}; */
  padding: 10px 5px;

  position: relative;
`;

export const SignInBtn = styled.TouchableOpacity`
  background-color: ${palette.primary.hex};
  padding: 10px 30px;
  border-radius: 5px;
  justify-self: center;
`;

export const SignInBtnText = styled.Text`
  color: ${palette.white.hex};
  font-size: 18px;
  font-weight: bold;
`;

export const RegisterBtn = styled.TouchableOpacity`
  /* background-color: ${palette.primary.hex}; */
  padding: 2px 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${palette.primary.hex};
  border-radius: 5px;
  position: absolute;
  left: 10px;
`;

export const RegisterBtnText = styled.Text`
  color: ${palette.white.hex};
  font-weight: 300;
  font-size: 10px;
`;

// Camera container
export const CameraContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${palette.dark.hex};
  position: relative;
`;