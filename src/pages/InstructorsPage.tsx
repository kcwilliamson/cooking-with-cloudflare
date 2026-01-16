import { Link } from 'react-router-dom';
import { instructors } from '../data/instructors';

export default function InstructorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Cooking with Cloudflare has hundreds of tutorials you will love to learn, from quick security fixes to comprehensive full-stack applications. Expert-curated collections make it easy to find the right tutorial, and helpful step-by-step instructions make them fun and simple to follow.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We publish new tutorials and videos every week. <Link to="/" className="text-cloudflare-orange font-semibold hover:text-orange-600">Sign up</Link> for our free newsletter to see what's new.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            alt="Cloudflare team learning together"
            className="w-full h-full object-cover"
          />
          <p className="text-xs text-gray-500 mt-2 text-right">Cloudflare Education Team</p>
        </div>
      </div>

      {/* Our Product Section */}
      <div className="border-t-4 border-gray-900 pt-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR PRODUCT</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Cooking with Cloudflare learners get exclusive access to our best-in-class platform, with our full catalog of tutorials, personalized recommendations and video walkthroughs. Our tutorials include timestamps, screenshots and helpful tips from thousands of other developers. And our digital recipe box makes it easy to save favorites, plan learning paths and organize the skills you want to master.
        </p>
        <div className="flex gap-4">
          <Link
            to="/classes"
            className="inline-block bg-cloudflare-orange text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors"
          >
            Explore Live Classes
          </Link>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="border-t-4 border-gray-900 pt-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR VALUES</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We value the trust of our learners – in fact, it's essential to us. Cooking with Cloudflare was started in 2024 with the belief that time learning should make every developer's life richer and more fulfilling, and we strive to deliver the very best. With that in mind, we test each tutorial to make sure it's accurate and delivers results every time.
        </p>
      </div>

      {/* Our Instructors Section */}
      <div className="border-t-4 border-gray-900 pt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR INSTRUCTORS</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Here are the Cloudflare experts and educators who currently teach live classes for Cooking with Cloudflare. Among them are award-winning engineers, published authors, passionate developers and professionals alike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="text-center">
            <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
              <img
                src={instructor.headshot}
                alt={instructor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{instructor.bio}</p>
            <Link
              to={`/classes?instructor=${instructor.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-cloudflare-orange transition-colors"
            >
              See all classes by {instructor.name.split(' ')[0]}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
