import url from '../config';

const facebookLogin = async () => {
  const result = await fetch(`${url}/login/facebook`);
  return result.json();
};

export default facebookLogin;
