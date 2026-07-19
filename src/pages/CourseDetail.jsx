import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

function CourseDetail() {
  // Pulls the dynamic part of the URL out.
  // If the URL is /courses/dsa-in-java, courseId will be "dsa-in-java".
  const { courseId } = useParams();

  // Search the full courses array for the one whose id matches the URL param.
  // .find() returns the FIRST matching item, or undefined if nothing matches.
  const course = courses.find((c) => c.id === courseId);

  // Defensive check: what if someone types a bad URL like /courses/fake-course?
  // course would be undefined here, so we show a fallback instead of crashing.
  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
        <p className="mt-2 text-gray-600">
          The course you're looking for doesn't exist.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-block text-orange-600 font-medium hover:text-orange-700"
        >
          ← Back to all courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/courses"
        className="text-sm text-orange-600 hover:text-orange-700"
      >
        ← Back to all courses
      </Link>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: image */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full rounded-lg object-cover"
        />

        {/* Right: details */}
        <div>
          <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
            {course.category}
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            {course.title}
          </h1>

          <p className="mt-4 text-gray-600">{course.description}</p>

          <div className="mt-4 flex items-center gap-3 text-sm text-gray-600">
            <span>⭐ {course.rating}</span>
            <span className="text-gray-400">•</span>
            <span>{course.students.toLocaleString()} students</span>
            <span className="text-gray-400">•</span>
            <span>{course.level}</span>
          </div>

          <p className="mt-6 text-3xl font-bold text-gray-900">
            ₹{course.price.toLocaleString()}
          </p>

          <button className="mt-4 w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Enroll Now
          </button>
        </div>
      </div>

      {/* ---------- CURRICULUM SECTION ---------- */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">What you'll learn</h2>
        <ul className="mt-4 space-y-2">
          {course.curriculum.map((topic) => (
            <li key={topic} className="flex items-center gap-2 text-gray-700">
              <span className="text-orange-600">✓</span>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetail;
