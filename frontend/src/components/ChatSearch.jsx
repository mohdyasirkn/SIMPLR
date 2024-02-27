const ChatSearch = () => {
  return (
    <form className="flex items-center w-full mx-auto px-4">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-3"
          placeholder="Type your queries"
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3 rotate-90 pl-2"
        >
          <svg
            className="w-7 h-7 text-gray-800 dark:text-sky-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2c.4 0 .8.3 1 .6l7 18a1 1 0 0 1-1.4 1.3L13 19.5V13a1 1 0 1 0-2 0v6.5L5.4 22A1 1 0 0 1 4 20.6l7-18a1 1 0 0 1 1-.6Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatSearch;
