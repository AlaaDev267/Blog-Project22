


export default function Footer() {
  return (
  <>


<footer className="bg text-white p-3">
<div id="container">
  <div className="row d-flex justify-content-between  ">
      <div className="col-12 col-md-6  col-lg-4">
        <div className="logo d-flex gap-3">
         <span className="fs-5  logo-blog  fb-1 bg-orange  ">  ع</span>
         <h6 className="mt-2 fs-5 fw-bold">
          عدسة
         </h6>

        </div>

        <div className="info mt-4 ">
          <span className="gray-color fs-6">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
          </span>

        </div>

<div className="d-flex gap-3 mt-5 mb-3">
  <i className="fa-brands fa-x-twitter fs-3 p-1"></i>
  <i className="fa-brands fa-github fs-3 p-1"></i>
  <i className="fa-brands fa-linkedin fs-3 p-1"></i>
  <i className="fa-brands fa-youtube fs-3 py-1"></i>
</div>

      </div>
      <div className="col-12 col-md-6   col-lg-2">
        <div className="d-flex justify-content-start align-items-center gap-2">
          <span className="line">
          </span>
          <h6 className="fe-medium  mt-2" >
            استكشف
          </h6>


        </div>
        <div className="links gray-color ">
          <ul>
            <li>
              الرئيسية

            </li>
            <li>
              المدونة

            </li>
            <li>
             من نحن
            </li>
          </ul>



        </div>



        </div>



           <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex justify-content-start align-items-center gap-2  ">
              <span className="line"></span>
              <h6 className="mt-2 fw-medium ">
               التصنيفات
              </h6>
              </div>


          <div className=" gray-color">
                 <ul>
                <li>
                  إضاءة

                </li>
                <li>
بورتريه

                </li>
                 <li>
مناظر طبيعية

                </li>
                <li>
                  تقنيات

                </li>
              </ul>
          </div>
             </div>




          <div className="col-12 col-md-6 col-lg-3">


            <div className="d-flex justify-content-start  align-items-center gap-2  ">


            <span className="line">

            </span>
<h6 className="fw-medium mt-2">
  ابقى على اطلاع
</h6>
</div>
<p className="fs-6 mt-4 gray-color ">
  اشترك للحصول على أحدث المقالات والتحديثات.


</p>


<form className="">
  <input  placeholder="ادخل البريد الالكتروني"  className="w-100 "  />
  <button className="btn mt-3 w-100 fw-bold ">
 اشتراك
  </button>


</form>

        </div>


      </div>







</div>
<div className="container  mt-3">
   <div className="d-block d-md-flex d-lg-flex   justify-content-between align-items-center ">
        <div>
          <p className="gray-color">
           	&copy;
             2026 عدسة. صنع بكل🧡  جميع الحقوق محفوظة.
          </p>
        </div>
        <div className="gray-color privacy">
          <span>  سياسة الخصوصية</span>
          <span className="mx-3">  شروط الخدمة    </span>
        </div>
      </div>
</div>








</footer>




  </>
  )
}
