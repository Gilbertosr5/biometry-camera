import styled from "styled-components/native";
import { palette } from "../../helpers";

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.light.hex};
  padding: 15px 5px;
`;

interface RowProps{
  justify: "space-between" | "center" | "flex-start" | "flex-end";
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.justify? props.justify : "space-between"};
`;

export const Text = styled.Text`
  color: ${palette.dark.hex};
  font-weight: 300;
`;

export const Header = styled.View`
  /* border: 1px solid red; */
  margin-bottom: 20px;
`;

export const ProfileName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${palette.primary.hex};
`;

export const Level = styled.Text`
  color: ${palette.dark.rgba(.7)};
  font-weight: 500;
  font-style: italic;
`;

export const ImageContainer = styled.View`
  /* background-color: #000; */
  border-radius: 500px;
  height: 60px;
  width: 60px;
  margin-right: 10px;

  justify-content: center;
  align-items: center;
`;

export const Section = styled.View`
  /* border: 1px solid blue; */
  border-radius: 10px;
  background-color: ${palette.white.hex};
  padding: 10px 15px;
  margin: 5px 0;
  elevation: 1;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${palette.primary.hex};
  border-bottom-width: .5px;
  padding: 0 5px;
  border-color: ${palette.primary.hex};
  margin-bottom: 5px;
`;

export const SectionSubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${palette.dark.rgba(.7)};
`;