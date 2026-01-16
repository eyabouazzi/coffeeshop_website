import React from 'react';
import { Link } from 'react-router-dom';

function Blog3() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <article className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-5xl font-extrabold text-center text-brown-700">
                        The Perfect Bean
                    </h1>
                    <p className="mt-4 text-center text-lg text-gray-600">
                        Discover the secrets behind the perfect coffee bean and the art of brewing the perfect cup.
                    </p>
                </header>

                {/* Featured Image */}
                <div className="mb-12">
                    <img
                        src="https://images6.alphacoders.com/715/715419.jpg"
                        alt="The Perfect Bean"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </div>

                {/* Blog Content */}
                <section className="prose prose-lg prose-indigo mx-auto">
                    <p>
                        At MsCafe, every cup of coffee starts with the perfect bean. We believe that quality begins at the source, which is why we work closely with farmers around the world to ensure only the finest beans make it into your cup.
                    </p>
                    <p>
                        Our beans are grown in the most ideal climates, handpicked at peak ripeness, and carefully processed to retain their natural flavor and aroma. We prioritize sustainable farming methods to protect the environment and support local communities.
                    </p>
                    <p>
                        Once the beans reach our roastery, they undergo a meticulous roasting process. Each batch is roasted to perfection, unlocking its unique profile and bringing out notes of chocolate, caramel, citrus, or floral undertones, depending on the bean's origin.
                    </p>
                    <p>
                        Finally, the brewing process brings it all together. Whether you prefer a classic espresso, a smooth pour-over, or a rich French press, the journey of the perfect bean culminates in a cup that delights the senses and invigorates the soul.
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

export default Blog3;
