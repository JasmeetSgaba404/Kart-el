
import { NavLink } from "react-router-dom";
function UserMenu() {
    return(
        <>
           
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group ">
                                <li className="list-group-item">
                                    <NavLink>
                                        View Registration
                                    </NavLink>
                                </li>
                                <li className="list-group-item">
                                    <NavLink>
                                        View order
                                    </NavLink>
                                </li>
                                <li className="list-group-item">
                                    <NavLink>
                                        Add Product
                                    </NavLink>
                                </li>
                                <li className="list-group-item">
                                    <NavLink>
                                        View Contact
                                    </NavLink>
                                </li>
                                <li className="list-group-item">
                                    <NavLink>
                                        View Packages
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default UserMenu;