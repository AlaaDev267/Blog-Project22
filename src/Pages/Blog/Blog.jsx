import { useState } from 'react';
import Data from "../../Data/posts (1).json";
import Cards from "../../Components/Cards/Cards.jsx";

import { useParams } from "react-router";

export default function Blog() {

  const  {category  }= useParams();
console.log("URL Category:", category);


  const [selectedCategory, setSelectedCategory] = useState( "All");
  const [currentPage, setCurrentPage] = useState(1);
  const[count, setCount] = useState(28)

//json == all data of posts
  const posts = Data.posts;

  const filter = posts.filter((post) => {
  return post.category === category;

});


console.log(filter);


  // Filtering
  const filteredPosts =
    selectedCategory !== "All"
      ? posts.filter(post => post.category === selectedCategory)
      : category
        ? posts.filter(post => post.category === category)
        : posts;
        
  // Pagination
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  const Articles = filteredPosts.slice(startIndex, endIndex);




  return (
    <>
    <section className="section-blog ">
      <div className="container p-2">
        <div className=" text-center mt-5 ">
          <div className="rounded-pill p-2  badge mt-5  ">
    <i className="fa-solid fa-circle fa-beat-fade mx-2"></i>
            <i className="fa-regular fa-newspaper  fs-6 "></i>
            <span className="mx-2 fs-5 fw-medium ">
              مدونتنا
            </span>

          </div>

    <div>
            <h1 className="text-center  text-white fw-bold display-4">
            استكشف
            <span className="max-text d-inline-block mx-1">
              مقالاتنا
              </span>
          </h1>
          <p className="text-center gray-color fw-medium   ">
اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
    </p>

    </div>


        </div>



      </div>

    </section>
    <section>


      <nav className="Article-nav d-block d-md-flex d-lg-flex justify-content-lg-between align-items-center  p-1  bg border-1 border-bottom border-dark ">
 <div className="searchInput">
  <input type="search" className="mx-3 mt-2 "placeholder=" ابحث عن مقالات....."/>
  <i class="fa-solid fa-magnifying-glass"></i>
 </div>
 <div className="d-flex gap-2  gray-color mt-4 fw-bold ">


<ul className="">
  <li className="all-article" >

<button onClick={() =>
 setSelectedCategory("All")  }>
جميع مقالات

</button>


  </li>
  <li className="mt-3 mb-2" >
<button onClick={() =>{

 setSelectedCategory("إضاءة"),
 setCount("4")

}
}>

اضاءة
</button>

  </li>

  <li>
<button  onClick={() => {
  setSelectedCategory("بورتريه"),
  setCount("6")

}} >
  بورتيه
</button>
  </li>
    <li className="mt-3 mb-2">

 <button  onClick={() =>{ setSelectedCategory("مناظر طبيعية"),
 setCount("4")

 }
 } >
   مناظر طبيعية
 </button>


  </li>
      <li className="mb-2"  >


<button onClick={() => { setSelectedCategory("تقنيات"),
setCount("9")
}


} >
تقنيات
</button>

  </li>
      <li  >

<button onClick={() => {setSelectedCategory("معدات"),
setCount("5")

}
} >
معدات
</button>


  </li>
</ul>
 </div>


      </nav>

    </section>
<div className="container ">
<div className="cards">
  <div className="d-block d-lg-flex justify-content-between align-items-center mt-4 p-3">
    <div className="">
      <h5 className="gray-color mx-2 fw-medium ">
        عرض
        <span className=" mx-2 fw-bold fs-4 text-white">
        {count}
        </span>
         مقالات
      </h5>
    </div>
    <div className="d-inline-block d-lg-flex  align-items-center p-1  btn-bar">

<i className="bi bi-grid fs-3 mt-1 mx-1 grid-bar"></i>
  <i class="fa-solid fa-bars fs-3 "></i>
    </div>

  </div>



    <Cards articles={Articles}           />



<div className="container d-flex justify-content-center align-content-center carousel gap-2 mb-3">
<button className="  mx-2 ">
<i className="fa-solid fa-chevron-right"></i>
</button>
<button onClick={() => setCurrentPage(1)}>
  1
  </button>
  <button  onClick={() => setCurrentPage(2)} >
    2
    </button>
    <button onClick={() => setCurrentPage(3)} >
      3
      </button>
      <button  onClick={() => setCurrentPage(4)}>
        4
        </button>
        <button  onClick={() => setCurrentPage(5)}>
          5
        </button>

<button className="  mx-2">
<i className="fa-solid fa-chevron-left"></i>
</button>



</div>
<div className="d-flex justify-content-center mb-4">
<span className="page fw-bold">
  صفحة
<span className="mx-1 ">
   {currentPage}
</span>
  من
  5
</span>
</div>
</div>
</div>

  </>

  )
}
