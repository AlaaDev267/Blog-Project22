
import Data from "../../Data/posts (1).json";


import { useNavigate } from "react-router";




export default function FeatureCard() {
const posts =  Data.posts
const firstThreePosts = posts.slice(0, 3);
console.log(firstThreePosts);


  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/details/${id}`);

  }






  return (
  <>
  <div className="grid-card-feature container">
    {posts.slice(0, 3).map((post) => (

<div className=" d-sm-block d-lg-flex   mb-5 rounded-4 info-grid" onClick={() => handleClick(post.id)}>
<div className="">
    <img src={post.image} className=" h-100 img-card  w-100"/>
</div>
<div className="p-4 mt-2">
  <div className="d-flex gap-3  ">
    <span className="fw-bold category mt-1" >
      {post.category}
    </span>
    <span className="text-color mx-2 mt-2">
      {post.readTime}
    </span>
  </div>
<div className="">
    <h3 className="mt-3 text-white fw-bold">
    {post.title}
  </h3>
  <p className="text-color mt-3">
    {post.excerpt}
  </p>
</div>
<div className="d-flex justify-content-lg-between align-items-center info">
  <div className="d-flex gap-2" >
    <img src={post.author.avatar} className="rounded-5 w-25"/>
    <div>
      <span className="fw-bold text-white">
        {post.author.name}
      </span>
      <br/>
       <span className="text-color">
        {post.author.role}
      </span>
    </div>
  </div>
  <div>
    <span className="read-article fw-bold">
      اقرا مقال
      <i class="bi bi-arrow-left mx-2 "></i>
    </span>
  </div>

</div>
</div>

</div>
))}
  </div>




  </>
  )
}
