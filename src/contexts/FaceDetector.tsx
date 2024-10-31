import React from "react";

interface FaceDetectorContextData {
  registerUser: (username: string) => void;
  loginUser: () => void;
  loadingRegister: boolean;
  username: string;
  setUsername: (username: string) => void;
  role: string;
  setRole: (role: string) => void;
}

export const FaceDetectorContext = React.createContext<FaceDetectorContextData>(
  {} as FaceDetectorContextData
);

export const FaceDetectorProvider = ({ children }) => {
  const [loadingRegister, setLoadingRegister] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [role, setRole] = React.useState<string>('');

  return (
    <FaceDetectorContext.Provider
      value={{
        loadingRegister,
        username,
        setUsername,
        role,
        setRole,
      }}
    >
      {children}
    </FaceDetectorContext.Provider>
  );
};