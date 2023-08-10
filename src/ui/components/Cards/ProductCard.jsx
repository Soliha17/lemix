import nft from 'src/assets/images/nft-marketplace.png';
import WhiteButton from '../Atoms/WhiteButton';
import BlackOutlineBtn from '../Atoms/BlackOutlineBtn';

const ProductCard = () => {
  return (
    <div className="product-card relative mt-6 flex justify-start rounded-3xl bg-primary-25 bg-no-repeat p-6 sm:p-8 md:mt-8 md:p-9 lg:mt-14 lg:p-16">
      <div className="info-col__product-card flex flex-col gap-12 sm:gap-28">
        <div className="title-group__hero-home">
          <h1 className="text-3xl font-semibold text-black-100 lg:text-5xl">
            Ta&apos;limni tizimli <br /> mukammallashtiring
          </h1>
          <p className="p1 mt-5 w-full text-black-100 md:w-1/2">
            O&apos;quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System)
            tizimlari o&apos;quv jarayonini boshqarish, o&apos;quvchilarni baholash va o&apos;quv
            materiallarini taqdim etish uchun yaxshi imkoniyatlar beradi.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row">
          <WhiteButton text={'Bepul foydalanish'} />
          <BlackOutlineBtn text="Batafsil" />
        </div>
      </div>
      <img src={nft} alt="dashboard" className="nft-img__product-card" />
    </div>
  );
};

export default ProductCard;
