// SearchBar.jsx - Improved version
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:5000';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    if (query) {
      setSearchTerm(decodeURIComponent(query));
    }
  }, [location.search]);


const handleSearch = async (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) return;
  
  setIsLoading(true);
  try {
    const encodedTerm = encodeURIComponent(searchTerm);
    navigate(`/search-results?q=${encodedTerm}`); // Only navigates
    // Missing: Data fetching after navigation
  } catch (error) {
    setError('Failed to perform search');
  } finally {
    setIsLoading(false);
  }
};

  const fetchSuggestions = async (term) => {
    if (term.length > 2) {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/products/suggestions?q=${encodeURIComponent(term)}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        setSuggestions(response.data);
      } catch (error) {
        if (error.response?.status !== 404) {
          console.error('Suggestion error:', error);
        }
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchSuggestions(value);
  };

  return (
    <div className="relative w-full max-w-md mx-4">
      {error && (
        <div className="mb-2 text-red-500 text-sm">{error}</div>
      )}
      <form onSubmit={handleSearch} className="flex" role="search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
          className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search products"
          aria-describedby="search-button"
        />
        <button 
          id="search-button"
          type="submit"
          disabled={isLoading || !searchTerm.trim()}
          className={`px-4 py-2 rounded-r-lg ${isLoading ? 'bg-blue-400' : 'bg-blue-500'} text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed`}
          aria-busy={isLoading}
        >
          {/* ... existing button content ... */}
        </button>
      </form>
      {/* ... existing suggestions dropdown ... */}
    </div>
  );
};

export default SearchBar;





