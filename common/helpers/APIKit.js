import HTTPKit from "./HTTPKit";
const authed = HTTPKit.isReady.promise;

const APIKit = {
  setClientToken: HTTPKit.setClientToken,
  customer: {
    auth: {
      login: (phone, password) => {
        const url = "auth/token";
        const payload = {
          phone,
          password,
        };
        return HTTPKit.post(url, payload);
      },
    },
  },
};
export default APIKit;