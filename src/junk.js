//TODOS:
//hoe to dec page loadd time on your site? ref: goskills.com , qs: 18
// Add text decoration to all links in announcenets, future trainings, quick links ... 4/6/20
//UPDATE EMAIL ADDRESS AND NAME OF YOUR SITE
//use icon for home in navbar
// MAKE NAV BAR STICKY
// TOOL: Jshint : shows info. about run time errors(look for syntactical errors) >> use: jshint filename ; jshint app.js >> on terminal
{
  /* <nav class="navbar navbar-expand-sm navbar-dark navbar-custom p-0">
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div> </div>
          <div
            class="collapse navbar-collapse row "
            style={{ background: this.state.color }}
            id="collapsibleNavbar"
          >
            <div class="col-md-1 "></div>

            <div class="col-md-3">
              <a
                // class="navbar-brand"
                class="nav-link"
                href="#"
                style={{ color: this.props.textColor }}
              >
                MicroSafety
              </a>
            </div>

            <div class="col-md-2 "></div>

            <div class="col-md-2">
              <a
                class="nav-link"
                href="/WOMEN"
                style={{ color: this.props.textColor }}
              >
                About us
              </a>
            </div>
            <div class="col-md-2">
              <a
                class="nav-link"
                href="/MEN"
                style={{ color: this.props.textColor }}
              >
                Audit and Consultency
              </a>
            </div>

            <div class="col-md-2">
              <a
                class="nav-link"
                href="/here"
                style={{ color: this.props.textColor }}
              >
                Training
              </a>
            </div>

            {/* <div class="col-md-1 ">
              <a
                class="nav-link"
                href="/GIFTS"
                style={{ color: this.props.textColor }}
              >
                Membership
              </a>
            </div> */
}
{
  /* <div class="col-md-2">
              <a
                class="nav-link"
                href="/LOGIN"
                style={{ color: this.props.textColor }}
              >
                Login
              </a>
            </div>
            <div class="col-md-2">
              <a
                class="nav-link"
                href="/CART"
                style={{ color: this.props.textColor }}
              >
                Cart
              </a>
            </div>
            <div class="col-md-1 "> </div>
          </div>
        </nav>  */
}
/////////////////////////////////////////////////////////////////////////////

<nav class="navbar navbar-expand-lg justify-content-center navbar-light bg-light">
  <a class="navbar-brand" href="#">
    MicroSafety
  </a>

  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#collapsibleNavbar"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">
          About us
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Audit and Consultency
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Training
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Membership
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Login
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Cart
        </a>
      </li>
    </ul>
  </div>
</nav>;

////////////////////////////////////////////////////////////////////
// carousel implementation
// you will need to resize your image if you want to limit it's height.... In other words, IN PHOTOSHOP or some other IMAGE EDITOR
// it works by aspect ratio, you can't set a fixed css height
//If you want a 400px x 150px carousel, resize/crop your images (in photoshop) to 400px x 150px (or other equivalent aspect ratio, 800px x 300px).
// Then display your carousel at 100% width.

<div class="contentarea">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div
      class="carousel-inner carousel-inner-set"
      role="listbox"
      // style=" width:100%; height: 500px !important;"
    >
      <div class="carousel-item active">
        <img class="d-block w-100" src={Team} alt="First slide" />
        <div class="carousel-caption d-none d-md-block">
          <strong>OUR TEAM</strong>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={Me} alt="Second slide" />
        <div class="carousel-caption d-none d-md-block">
          <strong>MYSELF</strong>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={Partner} alt="Third slide" />
        <div class="carousel-caption d-none d-md-block">
          <strong>MY PARTNER</strong>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>;
/////////////////////////////////////////
//related to brand name
{
  /* <span class="primarytextcolor">Safe</span>
              Solutions */
}
{
  /* <p>SafeSolutionsInternational</p> */
}
{
  /* <br />
            <strong>International</strong> */
}
/////////////////////////////////////////////////////////
// 22/5/20
//row 1 AND 2
<div class="row ar1">
              <div class="col-sm-6">
                <h2>SSI - Safe Solutions International</h2>
                <p>
                  Delivering best quality Training and provide Consultancy
                  services in Quality, Health, Safety & Environment.
                </p>
              </div>
              <div class="col-sm-6">
                <img src={eqhse1} alt="leaf img" />
              </div>
            </div>

            <div class="row ar2">
              <div class="col-sm-6">
                <h2>Our Mission</h2>
                <p>
                  SSI team has a strong commitment towards quality and
                  confidentiality which we prove while helping organizations to
                  align their QHSE systems and practices. Our trainings enhance
                  the employees’ knowledge & awareness to perform their job and
                  everyday work confidently with high quality and safety.
                </p>
              </div>
              <div class="col-sm-6">
                <img src={ssi} alt="ssi img" />
              </div>
            </div>
            ///////////////////////////////////////////////////



            //////////////////////////////////////
            //side bar code:
            //have updated arrow func. on 11/6/20 , now check if this works properly
            //** whenever you use map method to render a list of items , you need to add key attribute for each item
            //** or,  
            //{this.state.announcements.map(announcement => <li key={announcement}><a href="/"> {announcement} </a> </li>  )} ; since every announcement is unique so u can use it as key also
            <div class="col-sm-3 sideBar container-fluid">
            <div className="bordderbotton">
              <h5 className="sidebrheading">Announcements</h5>
              
              <ul> {this.state.announcements.map((announcement,key) => (<li key={key}><a href="/"> {announcement} </a> </li>))} </ul>

            </div>
            <br />
            <br />
            <br />
            {/* <br /> */}

            <div className="bordderbotton">
              <h5 className="sidebrheading">
                {/* Upcoming Trainings */}
                Future Events
              </h5>
              <ul>
                {this.state.trainings.map((training) => (
                  <a href="/" style={{ color: "black" }}>
                    {" "}
                    {training}{" "} 
                  </a>
                ))}
              </ul>
            </div>
          </div>
            ///////////////////////////////////////////
            //27/5/20
            //quick links backup
            
            ///////////////////////////
           /// announcements & future trainings backup 31st MimeTypeArray,2020
         <div className="col-md-3">
           <Events />
         </div> 
          <div className="col-md-3">
           <Announcements />
         </div>