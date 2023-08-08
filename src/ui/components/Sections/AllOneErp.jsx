import SectionName from '../Atoms/SectionName';
import AllOneCard from '../Cards/AllOneCard';

const allOneErp = [
  {
    id: 1,
    title: 'Sotuv',
    text: "O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish",
  },
  {
    id: 2,
    title: 'Marketing',
    text: "O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish",
  },
  {
    id: 3,
    title: 'HR',
    text: "O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish",
  },
  {
    id: 4,
    title: 'LMS',
    text: "O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish",
  },
  {
    id: 5,
    title: 'Testing',
    text: "O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish",
  },
  {
    id: 6,
    title: 'Education',
    text: "O'quv markazlari uchun avtomatlashtiruvchi LMS (Learning Management System) tizimlari o'quv jarayonini boshqarish",
  },
];

const AllOneErp = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-20">
      <SectionName name="Lemix ERP barchasi bittada" />
      <div className="mt-16 flex flex-col items-center md:mt-24 lg:mt-20">
        {/* <img src={mapVector} alt="mapVector" /> */}
        <div className="all-in-one-container flex flex-wrap justify-between gap-6">
          {allOneErp.map((card) => (
            <AllOneCard key={card.id} id={card.id} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllOneErp;
