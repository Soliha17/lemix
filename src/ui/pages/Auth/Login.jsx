import agreeIcon from 'src/assets/images/agree-icon.svg';

const Login = () => {
  return (
    <div className="flex flex-col gap-12">
      <h3 className="text-4xl font-semibold text-black-100">Kirish va registratsiya</h3>
      <div>
        
      </div>
      <p className="font-base flex gap-2 text-black-75">
        <img src={agreeIcon} alt="agree icon" />
        Barcha ma&apos;lumotlaringiz himoyalangan
      </p>
    </div>
  );
};

export default Login;
