const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              src="https://images.freeimages.com/images/large-previews/865/tropical-fish-1176775.jpg"
              width="20"
              height="20"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
