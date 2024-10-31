import styled from "styled-components/native";
import { palette } from "../../helpers";

export const Modal = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View `
  background-color: ${palette.light.hex};
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${palette.primary.hex};
  font-size: 28px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Body = styled.View`
  padding: 10px;
  align-items: center;
`;

export const ButtonArea = styled.View`
  /* border: 1px solid ${palette.danger.hex}; */
  padding: 15px;
  background-color: ${palette.primary.hex};
  border-radius: 15px;
  elevation: 5;
  margin-top: 10px;

  align-items: center;
  justify-content: space-between;
  width: 320px;
`;

export const Text = styled.Text`
  color: ${palette.dark.hex};
  font-size: 18px;
`;

export const Bold = styled.Text`
  color: ${palette.dark.hex};
  font-size: 18px;
  font-weight: bold;
`;

export const LightText = styled.Text`
  color: ${palette.light.hex};
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  text-align: left;
  padding: 0 5px;
`;

interface ButtonProps{
  disabled: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props=> props.disabled? palette.light.rgba(.8):palette.light.hex};
  padding: 10px 15px;
  border-radius: 15px;
  elevation: 1;
  width: 160px;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${props=> props.disabled? palette.primary.rgba(.8) : palette.primary.hex};
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
`;

interface InputProps{
  isFocused: boolean;
}

export const Input = styled.TextInput<InputProps>`
  background-color: ${palette.light.hex};
  padding: 10px 15px;
  border-radius: 15px;
  width: 300px;
  margin-bottom: 20px;
  elevation: ${props=> props.isFocused ? 5 : 1};
  ${
    props=> props.isFocused && `
      border: 1.5px solid ${palette.dark.hex};
  `}
`;

export const BackButton = styled.TouchableOpacity``;

export const BackButtonText = styled.Text`
  color: ${palette.primary.hex};
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;
