import React from 'react';
import blueCheckIcon from 'src/assets/images/blue-check-icon.svg';
import greenCheckIcon from 'src/assets/images/green-done.svg';
import wrongIcon from 'src/assets/images/wrong-icon-pricing.svg';

const PricingOutlinedCard = ({ plan, price, data, bgColor, borderColor }) => {
  return (
    <div
      className={`flex flex-col gap-10 rounded-3xl border ${borderColor} p-6 xl:gap-12`}
    >
      <div>
        <p
          className={`w-fit rounded-3xl ${
            bgColor === 'bg-primary-100' ? 'bg-primary-12' : bgColor
          } ${
            bgColor === 'bg-success-100' ? 'text-white-main' : 'text-black-0'
          } px-6 py-3 text-xl text-black-100`}
        >
          {plan}
        </p>
        <h2 className="mb-3 mt-4 text-3xl font-semibold text-black-0 xl:text-5xl">{price}</h2>
        <p className="text-base text-black-0">so&apos;m/oyiga</p>
      </div>
      <div className="flex flex-col gap-6 ">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {item.plus && (
              <span className="flex items-start gap-2 text-base text-black-75">
                {bgColor === 'bg-success-100' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {item.plus}
              </span>
            )}
            {item.minus && (
              <span className="flex items-start gap-2 text-base text-black-75">
                <img src={wrongIcon} alt="wrongIcon" />
                {item.minus}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <button
        className={`w-full rounded-2xl ${bgColor} py-4 text-base text-white-main ${
          bgColor === 'bg-success-100' ? 'hover:bg-success-75' : 'hover:bg-primary-75'
        }`}
      >
        Ulanish
      </button>
    </div>
  );
};

export default PricingOutlinedCard;
