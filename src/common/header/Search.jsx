import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./search.css";

const Search = ({ CartItem }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // To navigate to a different route

  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      if (search) {
        search.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // Perform the search action, like navigating to a search results page
      // For example, you might navigate to a new route with the search term
      console.log("Search term:", searchTerm);
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <h3>E-Commerce</h3>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search and hit enter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearchKeyPress} // Listen for Enter key press
            />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length > 0 ? CartItem.length : "0"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;