import { useContext } from "react";
import { DirectoryContext } from "../../contexts/context";

function HomeHeader() {
  const { search } = useContext(DirectoryContext);

  return (
    <>
      <div className="bg-header-bg m-auto h-[250px] bg-cover flex flex-col w-full ">
        <div className="header-content max-w-5xl w-full m-auto">
          <div className="logo m-auto flex items-center justify-center  ">
            <h1 className="text-red-800 font-logo text-8xl font-extrabold border-none rounded-full p-4  ">
              directory
            </h1>
          </div>
          <form className="m-auto w-3/4  flex">
            <input
              type="text"
              placeholder="hamburger,pizza,hotdog,coffee..."
              className="w-full h-10 rounded-l-xl p-3"
            />
            <button
              className="bg-red-800 rounded-r-xl"
              onClick={(e) => search(e)}
            >
              <img src="img/search-white.svg" alt=""></img>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
