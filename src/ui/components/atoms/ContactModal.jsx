import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import dashboardImg from 'src/assets/images/contact-dashboard.png';
import done from 'src/assets/images/done-icon__contact.svg';
import goodFilled from 'src/assets/images/good-filled__contact.svg';
import CloseIcon from '@mui/icons-material/Close';

const ContactModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOpen(false);
    console.log(data);
  };

  return (
    <>
      {open ? (
        <>
          <div
            onClick={() => setOpen(false)}
            className="video-modal-wrapper fixed inset-0 z-50 flex w-full items-center justify-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none"
          >
            <div className="relative mx-auto my-6 max-w-7xl">
              {/*content*/}
              <div className="bg-white relative flex w-full flex-col items-start gap-1 rounded-lg border-0 shadow-lg outline-none focus:outline-none">
                {/*body*/}
                <div
                  className="relative"
                  onClick={(e) => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                  }}
                >
                  <button
                    className="absolute right-3 top-3 self-end bg-transparent"
                    onClick={() => setOpen(!open)}
                  >
                    <CloseIcon fontSize="medium" />
                  </button>
                  <div className="contact-modal flex flex-col items-center gap-6 rounded-3xl bg-primary-25 p-6 sm:p-9 md:gap-12 lg:flex-row xl:gap-20 xl:p-16 xl:pt-8">
                    <div className="relative ml-0 mt-10 flex flex-col items-start md:mt-0 lg:ml-2">
                      <div className="circle__contact-card circle__contact-modal z-10 -mb-16 -mr-7 self-end">
                        <img src={done} alt="done" />
                      </div>
                      <p className="p__contact-card p__contact-card--top rounded-2xl p-2 text-base text-white-main md:p-4">
                        {t('contactCardTitle')}
                      </p>
                      <img src={dashboardImg} alt="dashboardImg" />
                      <p className="p__contact-card p__contact-card--bottom rounded-2xl p-2 text-base text-white-main md:p-4">
                        {t('contactCardSubTitle')}
                      </p>
                      <div className="circle__contact-card circle__contact-modal z-10 -ml-7 -mt-20">
                        <img src={goodFilled} alt="goodFilled" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-8">
                      <div>
                        <p className="whitespace-pre-line text-base text-black-100">
                          {t('contactCardText')}
                        </p>
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
                            <p className="mt-1 text-xs font-semibold text-red-600">
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
                            <p className="mt-1 text-xs font-semibold text-red-600">
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
                            <p className="mt-1 text-xs font-semibold text-red-600">
                              {t('email')} {t('enterRequired')}!
                            </p>
                          )}
                        </div>

                        <div>
                          <input
                            name="centerName"
                            type="text"
                            className="w-full"
                            placeholder="Markaz nomi"
                            {...register('centerName', { required: false })}
                          />
                          {errors.centerName && (
                            <p className="mt-1 text-xs font-semibold text-red-600">
                              {t('centerName')} {t('enterRequired')}!
                            </p>
                          )}
                        </div>

                        <button onClick={handleSubmit}>{t('send')}</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black fixed inset-0 z-40 overflow-hidden opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default ContactModal;
