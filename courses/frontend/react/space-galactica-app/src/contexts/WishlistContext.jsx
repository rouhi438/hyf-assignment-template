import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const addPlanetToWishlist = (planet) => {
    setPlanetsWishlist((prev) => [...prev, planet]);
  };

  const removePlanetFromWishlist = (planetName) => {
    setPlanetsWishlist((prev) =>
      prev.filter((planet) => planet.name !== planetName),
    );
  };

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const wishlistCount = planetsWishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
