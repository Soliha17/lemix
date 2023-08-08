const AllOneCard = ({ title, text }) => {
  return (
    <div className="all-one-card w-96 rounded-3xl bg-neo-100 p-8 md:p-12">
      <h4 className="text-xl font-semibold text-black-100 md:text-2xl">{title}</h4>
      <p className="text-base leading-6 text-black-75">{text}</p>
    </div>
  );
};

export default AllOneCard;
