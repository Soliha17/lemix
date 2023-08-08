const LogoCard = ({ img }) => {
  return (
    <div className="flex items-center justify-center rounded-xl bg-white-main px-6 py-3">
      <img src={img} alt="logo of user" />
    </div>
  );
};

export default LogoCard;
