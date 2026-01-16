import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaClock, FaStar, FaArrowLeft, FaPrint, FaShare, FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { coffeeRecipes } from '../data/coffeeRecipes';
import { coffeeImages } from '../data/coffeeImages';

const RecipeDetailContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5dc 0%, #faf0e6 50%, #fff8dc 100%);
  padding: 120px 5% 60px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #d2691e;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-bottom: 30px;

  &:hover {
    background: #7c2214;
    transform: translateX(-5px);
  }
`;

const RecipeHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const RecipeImage = styled.div`
  height: 400px;
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : `linear-gradient(135deg, ${props.gradient1}, ${props.gradient2})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 6rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
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

const RecipeInfo = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const RecipeTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #7c2214;
  margin-bottom: 15px;
`;

const RecipeDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 1.1rem;
`;

const RecipeMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8b4513;
  font-weight: 500;
`;

const DifficultyBadge = styled.span`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
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
  gap: 15px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
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

  &.tertiary {
    background: transparent;
    color: #7c2214;
    border: 2px solid #d2691e;

    &:hover {
      background: #d2691e;
      color: white;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Section = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #7c2214;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const IngredientCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #d2691e;
`;

const IngredientText = styled.span`
  color: #333;
  font-size: 1.1rem;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  opacity: ${props => props.checked ? 0.6 : 1};
`;

const StepsList = styled.ol`
  padding-left: 20px;
`;

const StepItem = styled.li`
  margin-bottom: 25px;
  position: relative;
`;

const StepContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: #fafafa;
  border-radius: 15px;
  border-left: 4px solid #d2691e;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    transform: translateX(5px);
  }
`;

const StepNumber = styled.div`
  background: #d2691e;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

const StepText = styled.div`
  flex: 1;
`;

const StepTitle = styled.h4`
  color: #7c2214;
  margin-bottom: 8px;
  font-size: 1.1rem;
`;

const StepDescription = styled.p`
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const StepTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #8b4513;
  font-size: 0.9rem;
  font-weight: 500;
`;

const StepCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #d2691e;
  margin-top: 5px;
`;

const TipsSection = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
`;

const TipsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TipItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const TipIcon = styled.div`
  background: #d2691e;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const TipText = styled.p`
  color: #333;
  line-height: 1.5;
`;

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedSteps, setCheckedSteps] = useState([]);

  const recipe = coffeeRecipes.find(r => r.id === parseInt(id));

  // Get authentication state from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  
  // Also check legacy localStorage auth
  const legacyUserData = localStorage.getItem('user');
  const legacyUser = legacyUserData ? JSON.parse(legacyUserData) : null;
  const isLoggedIn = isAuthenticated || legacyUser;

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('coffeeRecipeFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    // Load checked items from localStorage
    const savedIngredients = localStorage.getItem(`recipe_${id}_ingredients`);
    const savedSteps = localStorage.getItem(`recipe_${id}_steps`);
    
    if (savedIngredients) {
      setCheckedIngredients(JSON.parse(savedIngredients));
    }
    if (savedSteps) {
      setCheckedSteps(JSON.parse(savedSteps));
    }
  }, [id]);

  useEffect(() => {
    // Save checked items to localStorage
    localStorage.setItem(`recipe_${id}_ingredients`, JSON.stringify(checkedIngredients));
    localStorage.setItem(`recipe_${id}_steps`, JSON.stringify(checkedSteps));
  }, [checkedIngredients, checkedSteps, id]);

  if (!recipe) {
    return (
      <RecipeDetailContainer>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Recipe not found</h2>
          <BackButton onClick={() => navigate('/recipes')}>
            <FaArrowLeft />
            Back to Recipes
          </BackButton>
        </div>
      </RecipeDetailContainer>
    );
  }

  const toggleFavorite = () => {
    if (!isLoggedIn) {
      toast.info('Please log in to save recipes!');
      navigate('/login');
      return;
    }

    const newFavorites = favorites.includes(recipe.id)
      ? favorites.filter(id => id !== recipe.id)
      : [...favorites, recipe.id];
    
    setFavorites(newFavorites);
    localStorage.setItem('coffeeRecipeFavorites', JSON.stringify(newFavorites));
    
    // Show success message
    if (favorites.includes(recipe.id)) {
      toast.success('Recipe removed from favorites');
    } else {
      toast.success('Recipe saved to favorites!');
    }
  };

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleStep = (stepNumber) => {
    setCheckedSteps(prev => 
      prev.includes(stepNumber)
        ? prev.filter(s => s !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const ingredientsProgress = (checkedIngredients.length / recipe.ingredients.length) * 100;
  const stepsProgress = (checkedSteps.length / recipe.steps.length) * 100;

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



  return (
    <RecipeDetailContainer>
      <BackButton onClick={() => navigate('/recipes')}>
        <FaArrowLeft />
        Back to Recipes
      </BackButton>

             <RecipeHeader>
         <ImageWithFallback 
           imageUrl={coffeeImages[recipe.imageKey]?.url}
           fallbackUrl={coffeeImages[recipe.imageKey]?.fallback}
           gradient1={recipe.gradient1} 
           gradient2={recipe.gradient2}
         />

        <RecipeInfo>
          <RecipeTitle>{recipe.name}</RecipeTitle>
          <RecipeDescription>{recipe.description}</RecipeDescription>

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
               onClick={toggleFavorite}
             >
               <FaHeart style={{ color: favorites.includes(recipe.id) ? '#e74c3c' : 'inherit' }} />
               {favorites.includes(recipe.id) ? 'Saved' : 'Save'}
             </ActionButton>
           </RecipeActions>
        </RecipeInfo>
      </RecipeHeader>

      <ContentGrid>
        <Section>
          <SectionTitle>🛒 Ingredients ({checkedIngredients.length}/{recipe.ingredients.length})</SectionTitle>
          <IngredientsList>
            {recipe.ingredients.map((ingredient, index) => (
              <IngredientItem key={index}>
                <IngredientCheckbox
                  type="checkbox"
                  checked={checkedIngredients.includes(index)}
                  onChange={() => toggleIngredient(index)}
                />
                <IngredientText checked={checkedIngredients.includes(index)}>
                  {ingredient}
                </IngredientText>
              </IngredientItem>
            ))}
          </IngredientsList>
        </Section>

        <Section>
          <SectionTitle>📝 Step-by-Step Instructions ({checkedSteps.length}/{recipe.steps.length})</SectionTitle>
          <StepsList>
            {recipe.steps.map((step) => (
              <StepItem key={step.number}>
                <StepContent>
                  <StepNumber>{step.number}</StepNumber>
                  <StepText>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                    <StepTime>
                      <FaClock />
                      {step.time}
                    </StepTime>
                  </StepText>
                  <StepCheckbox
                    type="checkbox"
                    checked={checkedSteps.includes(step.number)}
                    onChange={() => toggleStep(step.number)}
                  />
                </StepContent>
              </StepItem>
            ))}
          </StepsList>
        </Section>
      </ContentGrid>

      <TipsSection>
        <SectionTitle>💡 Pro Tips</SectionTitle>
        <TipsList>
          {recipe.tips.map((tip, index) => (
            <TipItem key={index}>
              <TipIcon>💡</TipIcon>
              <TipText>{tip}</TipText>
            </TipItem>
          ))}
        </TipsList>
      </TipsSection>
    </RecipeDetailContainer>
  );
}

export default RecipeDetail;
