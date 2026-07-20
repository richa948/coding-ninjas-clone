import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function CourseCard({ course }) {
      const { isInWishlist, toggleWishlist } = useWishlist();
      const saved = isInWishlist(course.id);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(course.id);
          }}
          className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:scale-110 transition-transform"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          {saved ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
            {course.category}
          </span>
          <span className="text-xs text-gray-500">{course.level}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {course.description}
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">⭐ {course.rating}</span>
          <span className="text-gray-400">•</span>
          <span>{course.students.toLocaleString()} students</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{course.price.toLocaleString()}
          </span>
          <Link
            to={`/courses/${course.id}`}
            className="text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
