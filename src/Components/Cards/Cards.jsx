
import { useNavigate } from "react-router";


export default function Cards({ articles}) {

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/details/${id}`);
  }




  return (
   <>


   <div className="cards-posts  p-3"  >
    <div className="row">
   {articles.map( (post) => (
    <div className="col-12 col-md-6 col-lg-4  gap-2 card-post mt-4  "  onClick={() => handleClick(post.id)}>


<div className="container-img">

   <span id="catagory">
           {post.category}
          </span>
          <img src={post.image} alt="img-card" className=" "/>

</div>





        <div className="content-card p-3 ">
          <div className="d-flex justify-content-start gap-3 ">
            <span className="gray-color  ">
              <i class="fa-solid fa-clock mx-2 "></i>
              {post.readTime}
            </span>

            <span className="gray-color"id="date">
 .
                    {post.date}
            </span>

          </div>
          <h6 className=" mt-3 f6-6 title ">
        {post.title}
          </h6>
          <p className="mb-2 mt-3 fs-6 gray-color ">
        {post.excerpt}
          </p>

        </div>
        <div className="end-card d-flex justify-content-between p-3 align-items-center mt-auto">
          <div className="d-flex gap-3 ">

            <img src={post.author.avatar} alt="img-info-person" className="w-25 rounded-5"/>
            <div className="info-person">
              <h6 className="text-white fw-medium fs-6">
                {post.author.name}

              </h6>
              <span>
                {post.author.role}

              </span>

            </div>



          </div>
          <div className="p-2  rounded-pill arrow">



<i className="fa-solid fa-chevron-left   "></i>


          </div>

        </div>

      </div>
   ))}

    </div>


   </div>

   </>
  )
}
