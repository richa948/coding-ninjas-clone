import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  // wishlist is an ARRAY of course IDs, e.g. ["dsa-in-java", "sql-for-beginners"]
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Checks if a given course ID is already saved.
  const isInWishlist = (courseId) => wishlist.includes(courseId);

  // Adds OR removes a course ID depending on whether it's already there.
  const toggleWishlist = (courseId) => {
    setWishlist(
      (prev) =>
        prev.includes(courseId)
          ? prev.filter((id) => id !== courseId) // remove it
          : [...prev, courseId], // add it
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, isInWishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
