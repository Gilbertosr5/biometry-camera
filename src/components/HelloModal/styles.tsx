import styled from "styled-components/native";
import { palette } from "../../helpers";

export const Modal = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View `
  background-color: ${palette.primary.hex};
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${palette.white.hex};
  font-size: 28px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Body = styled.View`
  padding: 10px;
  align-items: center;
`;

export const ButtonArea = styled.View`
  /* border: 1px solid ${palette.danger.hex}; */
  padding: 15px;
  background-color: ${palette.light.hex};
  border-radius: 15px;
  elevation: 5;
  margin-top: 10px;

  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const Text = styled.Text`
  color: ${palette.light.hex};
  font-size: 18px;
  font-weight: bold;
`;

export const DarkText = styled.Text`
  color: ${palette.dark.hex};
  font-size: 15px;
  margin: 15px 0;
  font-weight: 300;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${palette.primary.hex};
  padding: 10px 15px;
  border-radius: 15px;
  elevation: 1;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${palette.light.hex};
  font-size: 18px;
  font-weight: bold;
`;