import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AdminMenu from "../../components/Layouts/Adminmenu";
import { Select } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [categories, setCategories] = useState([]);
    const [pname, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [photo, setPhoto] = useState("");
    const [shipping, setShipping] = useState("");
    const [id, setId] = useState("")




    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/categories/get-product/${params.slug}`);
            setName(data.product.pname);
            setId(data.product._id); 
            setDescription(data.product.description);
            setPrice(data.product.price);
            setCategory(data.product.category);
            setQuantity(data.product.quantity);
            setShipping(data.product.shipping);
        }
        catch (error){
            console.log(error);
        }
    }

useEffect(() => {
    getSingleProduct();
},[])
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
            photo && productData.append('photo', photo); // only updates if photo exists
            productData.append('shipping', shipping);

            const { data } = axios.put(`/api/v1/categories/update-product/${id}`, productData);
            if (data?.success) {
                toast.error(data?.message);
               
            } else {
                toast.success("Product Updated successfully");
                navigate("/dashboard/admin/products");
               
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing sucks");
        }
    };

    const handleDelete = async () => {
        try {
            let answer = window.prompt("are you sure?")
            if (!answer) return
            const { data } = await axios.delete(`/api/v1/categories/delete-product/${id}`)
            toast.success("product has been deleted");
            navigate("/dashboard/admin/products");
        }
        catch (error) {
            console.log(error);
            toast.error("something wong")
        }
    }


    return(
        <>
        <div className="row my-5">
            <div className="col-md-3">
                <AdminMenu />
            </div>
            <div className="col-md-9">
                <h1>Update Product</h1>
                <div className="m-1 w-75">
                    <Select bordered={false}
                        placeholder="select category"
                        size="large"
                        showSearch
                        className="form-select mb-3" onChange={(value) => { setCategory(value) }} 
                        value={category}>
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
                        {photo ? (
                            <div className="text-center">
                                <img
                                    src={URL.createObjectURL(photo)}
                                    alt="product-photo"
                                    height={"50px"}
                                    className="img img-responsive"
                                />
                            </div>
                        ) : (
                            <div className="text-center">
                            <img
                                src={`/api/v1/categories/get-photo/${id}`}
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
                            value={shipping ? "yes" : "no"}
                        >
                            <Option value="0">No</Option>
                            <Option value="1">Yes</Option>
                        </Select>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={handleCreate}>
                            Update Product
                        </button>
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-danger" onClick={handleDelete}>
                            Delete Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};

export default UpdateProduct;