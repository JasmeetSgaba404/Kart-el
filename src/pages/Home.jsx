import React from 'react';
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
import { useAuth } from '../context/auth.jsx';

function Home() {
  const [auth, setAuth]=useAuth();

  return (


    <>
    <Layout title="Home">
     

      <div className="hid">
      <pre>{JSON.stringify(auth,null,4)}</pre>
        <Carousell />

        <div className='my-5 py-5'></div>

        <Cards />
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