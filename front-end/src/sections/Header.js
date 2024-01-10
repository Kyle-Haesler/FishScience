import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <Logo />
          <div className="d-flex align-items-center">
            <div className="border border-white p-1 rounded">Signed in as:</div>
            <div className="bg-white text-black border border-dark p-1 rounded">
              Mr Potato Head
            </div>

            <button
              type="button"
              className="btn btn-warning"
              style={{ "margin-left": "20px" }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
