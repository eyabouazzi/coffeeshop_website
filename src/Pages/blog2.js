import React from 'react';
import { Link } from 'react-router-dom';

function Blog2() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <article className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-5xl font-extrabold text-center text-brown-700">
                        Our Sustainability Journey
                    </h1>
                    <p className="mt-4 text-center text-lg text-gray-600">
                        Learn about our commitment to ethical sourcing and the positive impact it has on farmers and the environment.
                    </p>
                </header>

                {/* Featured Image */}
                <div className="mb-12">
                    <img
                        src="https://d1g9yur4m4naub.cloudfront.net/image-handler/picture/2020/4/shutterstock_560673883.jpg"
                        alt="Our Sustainability Journey"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </div>

                {/* Blog Content */}
                <section className="prose prose-lg prose-indigo mx-auto">
                    <p>
                        At MsCafe, sustainability is at the heart of everything we do. We believe in making choices that not only serve our customers but also nurture the planet and empower the communities we work with.
                    </p>
                    <p>
                        Our coffee beans are ethically sourced from farmers who practice environmentally friendly and socially responsible farming. By supporting fair trade, we ensure that farmers receive fair compensation for their hard work.
                    </p>
                    <p>
                        Additionally, we are constantly innovating to reduce waste and promote eco-friendly practices. From recyclable packaging to energy-efficient brewing methods, every small step contributes to a larger goal.
                    </p>
                    <p>
                        Join us on this journey to create a better world, one cup of coffee at a time. Together, we can brew a brighter future.
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

export default Blog2;
