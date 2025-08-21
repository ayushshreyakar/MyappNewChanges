import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../context/StoreContext'   
import { FiX } from "react-icons/fi"

const Navbar = ({setShowLogin}) => {
  const { setSearchQuery, food_list, token, setToken } = useContext(StoreContext)
  const [showSearch, setShowSearch] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false) 

  const navigate = useNavigate();

  const logout = () => {
      localStorage.removeItem("token");
        setToken("");
        navigate("/")
  }

  const handleClear = () => {
    setInputValue("")
    setSearchQuery("")
    setHighlightedIndex(-1)
    setShowSuggestions(false)
  }

  const filteredSuggestions = showSuggestions && inputValue
    ? food_list.filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      ).slice(0, 5)
    : []

  const handleSuggestionSelect = (name) => {
    setInputValue(name)
    setSearchQuery(name.toLowerCase())
    setHighlightedIndex(-1)
    setShowSuggestions(false)  // ✅ hide only suggestions
  }

  // ✅ Keyboard navigation
  const handleKeyDown = (e) => {
    if (!filteredSuggestions.length) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setHighlightedIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      )
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSuggestions.length - 1
      )
    } else if (e.key === "Enter" || e.key === "Tab") {
      if (highlightedIndex >= 0) {
        e.preventDefault()
        handleSuggestionSelect(filteredSuggestions[highlightedIndex].name)
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/'><li>Home</li></Link>
      </ul>
      <div className='navbar-right'>
        <img 
          src={assets.serach} 
          alt="search" 
          onClick={() => setShowSearch(!showSearch)} 
          className="cursor-pointer"
        />

        {showSearch && (
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search dishes..." 
              className="search-input"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
                setSearchQuery(e.target.value.toLowerCase())
                setShowSuggestions(true)  // ✅ open suggestions when typing
              }}
              onKeyDown={handleKeyDown}
            />
            {inputValue && (
              <FiX className="clear-icon" onClick={handleClear} />
            )}

            {/* 🔽 Suggestions Dropdown */}
            {filteredSuggestions.length > 0 && (
              <ul className="suggestions-list">
                {filteredSuggestions.map((item, idx) => (
                  <li 
                    key={item._id} 
                    className={idx === highlightedIndex ? "highlighted" : ""}
                    onClick={() => handleSuggestionSelect(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className='navbar-search-icon'>
          <Link to= '/cart'><img src={assets.shopping_basket} alt="" /></Link>
          <div className='dot'></div>
        </div>
        <div>
          {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>:
          <div>
            <img src={assets.profile_icon} alt="" />
            <ul>
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout} alt="" /><p>Logout</p></li>
            </ul>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
