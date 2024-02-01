import React, { useEffect } from 'react';
import Carousell from './Carousel.jsx';
import Cards from './Slider1.jsx';
import w1 from './images:vids/watch1.png';
import w2 from './images:vids/watch2.jpg';
import w3 from './images:vids/watch3.jpg';
import w4 from './images:vids/w4.jpg';
import w5 from './images:vids/w5.jpg';
import w6 from './images:vids/w6.avif';
import w7 from './images:vids/w7.jpg';
import w8 from './images:vids/w8.webp';
import w9 from './images:vids/w9.jpg';
import Layout from '../components/Layouts/layout.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Checkbox, Radio } from 'antd'
import { Prices } from '../components/Prices.jsx';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();




  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/categories/all-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);




  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/categories/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);



  const getTotal = async () => {
    try {
      const { data } = await axios.get('/api/v1/categories/product-count')
      setTotal(data?.total)
    }
    catch(error) {
      console.log(error)
    }
  }


  const loadMore = async () => {
    try{
      setLoading(true);
      const {data} = await axios.get(`/api/v1/categories/product-list/${page}`)
      setLoading(false);
      setProducts([...products, ...data?.products]);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(page === 1) return;
    loadMore();
  }, [page])


  const handleFilter = (value, id) => {
    let all = [...checked]
    if (value) {
      all.push(id)
    } else {
      all = all.filter(c => c !== id)
    }
    setChecked(all)
  }

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/categories/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio])

  return (


    <>
      <Layout title="Home">


        <div className="hid">
          {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
          <Carousell />

          <div className='my-5 py-5'></div>

          <Cards />
          <div className="my-3"></div>

          <div className="row mx-1 my-2">
            <div className="col-md-2">
              <div className="d-flex flex-column">
                <h4>Filter by category</h4>
                {categories?.map((c) => (
                  <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                    {c.name}
                  </Checkbox>
                ))}

                {/* shows selected category id */}
                {JSON.stringify(checked, null, 4)}
              </div>
            </div>

            <div className="col-md-3">
              {/* Price Filter */}
              <div className="d-flex flex-column my-1">
                <h4>Filter by Price</h4>
                <Radio.Group onChange={e => setRadio(e.target.value)}>
                  {Prices?.map(p => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>

                  ))}
                </Radio.Group>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column">
                  <button className='btn btn-danger'
                  onClick={() => window.location.reload()}>
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>







          {/* registered products */}
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
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
                  <button className='btn btn-primary ms-1' onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                  <button className='btn btn-secondary ms-1'>Add to cart</button>
                </div>
              </div>
              // </Link>
            ))}
          </div>
          <div className='m-2 p-3'>
            
          {products && products.length < total && (
            <button 
            className='btn btn-warning'
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
            >
                {loading ? "loading..." : "More Products"}
            </button>
          )}
            
            </div>


          <div className='my-5 py-5 text-center'>
            <h1>Bestsellers</h1>
          </div>

          {/* ROW 1 */}
          <div className="mx-5 row justify-content-between">

            <div className="card shadow cwid col-md-3">
              <img src={w1} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Apple Watch Series 3
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.7</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$299.00</span>
                  <a className="btn btn-xs btn-tertiary" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow cwid col-md-3">
              <img src={w2} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Apple Watch Series 3
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.7</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$299.00</span>
                  <a className="btn btn-xs" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow cwid col-md-3">
              <img src={w3} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Apple Watch Series 3
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.7</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$299.00</span>
                  <a className="btn" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>


          </div>
          {/* ROW 1 */}
          <div className="my-5"></div>
          {/* ROW 2 */}
          <div className="mx-5 row justify-content-between">

            <div className="card shadow cwid col-md-3">
              <img src={w4} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Winter Jacket
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.9</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$29.99</span>
                  <a className="btn btn-xs btn-tertiary" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow cwid col-md-3">
              <img src={w5} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Naruto Tshirt
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.5</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$12.99</span>
                  <a className="btn btn-xs" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow cwid col-md-3">
              <img src={w6} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Denim Jeans
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.2</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$19.99</span>
                  <a className="btn btn-tertiary" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>


          </div>

          {/* ROW 2 */}
          <div className="my-5"></div>
          {/* Row 3 */}

          <div className="mx-5 row justify-content-between">

            <div className="card shadow cwid col-md-3">
              <img src={w7} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Sofa Chair 1
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.9</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$249.99</span>
                  <a className="btn btn-xs btn-tertiary" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow cwid col-md-3">
              <img src={w8} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Sofa chair 2
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.5</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$149.99</span>
                  <a className="btn btn-xs" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow cwid col-md-3">
              <img src={w9} alt="black watch" />
              <div className="card-footer border-top border-gray-300 p-4">
                <a href="#" className="h5">
                  Sofa chair 3
                </a>
                <h3 className="h6 fw-light text-gray mt-2">
                  Space Gray Aluminum Case with Black Sport Band
                </h3>
                <div className="d-flex mt-3">
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning me-1" />
                  <span className="star fas fa-star text-warning" />
                  <span className="badge bg-primary ms-2">4.2</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0 text-gray">$199.99</span>
                  <a className="btn btn-tertiary" href="#">
                    <span className="fas fa-cart-plus me-2" /> Add to cart
                  </a>
                </div>
              </div>
            </div>


          </div>
          {/* Row 3 */}



          <div className='my-5 py-5'></div>

        </div>

      </Layout>
    </>


  )
}

export default Home;