import axios from "axios";
import { deferred } from "./Utilkit";
import { AUTH_TOKEN_KEY } from "./KeyChain";
import {AsyncStorage} from 'react-native';
import {EXPO_PUBLIC_BASE_URL} from '@env'



export let subdomain = "mirpur-pharma";

const allowURLOnce = [];
const defaultErrors = {
  NOT_AUTHENTICATED: new Error({
    error: "NOT_AUTHENTICATED",
    message: "Client is not authenticated!",
  }),
};

// TODO: Set baseURL via env variable or something
export let client = axios.create({
  baseURL: EXPO_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-DOMAIN": subdomain,
  },
});

const defer = new deferred();

let clientIsAuthenticated = false;

const setClientToken = (token) => {
  const promise = new Promise((resolve, reject) => {
    try {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      clientIsAuthenticated = true;
      isReady();
      console.info(`Setting JSONWebToken in client: ${token}`);
      resolve(client);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
};

const isReady = () => {
  function raiseNotAuthenticatedError() {
    console.log("Does not have token, rejecting promise...");
    throw defaultErrors.NOT_AUTHENTICATED;
  }

  try {
    if (clientIsAuthenticated) {
      console.log("Client is already authenticated, resolving client...");
      defer.resolve(client);
    } else {
      const token = AsyncStorage.getItem(AUTH_TOKEN_KEY);
      if (token) {
        setClientToken(token)
          .then(() => {
            console.log("Received token, resolving client...");
            defer.resolve(client);
          })
          .catch(() => {
            raiseNotAuthenticatedError();
          });
      } else {
        raiseNotAuthenticatedError();
      }
    }
  } catch (error) {
    defer.reject(error);
  }
};

const HTTPKit = {
  setClientToken,
  isReady: defer,
  get: (url, options) => {
    return client.get(url, options);
  },
  post: (url, payload) => {
    return client.post(url, payload);
  },
  put: (url, payload) => {
    return client.put(url, payload);
  },
  patch: (url, payload) => {
    return client.patch(url, payload);
  },
  delete: (url) => {
    return client.delete(url);
  },
};

export default HTTPKit;
