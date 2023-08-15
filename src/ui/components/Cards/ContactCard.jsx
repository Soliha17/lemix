import dashboardImg from 'src/assets/images/contact-dashboard.png';
import done from 'src/assets/images/done-icon__contact.svg';
import goodFilled from 'src/assets/images/good-filled__contact.svg';

const ContactCard = () => {
  return (
    <div id="contact" className="contact-card mt-16 flex flex-col items-center gap-6 rounded-3xl bg-primary-100 p-6 sm:p-9 md:mt-24 md:gap-12 lg:mt-20 lg:flex-row xl:gap-20 xl:p-16 xl:pt-8">
      <div className="relative ml-0 flex flex-col items-start lg:ml-8">
        <div className="circle__contact-card z-10 -mb-16 -mr-7 self-end">
          <img src={done} alt="done" />
        </div>
        <p className="p__contact-card p__contact-card--top rounded-2xl p-2 text-base text-white-main md:p-4">
          O&apos;quv markazingizni <br /> raqamlarda ko&apos;ring
        </p>
        <img src={dashboardImg} alt="dashboardImg" />
        <p className="p__contact-card p__contact-card--bottom rounded-2xl p-2 text-base text-white-main md:p-4">
          Mijozlaringiz fikrlarini o&apos;rganing
        </p>
        <div className="circle__contact-card z-10 -ml-7 -mt-20">
          <img src={goodFilled} alt="goodFilled" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-base text-white-main">
            Ma&apos;lumotlaringizni qoldiring mutaxasislarimiz <br /> siz bilan tez orada
            bog&apos;lanishadi
          </p>
        </div>
        <div className="form__contact-card">
          <input type="text" placeholder="Ismingiz" />
          <input type="number" placeholder="+998 00 000 00 00" />
          <input type="text" placeholder="Markaz nomi" />
          <input type="number" placeholder="Telegram raqam" />
          <button>Yuborish</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
