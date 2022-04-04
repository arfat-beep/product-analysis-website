import { Link } from "react-router-dom";
import ImportFromJson from "../../Hook/ImportFromJson";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
  const [reviews, setReviews] = ImportFromJson();
  const imgUrl =
    "https://c0.wallpaperflare.com/preview/132/366/508/computer-laptop-light-glow.jpg";

  // let homeReviews = reviews.slice(0, 3);
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <h1>Your next phone</h1>
          <h1>Your next phone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quia,
            temporibus quibusdam error exercitationem earum porro nisi doloribus
            dolores, possimus doloremque. Quas, libero deserunt? Perferendis
            perspiciatis nesciunt harum inventore deleniti odio a delectus,
            dignissimos officiis? Quidem molestiae officia eos maxime odio
            magnam, quo dolorem aliquam cum voluptatum nobis harum enim.
          </p>
          <Link to="dashboard">Live Demo</Link>
        </div>
        <div className="header-right">
          <img src={imgUrl} alt="" />
        </div>
      </div>
      <div className="curtomer-reviews-container">
        <h1>Customer Reviews</h1>
        <div className="curtomer-reviews">
          {reviews.slice(0, 3).map((review, index) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <Link to="/reviews">See All Reviews</Link>
      </div>
    </div>
  );
};

export default Home;
