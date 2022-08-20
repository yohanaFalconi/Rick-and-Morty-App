const Nav = ({brand}) => {
  return (
    <>
      <nav  className=" navbar navbar-dark bg-dark text-white">
        <h1 className="navbar-brand text-uppercase container">{brand}</h1>
      </nav>

    </>
  )
};

export default Nav;