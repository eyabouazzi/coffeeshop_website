import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeBlog() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Header */}
            <header
                className="py-12 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
            >
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white drop-shadow-lg">Coffee Chronicles</h1>
                    <p className="mt-4 text-xl text-gray-200">Explore the world of coffee like never before.</p>
                </div>
            </header>

            {/* Blog Cards Section */}
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://assets.lummi.ai/assets/QmNpLjQHGKZK2KqaugrP4H66Y7mK3eLgyKG2UAWQimZZ62?auto=format&w=640"
                            alt="The Art of Brewing"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-brown-600">The Art of Brewing</h2>
                            <p className="mt-4 text-gray-700">
                                Brewing coffee is an art that blends passion, technique, and quality beans.
                                Discover the secrets behind perfect brews and learn why every cup at MsCafe is a masterpiece.
                            </p>
                            <Link
                                to="/blog1"
                                className="mt-6 inline-block bg-amber-600 text-white px-6 py-2 rounded-full shadow hover:bg-amber-700 transition duration-300"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://d1g9yur4m4naub.cloudfront.net/image-handler/picture/2020/4/shutterstock_560673883.jpg"
                            alt="Our Sustainability Journey"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-brown-600">Our Sustainability Journey</h2>
                            <p className="mt-4 text-gray-700">
                                At MsCafe, sustainability isn’t just a buzzword—it’s a way of life.
                                Learn about our commitment to ethical sourcing and the positive impact it has on farmers and the environment.
                            </p>
                            <Link
                                to="/blog2"
                                className="mt-6 inline-block bg-amber-600 text-white px-6 py-2 rounded-full shadow hover:bg-amber-700 transition duration-300"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://images6.alphacoders.com/715/715419.jpg"
                            alt="The Perfect Bean"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-brown-600">The Perfect Bean</h2>
                            <p className="mt-4 text-gray-700">
                                Great coffee starts with the perfect bean.
                                Explore our journey in selecting the finest beans from sustainable farms worldwide and how it creates a difference in every sip.
                            </p>
                            <Link
                                to="/blog3"
                                className="mt-6 inline-block bg-amber-600 text-white px-6 py-2 rounded-full shadow hover:bg-amber-700 transition duration-300"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 bg-gray-200 text-center">
                <p className="text-gray-600">© {new Date().getFullYear()} MsCafe. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default CoffeeBlog;
