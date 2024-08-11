import { useState } from "react";
import PropTypes from "prop-types";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  justifyContent: "flex-start", // Align items to the start of the container
};

const starContainerStyle = {
  // display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // padding: "10px",
  // borderRadius: "5px",
  // // fontSize: "24px",
  // color: "#FFD700",
  // Removed maxWidth and margin: "auto"
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func, // Note: Not marked as .isRequired
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [temRating, SetTemRating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
    if (typeof onSetRating === "function") {
      // Check if onSetRating is a function
      onSetRating(rating);
    }
  }
  const textStyle = {
    margin: 0,
    textAlign: "center",
    // color: "#333",
    // Removed or adjusted marginTop
    color,
    fontSize: `${size / 1.5}px`,
  };
  const stars = Array.from({ length: maxRating }, (_, index) => {
    // Determine the state of each star based on the rating value.
    // const fillLevel = rating - index;
    // let starFill;
    // let full;
    // if (fillLevel >= 1) {
    //   starFill = "#FFD700"; // Fully filled star
    //   full = true;
    // } else {
    //   starFill = "#ccc"; // Empty star
    //   full = false;
    // }
    // return <span key={index}>{starChar}</span>;
    return (
      <Star
        full={temRating ? temRating >= index + 1 : rating >= index + 1}
        onRating={() => handleRating(index + 1)}
        onHoverIn={() => SetTemRating(index + 1)}
        onHoverOut={() => SetTemRating(0)}
        key={index}
        // starFill={starFill}
        color={color}
        size={size}
      />
    );
  });
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>{stars}</div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[temRating ? temRating - 1 : rating - 1]
          : temRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ full, onRating, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    display: "inline-block", // Ensures stars line up horizontally
    width: `${size}px`, // Sets the width of the star
    height: `${size}px`, // Sets the height of the star
    // margin: "0 2px", // Adds some space between the stars
    cursor: "pointer",
  };
  return (
    <span
      style={starStyle}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      onClick={onRating}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

// function Star({ starFill, onRating }) {
//   return (
//     <span style={starStyle} onClick={onRating}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//         fill={starFill}
//         stroke={starFill}
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     </span>
//   );
// }

/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/
