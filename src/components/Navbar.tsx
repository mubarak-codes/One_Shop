


const Navbar = ()=>{


  return(
    <>
      <section>
        <nav className="navbar navbar-expand fixed-top bg-snow">
          <div className="px5 px7-sm px9-md flex items-center w100">
           {/*nav brand*/}
            <div className="navbar-brand">
              <h1 className="ff-rubik fs8 text-blue75">ONE SHOP</h1>
            </div>

            {/*nav items*/}
            <div className="navbar-nav ms-self flex gap3 fs6 ">
              <i className="bi bi-person-circle nav-item hover-opacity75"></i>
              <div className="relative">
                <i class="bi bi-cart nav-item hover-opacity75"></i>
                <span className="absolute fs1 -right10px px1 br-circle bg-blue text-white">2</span>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}


export default Navbar;
