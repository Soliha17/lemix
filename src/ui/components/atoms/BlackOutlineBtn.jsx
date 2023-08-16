const BlackOutlineBtn = ({ text, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(true)}
      className="rounded-2xl border border-black-100 px-9 py-4 font-semibold text-black-100 hover:bg-black-100 hover:text-white-main"
    >
      {text}
    </button>
  );
};

export default BlackOutlineBtn;
