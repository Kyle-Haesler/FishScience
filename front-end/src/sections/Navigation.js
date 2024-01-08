const Navigation = () => {
  return (
    <div
      className="d-flex align-items-center flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "280px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">Home</li>
      </ul>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">+ Add</li>
      </ul>
    </div>
  );
};

export default Navigation;
