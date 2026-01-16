import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaClock, FaStar, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { coffeeRecipes, categories } from '../data/coffeeRecipes';
import { coffeeImages } from '../data/coffeeImages';

const RecipesContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5dc 0%, #faf0e6 50%, #fff8dc 100%);
  padding: 120px 5% 60px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #7c2214;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #7c2214, #d2691e);
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #8b4513;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const SearchBox = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 50px 15px 20px;
  border: 2px solid #d2691e;
  border-radius: 25px;
  font-size: 1rem;
  background: white;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #7c2214;
    box-shadow: 0 0 15px rgba(124, 34, 20, 0.2);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #d2691e;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #d2691e;
  background: ${props => props.active ? '#d2691e' : 'transparent'};
  color: ${props => props.active ? 'white' : '#d2691e'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: #d2691e;
    color: white;
    transform: translateY(-2px);
  }
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RecipeCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const RecipeImage = styled.div`
  height: 200px;
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : `linear-gradient(135deg, ${props.gradient1}, ${props.gradient2})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  
  span {
    z-index: 2;
    position: relative;
  }
  
  &.error {
    background: ${props => props.fallbackUrl ? `url(${props.fallbackUrl})` : `linear-gradient(135deg, ${props.gradient1}, ${props.gradient2})`};
  }
`;

const RecipeContent = styled.div`
  padding: 25px;
`;

const RecipeTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #7c2214;
  margin-bottom: 10px;
`;

const RecipeDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const RecipeMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #8b4513;
  font-size: 0.9rem;
`;

const DifficultyBadge = styled.span`
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => {
    switch(props.level) {
      case 'Easy': return '#e8f5e8';
      case 'Medium': return '#fff3cd';
      case 'Hard': return '#f8d7da';
      default: return '#e8f5e8';
    }
  }};
  color: ${props => {
    switch(props.level) {
      case 'Easy': return '#28a745';
      case 'Medium': return '#856404';
      case 'Hard': return '#721c24';
      default: return '#28a745';
    }
  }};
`;

const RecipeActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &.primary {
    background: #d2691e;
    color: white;

    &:hover {
      background: #7c2214;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: #f8f9fa;
    color: #7c2214;
    border: 2px solid #d2691e;

    &:hover {
      background: #d2691e;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #8b4513;
`;

const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
`;

const EmptyStateText = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const EmptyStateSubtext = styled.p`
  font-size: 1rem;
  opacity: 0.7;
`;

const ImageWithFallback = ({ imageUrl, fallbackUrl, gradient1, gradient2, ...props }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <RecipeImage 
      imageUrl={imageError ? fallbackUrl : imageUrl}
      fallbackUrl={fallbackUrl}
      gradient1={gradient1}
      gradient2={gradient2}
      className={imageError ? 'error' : ''}
      {...props}
    >
      <img 
        src={imageUrl} 
        alt="Coffee"
        style={{ display: 'none' }}
        onError={handleImageError}
      />
    </RecipeImage>
  );
};

function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  
  // Get authentication state from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  
  // Also check legacy localStorage auth
  const legacyUserData = localStorage.getItem('user');
  const legacyUser = legacyUserData ? JSON.parse(legacyUserData) : null;
  const isLoggedIn = isAuthenticated || legacyUser;

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('coffeeRecipeFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage with authentication check
  const toggleFavorite = (recipeId) => {
    if (!isLoggedIn) {
      toast.info('Please log in to save recipes!');
      navigate('/login');
      return;
    }

    const newFavorites = favorites.includes(recipeId)
      ? favorites.filter(id => id !== recipeId)
      : [...favorites, recipeId];
    
    setFavorites(newFavorites);
    localStorage.setItem('coffeeRecipeFavorites', JSON.stringify(newFavorites));
    
    // Show success message
    if (favorites.includes(recipeId)) {
      toast.success('Recipe removed from favorites');
    } else {
      toast.success('Recipe saved to favorites!');
    }
  };

  // Filter recipes based on search and category
  const filteredRecipes = coffeeRecipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });



  return (
    <RecipesContainer>
      <Header>
        <Title>Coffee Recipes & Brewing Guide</Title>
        <Subtitle>
          Discover the art of coffee brewing with our comprehensive collection of recipes. 
          From classic espresso to innovative cold brew methods, master the perfect cup.
        </Subtitle>
      </Header>

      <SearchContainer>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon />
        </SearchBox>
      </SearchContainer>

      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category.id}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </FilterButton>
        ))}
      </FilterContainer>

      {filteredRecipes.length > 0 ? (
        <RecipesGrid>
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
                             <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
                 <ImageWithFallback 
                   imageUrl={coffeeImages[recipe.imageKey]?.url}
                   fallbackUrl={coffeeImages[recipe.imageKey]?.fallback}
                   gradient1={recipe.gradient1} 
                   gradient2={recipe.gradient2}
                 />
               </Link>
              
              <RecipeContent>
                <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
                  <RecipeTitle>{recipe.name}</RecipeTitle>
                  <RecipeDescription>{recipe.description}</RecipeDescription>
                </Link>

                <RecipeMeta>
                  <MetaItem>
                    <FaClock />
                    {recipe.brewTime}
                  </MetaItem>
                  <MetaItem>
                    <FaStar />
                    {recipe.rating}
                  </MetaItem>
                  <DifficultyBadge level={recipe.difficulty}>
                    {recipe.difficulty}
                  </DifficultyBadge>
                </RecipeMeta>

                                 <RecipeActions>
                   <ActionButton
                     className="primary"
                     onClick={() => toggleFavorite(recipe.id)}
                   >
                     <FaHeart style={{ color: favorites.includes(recipe.id) ? '#e74c3c' : 'inherit' }} />
                     {favorites.includes(recipe.id) ? 'Saved' : 'Save'}
                   </ActionButton>
                 </RecipeActions>
              </RecipeContent>
            </RecipeCard>
          ))}
        </RecipesGrid>
      ) : (
        <EmptyState>
          <EmptyStateIcon>☕</EmptyStateIcon>
          <EmptyStateText>No recipes found</EmptyStateText>
          <EmptyStateSubtext>
            Try adjusting your search terms or filter selection
          </EmptyStateSubtext>
        </EmptyState>
      )}
    </RecipesContainer>
  );
}

export default Recipes;
