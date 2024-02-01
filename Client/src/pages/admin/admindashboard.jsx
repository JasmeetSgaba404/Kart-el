import AdminMenu from "../../components/Layouts/Adminmenu"
import { useAuth } from "../../context/auth"

function AdminDashboard() {
    const[auth,setAuth] = useAuth();
    return(
        
        <>
        <AdminMenu />
        <div className="card w-75 p-3 my-5">
           
            <h3 className="text-center">email :{auth?.user?.email}</h3>
        </div>
        </>
    )
}

export default AdminDashboard;