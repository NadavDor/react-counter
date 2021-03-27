// Stateless Functional Component
// create with the shortcut - sfc
const Navbar = ({ totalCounters }) => {
  console.log("navbar - rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Total Items{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
