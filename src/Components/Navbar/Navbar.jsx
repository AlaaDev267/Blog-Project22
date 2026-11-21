



import { NavLink } from "react-router";
import  logoBlog  from "../../assets/logo-GdqARQRt.png";


export default function Navbar() {
  return (
  <>

<nav className="navbar md:navbar-expand bg   ">
  <div className="container d-flex justify-content-between align-item-center">

   <div className="d-flex  gap-3  align-items-center logo-page">
    <div className="logo ">
      <img src={logoBlog} alt="logo-blog" />

    </div>
    <div className="blog-naming ">
      <h2 className="fs-5 text-white p-2 fw-bold mb-0 mt-1 ">
        عدسة
      </h2>
      <p className="fs-6 orange fw-medium ">
عالم التصوير الفوتوغرافي
      </p>

    </div>




   </div>
   <div className="links-navgation  rounded-pill   d-none d-md-none d-lg-flex justify-content-around align-items-center  text-white      ">

  <ul className="mt-2 text-center">
    <li id="home" className="fw-bold px-2">

<NavLink to="/">
  الرئسية
</NavLink>
    </li>
   <li id="blog">
<NavLink to="blog">
  المدونة
</NavLink>
    </li>

   <li id="about-us">
<NavLink to="about">
  من نحن
</NavLink>


    </li>
  </ul>
 </div>

 <div className="more d-none d-md-none d-lg-block">
  <div className="d-flex justify-content-center gap-3 align-item-center">


  <i className="fa-solid fa-magnifying-glass gray-color mt-4 fs-4"></i>

<button className="text-white rounded-pill p-3 bg-orange fw-bold w-100 fs-6 read ">
  ابدا القراءة
</button>
  </div>

 </div>





    <button className="btn-icon navbar-toggler d-lg-none" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>


 <dialog className="drawer drawer-end" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body mb-2 md:mb-0">
        <ul className="nav navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
              Menu
            </button>
            <div className="menu">
              <a className="menu-item" href="#">Action</a>
              <a className="menu-item" href="#">Another action</a>
              <hr className="menu-divider"/>
              <a className="menu-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="hstack gap-2" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn-solid btn-icon theme-secondary" type="submit">
            <svg className="bi" width="16" height="16"><use href="#search" /></svg>
          </button>
        </form>
      </div>
    </dialog>

   </div>
























</nav>



  </>

















  )
}
