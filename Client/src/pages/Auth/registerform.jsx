import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import Layout from "../../components/Layouts/layout";



const Register = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [Phone_number, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("api/v1/auth/register", {
                fname,
                lname,
                email,
                Phone_number,
                password,
                confirm_password,
            });

            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something wrong")
        }
    };

    return (

        <>
        <Layout title="Registration">
            <div className="container">

                <div className="form-container" style={{ minHeight: "90vh" }}>
                    <form onSubmit={handleSubmit}>
                        <h2 className="my-5 text-center"> Register Now</h2>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <input
                                    text="text"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    className="form-control"
                                    placeholder="First Name"
                                    required
                                    autoFocus />

                            </div>

                            <div className="mb-3 col-md-6">
                                <input
                                    text="text"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className="form-control"
                                    placeholder="Last Name"
                                    required
                                    autoFocus />

                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                text="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Email"
                                required
                                autoFocus />

                        </div>

                        <div className="mb-3">
                            <input
                                text="text"
                                value={Phone_number}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                placeholder="Contact no."
                                required
                                autoFocus />

                        </div>

                        <div className="mb-3">
                            <input
                                text="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="password"
                                required
                                autoFocus />

                        </div>

                        <div className="mb-3">
                            <input
                                text="text"
                                value={confirm_password}
                                onChange={(e) => setConfirm(e.target.value)}
                                className="form-control"
                                placeholder="confirm password"
                                required
                                autoFocus />

                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary col-md-2">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
            </Layout>
        </>
    )





}


export default Register;