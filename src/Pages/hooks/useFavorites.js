import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [likedProducts, setLikedProducts] = useState({});

  // Load favorites on component mount
  useEffect(() => {
    loadFavorites();
    
    // Listen for updates from other components
    const handleUpdate = () => loadFavorites();
    window.addEventListener('favoritesUpdated', handleUpdate);
    
    return () => {
      window.removeEventListener('favoritesUpdated', handleUpdate);
    };
  }, []);

  const loadFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const likedState = {};
    favorites.forEach(fav => {
      likedState[fav.id] = true;
    });
    setLikedProducts(likedState);
  };

  const toggleFavorite = (product) => {
    console.log('❤️ Favorite toggled:', product.name);
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isCurrentlyLiked = likedProducts[product.id];

    let updatedFavorites;
    if (isCurrentlyLiked) {
      // Remove from favorites
      updatedFavorites = favorites.filter(fav => fav.id !== product.id);
      console.log('🗑️ Removed from favorites');
    } else {
      // Add to favorites
      const favoriteItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      };
      updatedFavorites = [...favorites, favoriteItem];
      console.log('➕ Added to favorites');
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    loadFavorites();
    
    // Notify other components
    window.dispatchEvent(new CustomEvent('favoritesUpdated'));
  };

  return { likedProducts, toggleFavorite };
};
