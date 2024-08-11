import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./AppV1";

// import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={12} />
    <StarRating maxRating={5} defaultRating={3} />
    <StarRating maxRating={5} size={12} color="red" className="test" />
    <StarRating
      maxRating={5}
      size={30}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
