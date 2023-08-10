import React from 'react';
import whiteCheckIcon from 'src/assets/images/white-check-icon.svg';
import wrongIcon from 'src/assets/images/white-wrong-icon.svg';

const PricingFilledCard = ({ plan, price, data }) => {
  return (
    <div className="col flex flex-col gap-10 rounded-3xl bg-primary-100 p-6 xl:gap-12 xl:p-8">
      <div>
        <p className="w-fit rounded-3xl bg-white-main px-6 py-3 text-xl text-black-100">{plan}</p>
        <h2 className="mb-3 mt-4 text-3xl font-semibold text-white-main xl:text-5xl">{price}</h2>
        <p className="text-base text-white-main">so&apos;m/oyiga</p>
      </div>
      <div className="flex flex-col gap-6 ">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {item.plus && (
              <span className="flex items-start gap-2 text-base text-white-main">
                <img src={whiteCheckIcon} alt="whiteCheckIcon" />
                {item.plus}
              </span>
            )}
            {item.minus && (
              <span className="flex items-start gap-2 text-base text-white-main">
                <img src={wrongIcon} alt="wrongIcon" />
                {item.minus}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <button className="w-full rounded-2xl bg-white-main py-4 text-base text-primary-100 hover:bg-neo-100">
        Ulanish
      </button>
    </div>
  );
};

export default PricingFilledCard;
