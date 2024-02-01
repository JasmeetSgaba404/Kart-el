import axios from "axios";
import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import Layout from "../../components/Layouts/layout";
import { useAuth } from "../../context/auth";
import { useLocation } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("api/v1/auth/login", {
                email,
                password,
            });

            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something wong")
        }
    };

    return (
        <>
        <Layout title="Login">
            <div className="container">

                <h1 className="text-center my-5">Login</h1>
                <form onSubmit={handleSubmit} className="my-5">

                    <div className="mb-3">
                        <input
                            text="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="your email"
                            required
                            autoFocus />
                    </div>

                    <div className="mb-3">
                        <input
                            text="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="your password"
                            required
                            autoFocus />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary col-md-2">Submit</button>
                    </div>
                </form>
                <h5 className="text-center mb-3">Don't have an account ? <a href="/register">Register</a></h5>
                <h6 className="text-center my-3"><a href="/forgot">Forgot Password?</a></h6>
            </div>
            </Layout>
        </>
    )


}

export default Login;

