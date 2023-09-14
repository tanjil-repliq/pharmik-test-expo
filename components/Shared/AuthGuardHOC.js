import { useState } from "react";
import { AUTH_TOKEN_KEY } from "../../common/helpers/KeyChain";

export const setJWTokenAndRedirect = (token, redirector = () => {}) => {
    const onSuccess = (client) => {
      let token = client.defaults.headers.common["Authorization"];
      token = token.replace("Bearer ", "");
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      // TODO: Add logic for redirecting to different view
      // based on User type and Role / Access
      HTTPKit.isReady.resolve(client);
      redirector();
    };
    return APIKit.setClientToken(token)
      .then(onSuccess)
      .catch((error) => console.log(error));
  };


  function AuthGuardHOC(props){
    const [state, setState] = useState({
        isAuthenticated: false,
        hasCheckedLocalStorageToken: false,
      });
  }