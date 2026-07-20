import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import testimonials from "../data/testimonials";

function Home() {
  // We only want to show a few courses on the homepage, not all of them.
  // slice(0, 3) means: "take the first 3 items from the array, and stop."
  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      {/* ---------- HERO SECTION ---------- */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Learn to Code. Build Your Career.
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Join thousands of students learning Data Structures, Web Development,
          and more from India's top instructors.
        </p>
        <Link
          to="/courses"
          className="mt-8 inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          Explore Courses
        </Link>
      </section>

      {/* ---------- STATS / ALUMNI BANNER ---------- */}
      <section className="bg-orange-600 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold">50,000+</p>
            <p className="text-sm text-orange-100">Alumni</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold">1,100+</p>
            <p className="text-sm text-orange-100">Companies</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold">40+</p>
            <p className="text-sm text-orange-100">Courses</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold">4.8★</p>
            <p className="text-sm text-orange-100">Average Rating</p>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          What Our Students Say
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm p-6"
            >
              <p className="text-gray-600 italic">"{t.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED COURSES SECTION ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Featured Courses
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Start learning with our most popular courses.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
