/* eslint-disable react/prop-types */
import StarRating  from './StarRating'

const Card = ({ 
        imageUrl,
        imageAlt,
        beds,
        baths,
        title,
        formattedPrice,
        reviewCount,
        rating, 
    }) => {
  return (
    <div>
        <div className="bg-white border rounded-lg overflow-hidden">
            <div className="">
                <img className="h-full w-full object-cover" src={imageUrl} alt={imageAlt} />
            </div>
            <div className="p-6">
            <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">New</span>
                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                    {beds} beds • {baths} baths
                </div>
            </div>
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
                {title}
            </h4>
            <div className="mt-1">
                {formattedPrice}
                <span className="text-gray-600 text-sm"> / wk</span>
            </div>
            <div className="mt-2 flex items-center">
                <StarRating 
                    rating={rating} 
                />
                <span className="ml-2 text-gray-600 text-sm">
                    {reviewCount} reviews
                </span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card