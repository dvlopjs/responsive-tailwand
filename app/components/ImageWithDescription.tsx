import Image from "next/image";
import logo from "../images/logo.svg";
import beachWork from "../images/beach-work.jpg";
export const ImageWithDescription = () => {
  return (
    <>
      <Image src={logo} alt="Logo" />
      <div className="py-3">
        <Image
          className="shadow-lg rounded-xl"
          src={beachWork}
          alt="beachWork"
        />
      </div>
      <p className="text-3xl font-bold">You can work from anywhere.</p>

      <p className="text-3xl text-indigo-500 font-bold">
        Take advantage of it.
      </p>
      <p className="py-3">
        Workcationm helps you find work-friendly rentals in beatiful locations
        so you can enjoy some nice weather even when you're not on vacation
      </p>
      <button className="bg-indigo-500 py-2 px-4 text-sm font-semibold rounded-lg text-white shadow-md hover:bg-indigo-400">
        BOOK YOUR SCAPE
      </button>
    </>
  );
};
