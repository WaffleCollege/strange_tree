import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const GitInfoContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function useGitInfoContext() {
  return useContext(GitInfoContext);
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [owner, setOwner] = useState(localStorage.getItem("owner"));
  const [token, setToken] = useState(null);
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

  const value = {
    isAuth,
    setIsAuth,
    owner,
    setOwner,
    token,
    setToken,
    avatar,
    setAvatar,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function GitInfoProvider({ children }) {
  const [repoNames, setRepoNames] = useState([]);
  const [commits, setCommits] = useState(0);

  const value = {
    repoNames,
    setRepoNames,
    commits,
    setCommits,
  };

  return (
    <GitInfoContext.Provider value={value}>{children}</GitInfoContext.Provider>
  );
}
