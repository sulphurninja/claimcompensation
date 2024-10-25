// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#000000] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div>
            <h3 className="text-2xl text-green-500 font-bold mb-4">Claim My Medical Compensation</h3>
            <p className="text-gray-300">
              Your trusted partner for legal consultation and support. We provide expert legal advice and guidance, ensuring that your legal needs are met efficiently and effectively.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about-us" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contact-us" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="" className="text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Terms and Policies</h4>

            <li><a href="/termsandconditions" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>

          </div>
          {/* Newsletter Subscription Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with the latest legal news and updates.</p>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 rounded-md bg-gray-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md bg-gray-200 text-green-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-900 py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-green-800 -800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Claim My Medical Compensation. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a> */}
            <a href="/termsandconditions" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
