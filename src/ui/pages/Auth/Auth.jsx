import authImg from 'src/assets/images/minh-pham-lB9ylP8e9Sg-unsplash.jpg';
import logo from 'src/assets/images/lemix-logo.png';
import Login from './Login';

const Auth = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-blue-500">
      <div className="w-1/2 bg-red-400">
        <div className="ml-24 mt-4 bg-blue-600">
          <img src={logo} alt="logo" />
        </div>
        <div className="mt-60 flex items-center justify-center">
          <Login />
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center bg-neo-100 p-6">
        <img className="h-full w-full" src={authImg} alt="auth" />
      </div>
    </div>
  );
};

export default Auth;
