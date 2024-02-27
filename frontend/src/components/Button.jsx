import { Link } from "react-router-dom";

export const Button = ({ label, to }) => {
  return (
    <Link to={to}>
      <button
        type="button"
        className="text-left text-black w-5/6 hover:text-white bg-white hover:bg-sky-400 font-medium rounded-xl text-base pl-5 py-3.5 ml-6 mr-6 mt-2"
      >
        {label}
      </button>
    </Link>
  );
};
