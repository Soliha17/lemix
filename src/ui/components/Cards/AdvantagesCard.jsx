const AdvantagesCard = ({ title, text, img }) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-neo-75 p-6 lg:p-12">
      {img && (
        <div>
          <img src={img} alt="img" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-black-100 sm:text-3xl lg:text-4xl">{title}</h3>
      <p className="text-base leading-6 text-black-75">{text}</p>
    </div>
  );
};

export default AdvantagesCard;
