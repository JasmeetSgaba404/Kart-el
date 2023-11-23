import r1 from './images:vids/w7.jpg';
import r2 from './images:vids/w8.webp';
import r3 from './images:vids/w9.jpg';
import r4 from './images:vids/r4.webp';
import r5 from './images:vids/r5.jpg';
import r6 from './images:vids/r6.webp';
import r7 from './images:vids/r7.webp';
import r8 from './images:vids/r8.jpg';
import r9 from './images:vids/r9.jpg';
import Layout from '../components/Layouts/layout';



function Furniture() {

    return(
        <>
<Layout title="Furniture">

        <h1 className="text-center my-5">Furniture</h1>


 {/* ROW 1 */}
 <div className="mx-5 row justify-content-between">

<div className="card shadow cwid col-md-3">
    <img src={r1} alt="black watch" />
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
            <span className="badge bg-primary ms-2">4.7</span>
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
    <img src={r2} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
      Sofa Chair 2
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
            <span className="h5 mb-0 text-gray">$149.99</span>
            <a className="btn btn-xs" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={r3} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
       Sofa Chair 3
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
            <span className="h5 mb-0 text-gray">$199.99</span>
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
    <img src={r4} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
          Dressing Table 1
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
            <span className="h5 mb-0 text-gray">$299.99</span>
            <a className="btn btn-xs btn-tertiary" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={r5} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
        Dressing Table 2
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
            <span className="h5 mb-0 text-gray">$299.99</span>
            <a className="btn btn-xs" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={r6} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
        Dressing Table 3
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
            <span className="h5 mb-0 text-gray">$299.99</span>
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
    <img src={r7} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
          Wardrobe Design 1
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
            <span className="h5 mb-0 text-gray">$1499.99</span>
            <a className="btn btn-xs btn-tertiary" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={r8} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
        Wardrobe Design 2
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
            <span className="h5 mb-0 text-gray">$1999.99</span>
            <a className="btn btn-xs" href="#">
                <span className="fas fa-cart-plus me-2" /> Add to cart
            </a>
        </div>
    </div>
</div>

<div className="card shadow cwid col-md-3">
    <img src={r9} alt="black watch" />
    <div className="card-footer border-top border-gray-300 p-4">
        <a href="#" className="h5">
        Wardrobe Design 3
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
            <span className="h5 mb-0 text-gray">$1499.99</span>
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

export default Furniture;