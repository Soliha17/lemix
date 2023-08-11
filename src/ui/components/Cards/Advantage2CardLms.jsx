const Advantage2CardLms = ({ title, text, img }) => {
  return (
    <div className="advantage-second-card__lms mt-6 flex flex-col-reverse items-center gap-6 rounded-3xl bg-primary-12 p-6 md:mt-10 md:flex-row md:gap-10 md:p-8 xl:p-14">
      <img src={img} className="w-full md:w-1/2" alt="just card img" />
      <div>
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:mb-6 lg:text-4xl">{title}</h2>
        <p className="w-full text-sm lg:w-10/12 lg:text-base">{text}</p>
      </div>
    </div>
  );
};

export default Advantage2CardLms;
