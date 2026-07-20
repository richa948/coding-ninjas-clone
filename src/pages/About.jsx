function About() {
  const stats = [
    { label: "Students Taught", value: "50,000+" },
    { label: "Courses Offered", value: "40+" },
    { label: "Expert Instructors", value: "100+" },
    { label: "Placement Partners", value: "300+" },
  ];

  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Coding Ninjas is on a mission to make quality tech education
          accessible to everyone. We started with a simple belief — anyone can
          learn to code with the right guidance, structured curriculum, and
          hands-on practice.
        </p>
      </section>

      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          We believe learning to code shouldn't depend on where you studied or
          what background you came from. Our courses are built by industry
          practitioners and designed to take you from beginner to job-ready, one
          concept at a time.
        </p>
      </section>
    </div>
  );
}

export default About;
