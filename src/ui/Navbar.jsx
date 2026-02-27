import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20">
      <div>
        <img src={logo} alt="cineverse" />
      </div>
      <div className="flex gap-10">
        <div>
          <select
            className="w-30 h-10   rounded-[5px] px-2 border border-white cursor-pointer"
            name="language"
            id="language"
          >
            <option className="bg-primaryBg text-white" value="eng">
              English
            </option>
            <option className="bg-primaryBg text-white" value="hindi">
              Hindi
            </option>
          </select>
        </div>
        <div>
          <button className="bg-accent h-10 w-20 hover:brightness-110 hover:shadow-accent cursor-pointer rounded-[5px]">
            SignIn
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
