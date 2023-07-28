const FeedBackCard = ({ img, fullName, position, text, bgColor }) => {
  return (
    <div className={`rounded-3xl ${bgColor} p-6 md:p-8`}>
      <div className="flex gap-4">
        <img src={img} alt="person who gave feedback" />
        <div>
          <h6 className="text-black-0 mb-3 text-xl font-semibold">{fullName}</h6>
          <p className="text-black-0 text-base">{position}</p>
        </div>
      </div>
      <p className="mt-6 text-black-75">{text}</p>
    </div>
  );
};

export default FeedBackCard;
