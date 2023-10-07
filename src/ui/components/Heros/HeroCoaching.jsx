import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CoachingSelect from '../atoms/CoachingSelect';

import Img1 from 'src/assets/images/img1.svg';
import Img2 from 'src/assets/images/img2.svg';
import Img3 from 'src/assets/images/img3.svg';
import Img4 from 'src/assets/images/img4.svg';
import Img5 from 'src/assets/images/img5.svg';

const HeroCoaching = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero-coaching mt-6 flex flex-col items-center gap-10 rounded-3xl bg-violet-main bg-no-repeat p-6 md:mt-10 md:flex-row md:p-14 lg:mt-11 xl:p-20">
      <div className="info-col__hero-home flex w-3/5 flex-col gap-12 sm:gap-14">
        <div className="title-group__hero-home">
          <h1 className="whitespace-pre-line text-4xl font-semibold text-white-main lg:text-6xl">
            Ta’lim kasblarini <br /> o’rgatamiz
          </h1>
          <p className="p1 mt-5 font-light text-white-main">
            O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
            tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
            materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi.
          </p>
        </div>
        <div>
          <div className="img-group__hero-coaching">
            <img src={Img1} alt="Avatar" />
            <img src={Img2} alt="Avatar" />
            <img src={Img3} alt="Avatar" />
            <img src={Img4} alt="Avatar" />
            <img src={Img5} alt="Avatar" />
          </div>
          <p className="p1 mt-2 whitespace-pre-line leading-6 text-white-main">
            Biz bilan ko&apos;pchilik birga o&apos;smoqda <br /> siz ham bizga qo&apos;shiling
          </p>
        </div>
      </div>
      <div className="rounded-3xl bg-white-main p-6 lg:p-8">
        <h3 className="mb-6 text-3xl text-violet-main">Keling sinab ko’ring</h3>
        <p className="mb-8 text-base text-violet-main">
          Ma’lumotlaringizni qoldiring mutaxasislarimiz siz bilan tez orada bog’lanishadi
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="form__contact-card form__coaching-card">
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
            <CoachingSelect />
          </div>

          <button onClick={handleSubmit} className="btn__hero-coaching">
            {t('send')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroCoaching;
