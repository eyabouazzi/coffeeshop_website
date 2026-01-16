import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Replace these with your repository details
const REPO_OWNER = "Mujtabaa07";
const REPO_NAME = "coffeeShop";
const GITHUB_TOKEN = ""; // Optional: Add your GitHub personal access token to avoid rate limits

// Function to fetch contributors for a specific page
const fetchContributors = async (page, setContributors, setError) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors?page=${page}&per_page=20`,
      {
        headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN} `} : {},
      }
    );

    if (!response.ok) throw new Error("Failed to fetch contributors");

    const contributors = await response.json();
    setContributors(contributors);
    setError(false); // No error
  } catch (error) {
    console.error("Error fetching contributors:", error);
    setContributors([]);
    setError(true); // Set error state
  }
};

const ContributorContainer = styled.div`
  padding: 6rem 2rem;
  max-width: 1900px;
  margin: 0 auto;
  background-color: #fffbeb;
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20231205/pngtree-creamy-textured-milk-colored-background-image_13815875.png");
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #7c2214;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ContributorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

const ContributorCard = styled.div`
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #333;
  border-radius: 15px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #ffcc00;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.4rem;
    margin: 10px 0;
  }

  a {
    color: #ffcc00;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #004e64;
    }
  }
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    background: #004e64;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: #007f8a;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;

const Contributor = () => {
  const [contributors, setContributors] = useState([]); // State for contributors
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [error, setError] = useState(false); // Error state

  useEffect(() => {
    fetchContributors(currentPage, setContributors, setError);
  }, [currentPage]); // Re-fetch contributors when the page changes

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <ContributorContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Contributors
      </Title>
      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>
          Failed to load contributors. Please try again later.
        </p>
      ) : (
        <>
          <ContributorsGrid>
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.id}>
                <img
                  src={contributor.avatar_url}
                  alt={`Avatar of ${contributor.login}`}
                />
                <h3>{contributor.login}</h3>
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </ContributorCard>
            ))}
          </ContributorsGrid>
          <PaginationControls>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage}>
              Next
            </button>
          </PaginationControls>
        </>
      )}
    </ContributorContainer>
  );
};

export default Contributor;