import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import Layout from "../../components/Layouts/layout";

const Contact = () => {

    const [cname, setCname] = useState("");
    const [cemail, setCemail] = useState("");
    const [cmessage, setCmessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("api/v1/auth/contact", {
                cname, 
                cemail,
                cmessage,
            });

            if (res && res.data.sucess){
                toast.success(res.data && res.data.message);
                window.alert("thank you for your query");
            } else {
                toast.error(res.data.message);
            }
        } catch(error) {
            console.log(error);
            toast.error("Something Wong")

        }
    };

    return(

        <>
        <Layout title="Contact Us">
        <div className="container">

            <h1 className="text-center my-5">Contact Us</h1>
            <form onSubmit={handleSubmit} className="my-5">

                <div className="mb-3">
                    <input
                    text="text"
                    value={cname}
                    onChange={(e) => setCname(e.target.value)}
                    className="form-control"
                    placeholder="your name"
                    required
                    autoFocus />
                </div>

                <div className="mb-3">
                    <input
                    text="text"
                    value={cemail}
                    onChange={(e) => setCemail(e.target.value)}
                    className="form-control"
                    placeholder="your email address"
                    required
                    autoFocus />
                </div>

                <div className="mb-3">
                    <textarea
                    text="text"
                    value={cmessage}
                    onChange={(e) => setCmessage(e.target.value)}
                    className="form-control"
                    placeholder="Tell us about your enquiry in this box"
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

export default Contact;