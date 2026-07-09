import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/Logo.png';
import user from '../assets/user.png';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {

    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!query.trim()) return;

        navigate(`/search?q=${encodeURIComponent(query)}`);
    };

    return (
        <nav className="navbar">

            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Recipe Finder" />
                    Recipe Finder
                </Link>
            </div>

            <div className="SearchBox">

                <FaSearch />

                <form onSubmit={handleSearch}>

                    <input
                        type="text"
                        placeholder="Search for recipe"
                        autoComplete="off"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                </form>

            </div>

            <div className="links">

                <Link to="/Content">Home</Link>

                <Link to="/About">About</Link>

                <Link to="/Contact">Contact</Link>

                <Link to="/login">
                    <img src={user} alt="User" />
                </Link>

            </div>

        </nav>
    );
}