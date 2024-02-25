export const Button = ({ label }) => {
  return (
    <button
      type="button"
      className="text-white bg-sky-500 hover:bg-sky-400 font-medium rounded-xl text-base px-5 py-3.5 ml-6 mr-6 mt-2"
    >
      {label}
    </button>
  );
};
