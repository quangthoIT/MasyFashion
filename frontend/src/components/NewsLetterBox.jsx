const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center py-10">
      <p className="text-xl md:text-3xl font-medium text-gray-900 mb-2">
        Subscribe now & get 20% off
      </p>
      <p className="text-sm md:text-base text-gray-500">
        {" "}
        Join our newsletter to receive the latest updates, exclusive offers, and
        more.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center mx-auto border border-gray-300 my-6 pl-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white uppercase px-4 py-2 text-sm sm:text-base sm:px-10 sm:py-4 cursor-pointer"
        >
          Subcribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
