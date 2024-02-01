import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import Layout from "../../components/Layouts/layout";
import { useAuth } from "../../context/auth";


const Forget = () => {

    const [email, setEmail] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("api/v1/auth/forgetPassword", {
                email,
                newpassword,
                confirm,
            });

            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate("/login");
            }

            else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("somthing wong")
        }
    };



    return (
        <>
            <Layout title="Forgot Password">
                <div className="container">

                    <h1 className="text-center my-5">Reset Password</h1>
                    <form onSubmit={handleSubmit} className="my-5">

                        <div  className="mb-3">
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
                                value={newpassword}
                                onChange={(e) => setNewpassword(e.target.value)}
                                className="form-control"
                                placeholder="your new password"
                                required
                                autoFocus />
                        </div>
                        <div className="mb-3">
                            <input
                                text="text"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                className="form-control"
                                placeholder="confirm new password"
                                required
                                autoFocus />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary col-md-2">Submit</button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )

}

export default Forget;