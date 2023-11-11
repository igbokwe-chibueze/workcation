/* eslint-disable react/prop-types */
import { StarIcon } from "../assets/icons";

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
       <StarIcon 
            key={index}
            className={`h-4 w-4 fill-current ${
                index + 1 <= rating ? 'text-teal-500' : 'text-gray-400'
            }`}
        />
    ));
  return (
    <div className="flex">{stars}</div>
  )
}

export default StarRating