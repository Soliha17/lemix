import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import dashboardImg from 'src/assets/images/contact-dashboard.png';
import done from 'src/assets/images/done-icon__contact.svg';
import goodFilled from 'src/assets/images/good-filled__contact.svg';

const ContactCard = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      id="contact"
      className="contact-card mt-16 flex flex-col items-center gap-6 rounded-3xl bg-primary-100 p-6 sm:p-9 md:mt-24 md:gap-12 lg:mt-20 lg:flex-row xl:gap-20 xl:p-16 xl:pt-8"
    >
      <div className="relative ml-0 flex flex-col items-start lg:ml-8">
        <div className="circle__contact-card z-10 -mb-16 -mr-7 self-end">
          <img src={done} alt="done" width={63} height={63} />
        </div>
        <p className="p__contact-card p__contact-card--top whitespace-pre-line rounded-2xl p-2 text-base text-white-main md:p-4">
          {t('contactCardTitle')}
        </p>
        <img src={dashboardImg} alt="dashboardImg" width={499} height={358} />
        <p className="p__contact-card p__contact-card--bottom rounded-2xl p-2 text-base text-white-main md:p-4">
          {t('contactCardSubTitle')}
        </p>
        <div className="circle__contact-card z-10 -ml-7 -mt-20">
          <img src={goodFilled} alt="goodFilled" width={63} height={63} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="whitespace-pre-line text-base text-white-main">{t('contactCardText')}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form__contact-card">
          <div>
            <input
              name="firstName"
              type="text"
              className="w-full"
              placeholder={t('yourName')}
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs font-bold text-red-600">
                {t('name')} {t('enterRequired')}!
              </p>
            )}
          </div>

          <div>
            <input
              name="phoneNumber"
              type="number"
              className="w-full"
              placeholder="+998 00 000 00 00"
              {...register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs font-bold text-red-600">
                {t('number')} {t('enterRequired')}!
              </p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              className="w-full"
              placeholder={t('yourEmail')}
              {...register('email', { required: false, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="mt-1 text-xs font-bold text-red-600">
                {t('email')} {t('enterRequired')}!
              </p>
            )}
          </div>

          <div>
            <input
              name="centerName"
              type="text"
              className="w-full"
              placeholder={t('centerName')}
              {...register('centerName', { required: false })}
            />
            {errors.centerName && (
              <p className="mt-1 text-xs font-bold text-red-600">
                {t('centerName')} {t('enterRequired')}!
              </p>
            )}
          </div>

          <button onClick={handleSubmit}>{t('send')}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
