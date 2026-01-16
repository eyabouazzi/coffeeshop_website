import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../Store/cartSlice";
import EnhancedAddToCartButton from "../componets/AddToCartButton";

const CarouselWrapper = styled.div`
  position: relative;
  margin: 1rem 0;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem 0;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
`;

const DealCard = styled.div`
  flex: none;
  scroll-snap-align: start;
  border-radius: 12px;
  width: 300px;
  min-width: 300px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover .info-overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;
const DealDescription = styled.div`
  position: absolute;
  inset: 0; /* cover only inside ImageWrapper */
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  font-size: 0.95rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: default;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;





const DealImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
`;

const DealInfo = styled.div`
  padding: 0.75rem 1rem;
  background: #fff;
  border-top: 1px solid #ddd;
  border-radius: 0 0 12px 12px;
  color: #333;
  position: relative;
  z-index: 2;
`;


// inside DealInfo children
const DealName = styled.h4`
  margin: 0.25rem 0;
  font-weight: 600;
  font-size: 1.1rem;
`;

const OfferPrice = styled.p`
  font-weight: 700;
  color: #ffe600;
  margin-bottom: 0.3rem;
  font-size: 1rem;
`;

const Countdown = styled.div`
  font-size: 0.85rem;
  color: #ffb3b3;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;


const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(120, 53, 15, 0.8);
  border: none;
  color: white;
  font-size: 1.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background-color: rgba(120, 53, 15, 1);
  }
`;

const WishlistIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => (props.active ? "red" : "gray")};
  z-index: 2;
`;

const TodaysDeals = ({ deals }) => {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.cart.wishlist);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timers = {};
    deals.forEach((deal) => {
      timers[deal.id] = Math.floor(Math.random() * 3600) + 1800; // 30-90 mins
    });
    setTimeLeft(timers);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const updated = {};
        Object.keys(prev).forEach((id) => {
          updated[id] = prev[id] > 0 ? prev[id] - 1 : 0;
        });
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [deals]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const scroll = (direction) => {
    const width = 320;
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  const toggleWishlist = (deal) => {
    const isInWishlist = wishlistItems.some(item => item.id === deal.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(deal.id));
    } else {
      dispatch(addToWishlist(deal));
    }
  };

  return (
    <CarouselWrapper>
      <h2 style={{ textAlign: "center", color: "#78350f", margin: "1rem 0" }}>
        Today's Deals
      </h2>
      <ArrowButton style={{ left: "-20px" }} onClick={() => scroll("left")}>
        &#8249;
      </ArrowButton>
      <ArrowButton style={{ right: "-20px" }} onClick={() => scroll("right")}>
        &#8250;
      </ArrowButton>
      <CarouselContainer ref={carouselRef}>
        {deals.map((deal) => (
    <DealCard key={deal.id}>
  <ImageWrapper>
    <DealImage src={deal.image} alt={deal.name} />
    <WishlistIcon
      active={wishlistItems.some(item => item.id === deal.id)}
      onClick={() => toggleWishlist(deal)}
    >
      <i className={`fa-heart ${wishlistItems.some(item => item.id === deal.id) ? "fas" : "far"}`}></i>
    </WishlistIcon>

    {/* description only overlays the image */}
    <DealDescription>
      {deal.description || "No description available"}
    </DealDescription>
  </ImageWrapper>

  {/* product info stays always visible below */}
  <DealInfo>
    <DealName>{deal.name}</DealName>
    <OfferPrice>
      ${(deal.price * 0.8).toFixed(2)}{" "}
      <span style={{ textDecoration: "line-through", color: "#777" }}>
        ${deal.price.toFixed(2)}
      </span>
    </OfferPrice>
    <Countdown>Ends in: {formatTime(timeLeft[deal.id] || 0)}</Countdown>
    <EnhancedAddToCartButton product={deal} />
  </DealInfo>
</DealCard>



        ))}
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default TodaysDeals;
