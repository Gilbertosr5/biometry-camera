import React from "react";

interface FaceDetectorContextData {
  registerUser: (username: string) => void;
  loginUser: () => void;
  loadingRegister: boolean;
  username: string;
  setUsername: (username: string) => void;
}

export const FaceDetectorContext = React.createContext<FaceDetectorContextData>(
  {} as FaceDetectorContextData
);

export const FaceDetectorProvider = ({ children }) => {
  const [loadingRegister, setLoadingRegister] = React.useState(false);
  const [username, setUsername] = React.useState('');

  return (
    <FaceDetectorContext.Provider
      value={{
        loadingRegister,
        username,
        setUsername,
      }}
    >
      {children}
    </FaceDetectorContext.Provider>
  );
};