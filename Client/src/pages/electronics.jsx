import e1 from './images:vids/watch1.png';
import e2 from './images:vids/watch2.jpg';
import e3 from './images:vids/watch3.jpg';
import e4 from './images:vids/e4.jpg';
import e5 from './images:vids/e5.avif';
import e6 from './images:vids/e3.jpg';
import e7 from './images:vids/e6.webp';
import e8 from './images:vids/e7.png';
import e9 from './images:vids/e8.webp';
import Layout from '../components/Layouts/layout';

function Electronic() {

    return (
        <>
        <Layout title="Electronics">
            <h1 className="text-center my-5">Electronics</h1>

            {/* ROW 1 */}
            <div className="mx-5 row justify-content-between">

                <div className="card shadow cwid col-md-3">
                    <img src={e1} alt="black watch" />
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
                    <img src={e2} alt="black watch" />
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
                    <img src={e3} alt="black watch" />
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
                    <img src={e4} alt="black watch" />
                    <div className="card-footer border-top border-gray-300 p-4">
                        <a href="#" className="h5">
                           Sony Bravia X1 
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
                            <span className="h5 mb-0 text-gray">$699.99</span>
                            <a className="btn btn-xs btn-tertiary" href="#">
                                <span className="fas fa-cart-plus me-2" /> Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card shadow cwid col-md-3">
                    <img src={e5} alt="black watch" />
                    <div className="card-footer border-top border-gray-300 p-4">
                        <a href="#" className="h5">
                          LG LED UHD
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
                            <span className="h5 mb-0 text-gray">$599.99</span>
                            <a className="btn btn-xs" href="#">
                                <span className="fas fa-cart-plus me-2" /> Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card shadow cwid col-md-3">
                    <img src={e6} alt="black watch" />
                    <div className="card-footer border-top border-gray-300 p-4">
                        <a href="#" className="h5">
                           Samsung Crystal 4K
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
                            <span className="h5 mb-0 text-gray">$599.99</span>
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
                    <img src={e7} alt="black watch" />
                    <div className="card-footer border-top border-gray-300 p-4">
                        <a href="#" className="h5">
                            Samsung Washing/Dryer
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
                            <span className="h5 mb-0 text-gray">$399.99</span>
                            <a className="btn btn-xs btn-tertiary" href="#">
                                <span className="fas fa-cart-plus me-2" /> Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card shadow cwid col-md-3">
                    <img src={e8} alt="black watch" />
                    <div className="card-footer border-top border-gray-300 p-4">
                        <a href="#" className="h5">
                           LG Smart Refrigerator
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
                            <span className="h5 mb-0 text-gray">$699.99</span>
                            <a className="btn btn-xs" href="#">
                                <span className="fas fa-cart-plus me-2" /> Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card shadow cwid col-md-3">
                    <img src={e9} alt="black watch" />
                    <div className="card-footer border-top border-gray-300 p-4">
                        <a href="#" className="h5">
                           LG Microwave Oven
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
                            <span className="h5 mb-0 text-gray">$99.99</span>
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

export default Electronic;