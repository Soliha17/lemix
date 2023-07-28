import nft from 'src/assets/images/nft-marketplace.png';
import rightArrow from 'src/assets/images/right-black-arrow.svg';

const ProductCard = () => {
  return (
    <div
      className="product-card relative mt-6 flex justify-start rounded-3xl bg-primary-25 bg-no-repeat p-6 sm:p-8 md:mt-8 md:p-9 lg:mt-14 lg:p-16"
      style={{
        backgroundImage: 'url("src/assets/images/line-product-home.png")',
        backgroundPosition: 'top right',
      }}
    >
      <img src={nft} alt="dashboard" className="nft-img__product-card" />
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
          <button className="flex gap-4 rounded-2xl bg-white-main px-9 py-4 text-black-100 hover:bg-neo-100">
            Bepul foydalanish <img src={rightArrow} alt="right arrow" />
          </button>
          <button className="rounded-2xl border border-black-100 px-9 py-4 text-black-100 hover:bg-black-100 hover:text-white-main">
            Batafsil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
