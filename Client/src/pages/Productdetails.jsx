import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/layout";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    const params = useParams();
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (params?.slug) getProduct()

    }, [params?.slug])

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/categories/get-product/${params.slug}`)
            setProduct(data?.product)
            getSimilarProduct(data?.product._id, data?.product.category._id);
        }
        catch (error) {
            console.log(error);
        }
    }



    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(`/api/v1/categories/related-product/${pid}/${cid}`)
            setRelatedProducts(data?.products)

        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Layout>
                <div className="row container my-3">
                    <div className="col-md-6">
                        <img
                            src={`/api/v1/categories/get-photo/${product._id}`}
                            className="card-img-top"
                            alt={product.pname}
                        />

                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center">Product Details</h1>
                        <h6>Name : {product.pname}</h6>
                        <h6>Description : {product.description}</h6>
                        <h6>Price : {product.price}</h6>
                        <h6>Category : {product.category?.name}</h6>  
                        {/* category name not showing */}
                        {/* <h6>Shipping : {product.shipping}</h6> */}
                        <button className='btn btn-primary ms-1'>Add to cart</button>
                    </div>
                </div>

                <div className="row container">
                    <h1 className="text-center">Similar Products</h1>
                    {/* {JSON.stringify(relatedProducts, null, 4)} */}
                    {relatedProducts.length < 1 && <p className="text-center">No Similar Products</p>}
                    <div className="d-flex flex-wrap">
                        {relatedProducts?.map((p) => (
                            // <Link
                            //   key={p._id}
                            //   to={`/dashboard/admin/products/${p.slug}`}
                            //   className="product-link"
                            // >
                            <div className="card m-2" style={{ width: "18rem" }}>
                                <img
                                    src={`/api/v1/categories/get-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.pname}</h5>
                                    <p className="card-text">{p.description.substring(0, 30)}...</p>
                                    <p className="card-text">${p.price}</p>

                                    <button className='btn btn-secondary ms-1'>Add to cart</button>
                                </div>
                            </div>
                            // </Link>
                        ))}
                    </div>
                </div>

                {/* {JSON.stringify(product, null, 4)} */}
            </Layout>
        </>
    )
}

export default ProductDetails