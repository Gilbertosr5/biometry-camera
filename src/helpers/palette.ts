import { registerCallableModule } from "react-native";

export const palette = {
  white: {
    hex: '#fff',
    rgba: (opacity: number): string => `rgba(255,255,255,${opacity})`,
  },
  black: {
    hex: '#000',
    rgba: (opacity: number): string => `rgba(0,0,0,${opacity})`,
  },
  dark: {
    hex: '#2A2B2A',
    rgba: (opacity: number): string => `rgba(42,43,42,${opacity})`,
  },
  primary: {
    hex: '#1EA896',
    rgba: (opacity: number): string => `rgba(30,168,150,${opacity})`,
  },
  secondary: {
    hex: '#F15025',
    rgba: (opacity: number): string => `rgba(241,80,37,${opacity})`,
  },
  light: {
    hex: '#E6E8E6',
    rgba: (opacity: number): string => `rgba(230,232,230,${opacity})`, 
  },
  success: {
    hex: '#22bb33',
    rgba: (opacity: number): string => `rgba(34,187,51,${opacity})`,
  },
  danger: {
    hex: '#bb2124',
    rgba: (opacity: number): string => `rgba(187,33,36,${opacity})`,
  },
  warning: {
    hex: '#f0ad4e',
    rgba: (opacity: number): string => `rgba(240,173,78,${opacity})`,
  },
  info: {
    hex: '#5bc0de',
    rgba: (opacity: number): string => `rgba(91,192,222,${opacity})`, 
  },
}