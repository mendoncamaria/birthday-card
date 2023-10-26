const BirthdayCard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-teal-800">
      <div className="birthdayCard transform perspective-3d hover:rotate-5 hover:shadow-lg hover:bg-opacity-50 transition duration-1000">
        <div className="cardFront w-64 h-80 bg-white overflow-hidden transform-origin-left box-border shadow-lg transition duration-600">
          <h3 className="happy text-center m-8 bg-gradient-to-r from-yellow-400 to-pink-400 transition duration-100">
            HAPPY BIRTHDAY Love!
          </h3>
          <div className="balloons absolute">
            <div className="balloonOne w-20 h-20 rounded-full bg-pink-500 bg-opacity-70 left-0 top-20"></div>
            <div className="balloonTwo w-20 h-20 rounded-full bg-green-500 bg-opacity-70 left-20 top-0"></div>
            <div className="balloonThree w-20 h-20 rounded-full bg-yellow-500 bg-opacity-70 left-40 top-20"></div>
            <div className="balloonFour w-20 h-20 rounded-full bg-blue-500 bg-opacity-70 left-60 top-0"></div>
          </div>
        </div>
        <div className="cardInside absolute bg-white w-64 h-80 z-0 left-0 top-0 box-border shadow-lg">
          <h3 className="back text-center m-8">HAPPY BIRTHDAY GLEN</h3>
          <p className="m-8">Dear Bubbu,</p>
          <p className="m-8">
            Happy birthday!! I hope your day is filled with lots of love and
            laughter! May all of your birthday wishes come true.
          </p>
          <p className="name absolute left-32 top-48 text-gray-800">
            Your Bubbu
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
