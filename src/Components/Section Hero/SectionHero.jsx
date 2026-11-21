
import FeatureCard from "../FeatureGridCard/FeatureCard";

import { useNavigate } from "react-router";
import Data from "../../Data/posts (1).json";



export default function SectionHero() {

  const navigate = useNavigate();



const categories =Data.categories;
console.log(categories);
//








  return (
    <>
    <section className="section-hero   ">
      <div className="container p-2 ">

             <div className="top-section mt-5 text-center  ">
          <div className="p-3 rounded-pill badge ">
            <i className="fa-solid fa-circle fa-beat-fade fa-2xs"></i>
            <i className="fa-solid fa-circle fa-beat-fade mx-2"></i>
              <span className="fw-bold mx-3 ">
    مرحبا بك في العدسة
              </span>
              </div>
              <div className="">
                <h2 className="display-4 text-center text-white fw-bold mb-3">
                  اكتشف
                <span className="mx-2 d-inline-block max-text">
                  فن
                </span>
                <br/>
التصوير الفوتوغرافي

                </h2>
                <p className="text-center gray-color mt-4">
انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.

استكشف المقالات


                </p>

              </div>
              <div className=" d-block d-md-block d-lg-flex justify-content-center mt-5 gap-4 moro-info  align-items-center  ">

 <button className="p-3 rounded-pill bg-orange text-white fw-bold  read   ">
استكشف المقالات
<i className="fa-solid fa-arrow-left-long mx-1"></i>
                </button>


  <button className=" p-3 rounded-pill btn-more text-white fw-bold mt-2  ">
                  <i class="fa-solid fa-circle-info mx-2 "></i>
اعرف المزيد



                </button>



              </div>




<div className="row cards  d-flex justify-content-center    gap-2  mt-5   ">

  <div className="col-4 col-md-5 col-lg-2 text-center">
    <i className="fa-solid fa-newspaper max-text fs-4"></i>
    <h4 className="mt-3 max-text fw-bold">50+</h4>
    <span>مقالة</span>
  </div>

  <div className="col-4  col-md-5 col-lg-2 text-center">
    <i className="fa-solid fa-people-line max-text fs-4"></i>
    <h4 className="mt-3 max-text fw-bold">+10ألف</h4>
    <span >قارئ</span>
  </div>

  <div className="col-4  col-md-5 col-lg-2 text-center">
    <i className="fa-solid fa-folder-open max-text fs-4"></i>
    <h4 className="mt-3 max-text fw-bold">4</h4>
    <span>تصنيفات</span>
  </div>

  <div className="col-4 col-md-5 col-lg-2 text-center">
    <i className="fa-solid fa-pen-nib max-text fs-4"></i>
    <h4 className="mt-3 max-text fw-bold">6</h4>
    <span>كاتب</span>
  </div>

</div>










              </div>









        </div>












    </section>
  <div className="p-3 features">
  <div className="p-5">
       <div>
          <div className="p-3 rounded-pill badge ">
            <i className="fa-solid fa-circle fa-beat-fade fa-2xs"></i>
            <i className="fa-solid fa-circle fa-beat-fade mx-2"></i>
              <span className="fw-bold mx-2 ">

مميز
              </span>
              </div>
       </div>
        <h1 className="fw-bold text-white display-3">
          مقالات مختارة
        </h1>
      <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
          <span className="text-color">
          محتوى منتقى لبدء رحلة تعلمك
        </span>
        <button className=" p-3 rounded-4 fw-bold btn-all text-white ">
          عرض الكل
         <i class="bi bi-chevron-left mx-1 fw-bold"></i>
        </button>
      </div>


    </div>
    <FeatureCard/>
  </div>
  <div className=" discovery p-5">
   <div className="text-center container p-4 ">
    <span className="badge ">

التصنيفات
    </span>
    <h1 className="text-white fw-bold ">
      استكشف حسب الموضوع
    </h1>
    <span className="text-color ">
      اعثر على محتوى مصمم حسب اهتماماتك


    </span>

   </div>
<div className=" mb-5 mt-5">

<div className="row card-category">
  {categories.map((item) =>
    <div className="col-6 col-lg-3 mb-4 " key={item.name} onClick={() =>  navigate(`/blog/${item.name}`)  }>
      <div className="card p-3">

       <p>
        {item.name}
       </p>
       <span>
        {item.count}
       </span>
      </div>
    </div>
  )}
</div>





  </div>
</div>

     <div className="Subscribe

      p-5 text-center ">




                <div className="subscribe-card  rounded-5   p-3  mx-auto">
             <div>
                   <i class="fa-regular fa-envelope mt-2  fs-2 mb-4"></i>
                  <h2 className="text-white fw-bold mb-4 ">
                    اشترك في

                  </h2>
                  <p className="mb-4 text-color ">
                    احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                  </p>
             </div>
                  <div className="mt-2 ">
                    <form>
                      <input  placeholder="ادخل بريدك الالكتروني" className="mx-2 w-50 bg-black p-3  "/>
                      <button className="btn-subscribe p-3 rounded-4 fw-bold ">
                        اشترك الان
                        </button>
                    </form>



                  </div>

                  <div className="d-flex gap-3 justify-content-center  p-4  mt-2 ">
                    <div>


                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" className="rounded-5 "/>
             <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" className="rounded-5 "/>

             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" className="rounded-5 "/>
                    </div>



<span className="text-color">
  انضم لـ
  <span className="text-white fw-bold">
+10,000

    </span>

  مصور
</span>

•

                    <span className="text-color">

بدون إزعاج

                    </span>

•

                    <span className="text-color">

إلغاء الاشتراك في أي وقت
                    </span>

                  </div>
                </div>


              </div>


    </>
  )
}
