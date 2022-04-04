import { useEffect, useState } from "react";

const ImportFromJson = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(props)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};
export default ImportFromJson;
