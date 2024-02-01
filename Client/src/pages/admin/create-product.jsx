import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AdminMenu from "../../components/Layouts/Adminmenu";
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [pname, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [photo, setPhoto] = useState("");
    const [shipping, setShipping] = useState("");





    const getAllcategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/categories/all-category");
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("something wong")
        }
    };

    useEffect(() => {
        getAllcategory();
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            const productData = new FormData();
            productData.append('pname', pname);
            productData.append('description', description);
            productData.append('price', price);
            productData.append('category', category);
            productData.append('quantity', quantity);
            productData.append('photo', photo);
            productData.append('shipping', shipping);

            const { data } = axios.post("/api/v1/categories/create-product", productData);
            if (data?.success) {
                toast.error(data?.message);
               
            } else {
                toast.success("Product added successfully");
                navigate("/dashboard/admin/products")
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing sucks");
        }
    };


    return (
        <>
            <div className="row my-5">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1>Create Product</h1>
                    <div className="m-1 w-75">
                        <Select bordered={false}
                            placeholder="select category"
                            size="large"
                            showSearch
                            className="form-select mb-3" onChange={(value) => { setCategory(value) }} >
                            {categories?.map(c => (
                                <Option key={c._id} value={c._id}>{c.name}</Option>
                            ))}
                        </Select>
                        <div className="mb-3">
                            <label className="btn btn-outline-secondary col-md-12">
                                {photo ? photo.name : "Upload Photo"}
                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                    hidden />
                            </label>
                        </div>
                        <div className="mb-3">
                            {photo && (
                                <div className="text-center">
                                    <img
                                        src={URL.createObjectURL(photo)}
                                        alt="product-photo"
                                        height={"50px"}
                                        className="img img-responsive"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={pname}
                                placeholder="Product-name"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                type="text"
                                value={description}
                                placeholder="Description"
                                className="form-control"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                value={price}
                                placeholder="Price"
                                className="form-control"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={category}
                                placeholder="Product-Category"
                                className="form-control"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                value={quantity}
                                placeholder="Product-quantity"
                                className="form-control"
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <Select
                                bordered={false}
                                placeholder="Shipping"
                                size="large"
                                showSearch
                                className="form-select mb-3"
                                onChange={(value) => {
                                    setShipping(value);
                                }}
                            >
                                <Option value="0">No</Option>
                                <Option value="1">Yes</Option>
                            </Select>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary" onClick={handleCreate}>
                                Create Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateProduct;