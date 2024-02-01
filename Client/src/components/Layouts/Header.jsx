import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from "react-hot-toast";
import { Dropdown } from 'bootstrap';
import SearchInput from '../Forms/Searchinput';
import useCategory from '../../hooks/useCategory';

// const dropdown = Dropdown;



function Nav() {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
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
              <li className='nav-item dropdown'>
                <a
                className='nav-link dropdown-toggle text-white'
                href='#'
                role='button'
                data-bs-toggle="dropdown"
                aria-expanded='false'
                >
                  Categories
                </a>
                {categories?.map((c) => (
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' to={"/"}>
                        {c.name}
                      </Link>
                    </li>
                  </ul>
                ))}
              </li>


              {!auth?.user ? (
                <>


                  <li className="nav-item">
                    <NavLink to='/login' className="nav-link text-light">
                      Login / SignUp
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle text-light"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu text-light">
                      <li>
                        <NavLink
                          to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >Logout</NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}


            </ul>
            <SearchInput />
          </div>
        </div>
      </nav>

    </>
  )

}

export default Nav;