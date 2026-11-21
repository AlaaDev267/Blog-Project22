import Data from "../../Data/posts (1).json";
import { useParams } from "react-router";

export default function Details() {

const { id } = useParams();

console.log(id);
//*


const index = Data.posts.findIndex(
  (item) => item.id === Number(id)
);



const posts = Data.posts.find(
  (item) => item.id === Number(id)
);





//json === data*
const content = Data.posts[index].content;
const sections  = content.split("##")

console.log(sections);




const paragraph = content.replace(/##/g, "").split("\n\n");
console.log(paragraph);




  return (
   <>
  <section className="section-details">

  <div className="section-top  ">
        <div className="d-flex justify-content-start mx-5 info-card  ">
        <i class="fa-solid fa-house mt-2 mx-2"></i>
<i class="bi bi-chevron-left mt-1 mx-1"></i>

<span className="mt-1   ">
  المدونة
</span>
<i class="bi bi-chevron-left  mx-2 mt-1 "></i>
<span className="category mt-1 ">
{posts.category}
  </span>

      </div>

      <img src={posts.image} alt=""   className="w-100 min-vh-100"/>



        <div className="section-content container ">
   <div className="d-flex justify-content-start align-items-center">
           <span id="category" className="bg-orange text-white rounded-pill p-1">
            {posts.category}
          </span>
          <span id="date" className="text-white mx-2">
            <i class="fa-regular fa-calendar mx-2"></i>
            {posts.date}
          </span>
          <span span className="text-white">
           <i class="fa-solid fa-clock  mx-2"></i>
            {posts.readTime}
          </span>
   </div>
   <h1 className="fw-bold text-white mt-3 " >
    {posts.title}
   </h1>
   <div className="d-flex  info-card mt-5 align-content-center ">
    <div>
    <img src={posts.author.avatar} className="rounded-pill w-75 "/>
    </div>
    <div className="mt-2">
      <span id="name" className="text-white fw-bold mb-2  d-block">
        {posts.author.name}
      </span>


      <span>
        {posts.author.role}
      </span>
    </div>

   </div>

</div>

</div>
  <div className="section-content-detalis  ">
    <div className="container ">
      <div className="row">
        <div className="col-lg-8  ">
          <div className=" text p-1 rounded-4 mt-4 ">
            <p className="mt-3 mx-4 ">
              {posts.excerpt}
            </p>

          </div>
        <p className="mt-4 text-color mx-2 fs-5">
          {sections[0]}
        </p>
<div className="d-flex gap-3 align-item-center mt-5">
  <div className="camera">
    <i class="fa-solid fa-camera fs-1 mt-1 "></i>
  </div>
  <div>
    <h2 className="mt-2 fw-bold text-white">
      {paragraph[1]}
    </h2>

  </div>



</div>
 <p className="mt-4 text-color ">
      {paragraph[2]}
    </p>

<div className="d-flex gap-3 align-item-center mt-5">
  <div className="camera">
    <i class="fa-solid fa-camera fs-1 mt-1 "></i>
  </div>
  <div>
    <h2 className="mt-2 fw-bold text-white">
      {paragraph[3]}
    </h2>

  </div>



</div>
<p className="mt-4 text-color ">
  {paragraph[4]}
</p>

<div className="d-flex gap-3 align-item-center mt-5">
  <div className="camera">
    <i class="fa-solid fa-camera fs-1 mt-1 "></i>
  </div>
  <div>
    <h2 className="mt-2 fw-bold text-white">
      {paragraph[5]}
    </h2>

  </div>



</div>
<p className="mt-4 text-color ">
  {paragraph[6]}
</p>

<div className="d-flex gap-3 align-item-center mt-5">
  <div className="camera">
    <i class="fa-solid fa-camera fs-1 mt-1 "></i>
  </div>
  <div>
    <h2 className="mt-2 fw-bold text-white">
      {paragraph[7]}
    </h2>

  </div>



</div>
<p className="mt-4 text-color ">
  {paragraph[8]}
</p>

<div className="d-flex gap-3 align-item-center mt-5">
  <div className="camera">
    <i class="fa-solid fa-camera fs-1 mt-1 "></i>
    </div>
  <h2 className="mt-2 fw-bold text-white">
      {paragraph[9]}
    </h2>





</div>
<p className="mt-4 text-color ">
  {paragraph[10]}
</p>



<div className="d-flex gap-3 align-item-center mt-5">
  <div className="camera">
    <i class="fa-solid fa-camera fs-1 mt-1 "></i>




  </div>


  <h2 className="mt-2 fw-bold text-white">
      {paragraph[11]}
    </h2>

</div>
<p className="mt-4 text-color ">
  {paragraph[12]}
</p>



<div className="d-flex gap-3 align-item-center mt-5">
  <div className="camera">
    <i class="fa-solid fa-camera fs-1 mt-1 "></i>
  </div>
  <h2 className="mt-2 fw-bold text-white">
      {paragraph[13]}
    </h2>




</div>
<p className="mt-4 text-color ">
  {paragraph[14]}
</p>








<div className="card-tags  p-3 rounded-4 mt-5">
  <div className="d-flex gap-2




























  ">
    <div>
      <i class="fa-solid fa-tags fs-6 "></i>
    </div>
    <div>
    <span className="fw-bold text-white fs-5 mt-3">
      الوسوم
    </span>
    </div>


  </div>
     <div className="d-flex justify-content-start gap-3 mt-4 tags">
      <p>
        #
        {posts.tags[0]}
      </p>
        <p>
        #
        {posts.tags[1]}
      </p>
    <p>
        #
        {posts.tags[2]}
      </p>

    </div>

</div>
<div className="d-flex justify-content-between align-items-center mt-5 share rounded-4 p-4">
    <div className="d-flex gap-2 align-items-center ">
    <div>
     <i class="fa-solid fa-share-nodes"></i>
    </div>
    <div>
    <span className="fw-bold text-white mt-4">

شارك المقال
    </span>
    </div>


  </div>
     <div className="d-flex  gap-3   ">
   <i class="fa-brands fa-x-twitter"></i>
   <i class="fa-brands fa-linkedin"></i>
   <i class="fa-brands fa-whatsapp"></i>

<i class="fa-solid fa-link"></i>
    </div>



</div>






  <div className="d-flex  gap-3 align-items-center  author rounded-4 p-3  p-2 mt-5">
    <div>
      <img src={posts.author.avatar} alt="" className="rounded-5"/>
    </div>
 <div>
  <span className="orange " >
    كاتب المقال
  </span>
  <h5 className="mb-1 fw-bold text-white mt-1">
{posts.author.name}
  </h5>
  <p className="text-color mb-2">
    {posts.author.role}
  </p>
  <p className="text-color">
مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
  </p>
  </div>




  </div>
</div>






        <div className="col-lg-4  mt-2 p-3 ">
          <div className="menu rounded-4   mb-5  ">

       <div className="d-flex  gap-3  mb-5  ">
             <div>
              <i class="fa-solid fa-bars bars fs-4 mx-1 mt-1"></i>
            </div>
            <div>
             <span className="text-white fs-5 fw-bold ">
              محتويات المقال
              </span>
            </div>

          </div>

          <div className="menu-choose   ">
            <div className="d-flex gap-3 mb-4  mx-2">
              <span>
                1
              </span>
              <p className=" text-color mt-1">
                 {paragraph[1]}
              </p>

            </div>

   <div className="d-flex gap-3  mb-4 mx-2   ">
              <span>
                2
              </span>
              <p  className="text-color mt-1"   >
                 {paragraph[3]}
              </p>

            </div>
               <div className="d-flex gap-3 mb-4  mx-2 mt-1">
              <span>
                3
              </span>
              <p className="text-color mt-1" >
                 {paragraph[5]}
              </p>

            </div>
              <div className="d-flex gap-3  mb-4 mx-2 mt-1">
              <span>
                4
              </span>
              <p className="text-color mt-1"  >
                 {paragraph[7]}
              </p>

            </div>
             <div className="d-flex gap-3 mt-1  mb-4 mx-2">
              <span>
                5
              </span>
              <p  className="text-color mt-1"   >
                 {paragraph[9]}
              </p>

            </div>
    <div className="d-flex gap-3 mt-1  mb-4 mx-2">
              <span>
                6
              </span>
              <p  className="text-color mt-1"   >
                 {paragraph[11]}
              </p>

            </div>

    <div className="d-flex gap-3 mt-1  mb-4 mx-2">
              <span>
                7
              </span>
              <p  className="text-color mt-1"   >
                 {paragraph[13]}
              </p>

            </div>



          </div>





          <div>

          </div>

       </div>
       <div className="d-flex justify-content-center   p-3   card-time  rounded-4    mt-5">
        <div className="d-flex  flex-lg-column  w-50     mt-2     mx-3   card-read ">

       <i class="fa-regular fa-clock    mb-3   mt-2  "></i>

          <span className="fw-bold text-white text-center mx-3  read-text  mb-2">
            {posts.readTime}
          </span>


          <span className=" mx-3   ">
            وقت القراءة
          </span>
       </div>

        <div className="d-flex flex-lg-column w-50 mt-2   card-read">
          <i class="fa-regular fa-calendar mx-5 mt-2  mb-3"></i>
          <span className="mb-2 fw-bold mx-4">
            {posts.date}
          </span>
          <span className="mx-4">
            تاريخ النشر
          </span>
        </div>

       </div>
       <div className="d-flex flex-column justify-content-center more-card  text-white p-3  mt-5 p-2">
        <i class="fa-solid fa-envelope fs-3 mt-3 mb-3"></i>
        <span className="text-center mt-1 fw-bold">
          لا تفوّت جديدنا
        </span>
        <span className="text-center mt-3 text-color">
          اشترك للحصول على أحدث المقالات


        </span>
        <button className="mt-4 mx-3 p-3 rounded-5">
          تصفح المزيد
        </button>
       </div>


        </div>

      </div>



    </div>






</div>







  </section>


   </>
  )
}
