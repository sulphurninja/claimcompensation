import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            About Us - Claim My Medical Compensation
          </h1>

          {/* Overview Section */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Claim My Compensation</strong> is dedicated to supporting individuals and communities impacted by defective products, harmful chemicals, and corporate negligence. Since 2017, we have provided high-quality services, with our team consistently delivering professional results while addressing sensitive and complex cases with the utmost care. We specialize in managing <strong>Mass Tort</strong> campaigns, helping claimants across various sectors pursue justice.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to <strong>establish stability</strong> in our business while maintaining strong relationships with our clients. We are committed to helping those affected by harmful practices and defective products, providing support and guidance throughout the claims process.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to empower our team to be the best in the industry, consistently delivering quality services that prioritize the needs of claimants. Our vision is to maximize the success and satisfaction of our clients, ensuring that each individual receives the attention and support they need during difficult times.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li><strong>Respect:</strong> We value every client and handle every case with dignity and professionalism.</li>
              <li><strong>Integrity:</strong> We build trust through transparent actions and honest communication, ensuring our clients feel supported.</li>
              <li><strong>Team Spirit:</strong> Collaboration and teamwork drive us forward, enabling us to achieve more for our clients and communities.</li>
              <li><strong>Transparency:</strong> Open communication fosters trust, loyalty, and a commitment to delivering the best outcomes.</li>
              <li><strong>Accountability:</strong> We take responsibility for our actions, ensuring that every case is handled with the utmost care and professionalism.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
