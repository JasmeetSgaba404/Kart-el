import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from "react-hot-toast";



function Nav() {
  const [auth, setAuth]=useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user:null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successful")
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand text-light fs-2">
            Kart_el
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/mobile' className="nav-link active text-light" aria-current="page">
                  Mobiles
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink to='/electronics' className="nav-link text-light">
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/fashion' className="nav-link text-light">
                  Fashion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/furniture' className="nav-link text-light">
                  Furniture
                </NavLink>
              </li>


              {!auth?.user?(
              <>


              <li className="nav-item">
                <NavLink to='/login' className="nav-link text-light">
                  Login / SignUp
                </NavLink>
              </li>
              </>
              ) : (
                <>
                <li>
                <NavLink onClick={handleLogout} to='/login' className="nav-link text-light">
                  Logout
                </NavLink>
                </li>
                </>
              )}

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )

}

export default Nav;