import { Link } from "react-router-dom";
import ImportFromJson from "../../Hook/ImportFromJson";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
  const [reviews, setReviews] = ImportFromJson("reviews.json");
  const imgUrl =
    "https://c0.wallpaperflare.com/preview/132/366/508/computer-laptop-light-glow.jpg";

  // let homeReviews = reviews.slice(0, 3);
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <h1>Laptop Seller</h1>
          <h1>Explore Mac</h1>
          <p>
            The MacBook is Apple's third laptop computer family, introduced in
            2006. Prior laptops were the PowerBook and iBook. In 2015, new
            MacBooks featured Apple's Retina Display and higher resolutions, as
            well as the Force Touch trackpad that senses different pressure
            levels.
          </p>
          <Link to="dashboard">Live Demo</Link>
        </div>
        <div className="header-right">
          <img src={imgUrl} height={500} alt="" />
        </div>
      </div>
      <div className="curtomer-reviews-container">
        <h1>Customer Reviews ({reviews.slice(0, 3).length}) </h1>
        <div className="curtomer-reviews">
          {reviews.slice(0, 3).map((review, index) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <Link to="/reviews">See All Reviews ({reviews.length}) </Link>
      </div>
    </div>
  );
};

export default Home;
