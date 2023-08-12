const ForWhoCard = ({ card }) => {
  return (
    <div className="flex flex-col gap-16 rounded-3xl bg-success-12 p-6 md:p-8">
      <p className="text-xl leading-6 text-black-100 md:text-2xl">
        O’quvchilaringiz bilimlarini testlar bilan mustahkamlaymiz
      </p>
      <div className="relative">{card}</div>
    </div>
  );
};

export default ForWhoCard;
