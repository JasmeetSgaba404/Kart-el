import React, {useState, useEffect}  from "react";
import AdminMenu from "../../components/Layouts/Adminmenu";
import axios from 'axios'; 
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";


function AdminProducts() {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try{
            const { data } = await axios.get("/api/v1/categories/get-product");
            setProducts(data.products);
        }
        catch (error) {
            console.log(error);
            toast.error("errero...")
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return(
        <>
        <div className="text-center">
            
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                <h1 className="my-5">Admin Products</h1>


                <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/products/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/categories/get-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.pname}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

                </div>
            </div>
           


        </div>
        </>
    )
}

export default AdminProducts;