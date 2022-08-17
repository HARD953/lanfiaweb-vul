
const userItem = "userDonnateurIformationsLanfiatech"

const getUserToken = () => {
  const tokenString = localStorage.getItem(userItem);
  const userToken = JSON.parse(tokenString);
  return userToken?.access
};

export default function authHeader() {
    let token = getUserToken()
    if (token) {
      return  {"Authorization" : `Bearer ${token}`};
    } else {
      return {};
    }
  }

