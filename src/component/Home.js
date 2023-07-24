import MyCarousel from "./MyCarousel";
import MyMap from "./MyMap";

const backgroundStyle = {
    backgroundImage: "url('https://emirateswoman.com/wp-content/uploads/2019/11/farfetch-sole-dxb-dubai.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

export default function Home(){
return(
    <>
    <main>
            <section>
            <header className="bg-dark py-5" style={backgroundStyle}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0"style={{ color: 'white', }}>Reach the highest level of style with us</p>
        </div>
      </div>
    </header>

            </section>

            <section>
                <h2>Next Collection</h2>
                <video src="https://player.vimeo.com/external/444937501.sd.mp4?s=0d7a47a34695ce16a6ff7c23a77e1766b7f081d1&profile_id=164&oauth2_token_id=57447761" controls></video>
            </section>
            <section style={{ paddingTop: '40px' }}>                
            <h2>Our Offers</h2>
            <MyCarousel/>

            </section>

            <section>
                <h2>Best Seller</h2>
                <section class="py-5">
                    <div class="container px-4 px-lg-5 mt-5">
                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img className="card-img-top" src="https://us.123rf.com/450wm/serezniy/serezniy2301/serezniy230120991/196808174-rack-with-colorful-t-shirts-near-lilac-wall-closeup.jpg?ver=6" alt="T*Shirt de differentes couleurs" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Our collection</h5>
                                            $40.00 - $180.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product"class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                    <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Chemises de types differents" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Our collection</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            <span class="text-muted text-decoration-line-through">$220.00</span>
                                            $180.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product" class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXide71OUvHpFkent4kC04IrEF0NZf20yXrg&usqp=CAU" alt="veste noir et chemise blanche" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Sale Item</h5>
                                            <span class="text-muted text-decoration-line-through">$50.00</span>
                                            $25.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product"class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5gRzSOu59uksRyGSUlu_eCPmFCh-UeOSEg&usqp=CAU" alt="T-shirt avec image de montagne" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">last collection</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            $40.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product"class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9Z1TIbPcRLU9LJ6HTdTWNcTb1nBTbLa42w&usqp=CAU" alt="Robe a motif blanc et noir" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Sale Item</h5>
                                            <span class="text-muted text-decoration-line-through"></span>
                                            $100
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product"class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LAMUrkFwDrVJP5gXB36srkKVlgeDkGxtog&usqp=CAU" alt="ensemble pour enfant avec chaussures rouges" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Fancy Product</h5>
                                           Sold Out
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product"class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQOiQTHybEKT0H4o6OO0PH3Iz7uU081rYxDTplzXUTUavZLK2Qwl3g0ZYr5SwGwysZI&usqp=CAU" alt="homme tenant deux chemises une a carreaux blanche et noir et une bleue marine" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Special Item</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            <span class="text-muted text-decoration-line-through">$20.00</span>
                                            Sold Out
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product"class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img className="card-img-top" src="https://us.123rf.com/450wm/serezniy/serezniy1805/serezniy180521442/101375492-child-dress-on-hanger-on-white-wall-background.jpg?ver=6" alt="Deux chemises pour petites filles une bleue ciel et une rose" />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Popular Item</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            $40.00
                                        </div>
                                    </div>

                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a aria-label="Cliquez ici pour aller a la page product"class="btn btn-outline-dark mt-auto" href="product">See more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section>
                <h2>Shop Location</h2>
                <div id="map"><MyMap/></div>
               


            </section>
        </main><footer>
            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Work Days</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Monday</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tuesday</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Wednsday</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Thursday</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Friday</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Saturday</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sunday</a></li>

                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Work hours</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">9AM-10PM</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">9AM-10PM</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">9AM-10PM</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">9AM-10PM</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">9AM-10PM</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">10AM-11PM</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">10AM-11PM</a></li>

                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Our localisation</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">London</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">4 Grays Inn Rd</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">London EC1N 2NS</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">England</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+19874563210</a></li>

                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2022 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">

                        </ul>
                    </div>
                </footer>
            </div>
        </footer><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script><script src="Home.js"></script></>
);
}