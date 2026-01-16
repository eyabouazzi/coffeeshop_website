import React from 'react';
import { Link } from 'react-router-dom';

function Blog1() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <article className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-5xl font-extrabold text-center text-brown-700">
                        The Art of Brewing
                    </h1>
                    <p className="mt-4 text-center text-lg text-gray-600">
                        A journey through the techniques and passion of perfect coffee brewing.
                    </p>
                </header>

                {/* Featured Image */}
                <div className="mb-12">
                    <img
                        src="https://assets.lummi.ai/assets/QmNpLjQHGKZK2KqaugrP4H66Y7mK3eLgyKG2UAWQimZZ62?auto=format&w=640"
                        alt="Art of Brewing"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </div>

                {/* Blog Content */}
                <section className="prose prose-lg prose-indigo mx-auto">
                    <p>
                        Brewing coffee is an art that blends passion, technique, and the finest quality beans.
                        At MsCafe, we believe every cup of coffee should be a masterpiece—a perfect balance of flavor and aroma.
                    </p>
                    <p>
                        From choosing the right beans to mastering the brewing methods, there's a lot to explore.
                        Whether you’re a fan of pour-over, French press, or espresso, each method has its unique charm and technique.
                    </p>
                    <p>
                        Our baristas dedicate time and effort to ensure that each cup served brings out the full potential of the beans,
                        offering you an unparalleled experience with every sip.
                    </p>
                    <p>
                        Come visit us at MsCafe and embark on a flavorful journey of coffee brewing excellence.
                        Your perfect cup awaits!
                    </p>
                </section>

                {/* Back Button */}
                <footer className="mt-12 text-center">
                    <Link to="/blog">
                        <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-full shadow hover:bg-amber-700 transition duration-300">
                            Back to Blog
                        </button>
                    </Link>
                </footer>
            </article>
        </div>
    );
}

export default Blog1;
