import { useState } from "react";
import { useNavigate } from "react-router-dom";
import currencyStore from '../../state/store';

function Navbar() {
  const { setCurrency } = currencyStore();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");  // To hold the search input

  // Function to handle when the user types in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle when the user presses Enter or clicks a search button
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {  // Either Enter key or button click
      if (searchTerm.trim() !== "") {
        navigate(`/details/${searchTerm.trim().toLowerCase()}`);  // Navigate to the coin details page
      }
    }
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a onClick={() => setCurrency('INR')}>INR</a></li>
              <li><a onClick={() => setCurrency('USD')}>USD</a></li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost text-xl" onClick={() => navigate('/')}>Crypto Tracker</a>
        </div>

        <div className="navbar-end flex items-center">
          <div className="relative">
            {/* Search Input Field */}
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}  // Submit on Enter key press
              placeholder="Search Coin"
              className="input input-bordered w-48"
            />
            <button
              onClick={handleSearchSubmit}  // Submit on button click
              className="btn btn-ghost btn-circle absolute right-0 top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
