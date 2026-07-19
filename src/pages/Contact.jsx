import { useState } from "react";

function Contact() {
  // One state variable holding ALL form fields together, as one object.
  // This is different from Navbar's approach (separate useState per thing) —
  // here the fields are related (they're all part of ONE form), so grouping
  // them makes sense.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // This ONE function handles typing in ANY of the three fields.
  // e.target.name tells us WHICH input fired the event ("name", "email", or "message").
  // e.target.value is whatever the user just typed.
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from doing a full reload on submit
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        Have a question? Fill out the form and we'll get back to you.
      </p>

      {isSubmitted ? (
        <div className="mt-8 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
          Thanks, {formData.name}! Your message has been received.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
