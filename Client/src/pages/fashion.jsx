import f1 from './images:vids/w5.jpg';
import f2 from './images:vids/f2.jpg';
import f3 from './images:vids/f3.webp';
import f4 from './images:vids/w4.jpg';
import f5 from './images:vids/f5.jpg';
import f6 from './images:vids/f6.webp';
import f7 from './images:vids/w6.avif';
import f8 from './images:vids/f8.avif';
import f9 from './images:vids/f9.avif';
import Layout from '../components/Layouts/layout';


function Fashion() {
    return(
<>
<Layout title="Fashion">

<h1 className="text-center my-5">Fashion</h1>

 {/* ROW 1 */}
 <div className="mx-5 row justify-content-between">

<div className="card shadow cwid col-md-3">
    <img src={f1} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
          Naruto T-shirt
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
            <span className="h5 mb-0 text-gray">$12.99</span>
            <a className="btn btn-xs btn-tertiary" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={f2} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
      Goku T-shirt 
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
            <span className="h5 mb-0 text-gray">$12.99</span>
            <a className="btn btn-xs" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={f3} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
       Sakuna - Jujutsu Kaisen
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
            <span className="h5 mb-0 text-gray">$12.99</span>
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
    <img src={f4} alt="black watch" />
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
    <img src={f5} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
          Winter Jacket Beige
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
            <span className="h5 mb-0 text-gray">$29.99</span>
            <a className="btn btn-xs" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={f6} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
           Winter Jacket Blue
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
            <span className="h5 mb-0 text-gray">$29.99</span>
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
    <img src={f7} alt="black watch" />
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
            <span className="badge bg-primary ms-2">4.9</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="h5 mb-0 text-gray">$19.99</span>
            <a className="btn btn-xs btn-tertiary" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={f8} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
           Skinny Jeans
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
            <span className="h5 mb-0 text-gray">$19.99</span>
            <a className="btn btn-xs" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={f9} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
          Gray Jeans
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
{/* Row 3 */}
<div className="my-5"></div>
</Layout>
</>

    )
}

export default Fashion;