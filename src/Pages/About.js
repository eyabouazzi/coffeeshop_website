import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../componets/Button";
import { useState } from "react";

const AboutContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1900px;
  margin: 0 auto;
  background-color: #fffbeb;

  background-image: url("https://images.template.net/103700/soft-brown-background-1btgz.png");
  background-size: cover;
  background-position: center;
  border-radius: 12px; /* Optional: To add rounded corners to the container */
  opacity: 1;
  z-index: -1;

  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20231205/pngtree-creamy-textured-milk-colored-background-image_13815875.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  padding-top: 1.5rem; /* Adjusted padding for top */
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 4rem;

  color: color: #5e2e0d;
  font-weight: bolder;

  color: #7c2214;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  p {
    color: #5e2e0d;
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
  .center-button {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
`;

const ImageContent = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: relative; /* To contain the overlay */
  overflow: hidden;
  border-radius: 0px;
  img {
    max-height: 100%;
    width: auto;
    border-radius: inherit;
    display: block;
  }
`;

const HoverImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%; /* Prevent image from overflowing */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  cursor: pointer;
  /* Image scaling and hover effect */
  &:hover img {
    transform: scale(1.1); /* Scale image on hover */
  }
  /* Dark overlay that appears on hover */
  &:hover .overlay {
    opacity: 1;
  }
  /* Image styling */
  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease; /* Smooth image scaling */
    object-fit: cover;
  }
  /* Overlay effect */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;

  filter: grayscale(100%) ;
  transition: all 0.3s ease;
  border: 4px solid black;
  &:hover {
    filter: grayscale(0%);
    box-shadow: 0 0 20px rgba(255, 10, 0, 0.8);
    border-width: 6px;
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.05);

  }
`;

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About MsCafe
      </Title>

      <Content>
        <TextContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            MsCafe was founded in 2010 with a simple mission: to serve the best
            coffee in town. Our passion for quality beans and expert brewing
            techniques has made us a favorite among coffee enthusiasts.
          </p>
          <p>
            We source our beans from sustainable farms around the world,
            ensuring that every cup of coffee you enjoy is not only delicious
            but also ethically produced.
          </p>

          {/* Learn More Button */}
          <div className="center-button mt-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2 bg-amber-700 text-white font-medium rounded-lg shadow-md hover:bg-amber-800 transition"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Expandable Content */}
          {showMore && (
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="mt-6 text-left"
>
              
              <p className="text-brown-700 leading-relaxed">
                At MsCafe, every cup of coffee tells a story that begins long
                before it reaches your hands. Our journey starts on smallholder
                farms across the world, where farmers carefully hand-pick ripe
                coffee cherries at just the right moment. We partner with
                growers who follow eco-friendly practices, nurturing the soil,
                protecting biodiversity, and ensuring fair wages that strengthen
                farming communities. This commitment not only preserves the
                environment 🌱 but also guarantees beans of the highest quality.
                Once harvested, our beans are carefully processed and roasted in
                small batches to highlight their unique flavor profiles. From
                rich chocolatey undertones to bright citrus notes, each blend is
                crafted to bring out the natural character of the bean. Our
                roasting philosophy balances tradition with innovation, ensuring
                that every sip is smooth, aromatic, and memorable. But MsCafe is
                more than just great coffee—it’s an experience. Our cozy
                interiors, warm ambiance, and welcoming community make it the
                perfect space to connect, unwind, or work in comfort. Every
                visit is a celebration of passion, people, and the art of
                coffee-making ☕. When you enjoy a cup at MsCafe, you’re not
                just drinking coffee—you’re sharing in a story of care and
                craftsmanship.
              </p>
            </motion.div>
          )}
        </TextContent>

        <ImageContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HoverImage>
            <img
              src="https://i.ytimg.com/vi/DyJTVkRP1vY/maxresdefault.jpg"
              alt="Zumar Cafe Interior"
            />
          </HoverImage>
        </ImageContent>
      </Content>
    </AboutContainer>
  );
}

export default About;
