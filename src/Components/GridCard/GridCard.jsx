
import Data from "../../Data/posts (1).json";
export default function GridCard() {
const posts = Data.posts
  return (
   <>
   <div className="Grid-card">
    <div className="container p-4">


 {posts.map( (post) => (
        <div className="d-block d-md-flex d-lg-flex align-items-center mb-4  ">


            <img src={post.image} alt="" className="img-post"/>



          <div className=" content-grid-card p-3  text-white w-100">
            <div className="d-flex justify-content-start align-content-center gap-3">
              <span id="category-grid" className="">
                {post.category}
              </span>
              <span className="mt-1 gray-color">
                {post.readTime}

              </span>
              <span className="gray-color mt-1">
                {post.date}
              </span>


            </div>
 <div>
            <h4 className="mt-3 fw-bold">
              {post.title}
            </h4>

            <p className="mt-1 gray-color">
              {post.excerpt}
            </p>
          </div>



     <div className="d-flex justify-content-between align-items-center ">

            <div className="d-flex gap-2  info">
              <img src={post.author.avatar} className="  rounded-pill"/>
              <div>
                <span>
                  {post.author.name}
                </span>
                <br/>
                    <span className="gray-color ">
                  {post.author.role}
                </span>
              </div>

            </div>
            <div>
              <span className="read-post ">
                اقرأ المقال
              <i className="fa-solid fa-arrow-left-long mx-2 mt-3"></i>
              </span>
            </div>

          </div>




          </div>



        </div>
 ))}
</div>





   </div>




   </>
  )
}
