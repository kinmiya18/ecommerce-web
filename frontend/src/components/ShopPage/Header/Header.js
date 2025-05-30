import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token); // Kiểm tra trạng thái đăng nhập dựa trên token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false); // Cập nhật trạng thái không đăng nhập
    window.location.reload(); // Tải lại trang
  };

  return (
    <div className="header">
      <div className="container">
        <div className="head-home-wrap">
          <div className="logo">Fasco</div>
          <div className="inner-list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/product/21">Product</Link>
                  </li>
                  <li>
                    <Link to="/account">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                        <path d="M12.5 11.875C11.3789 11.875 10.8398 12.5 9 12.5C7.16016 12.5 6.625 11.875 5.5 11.875C2.60156 11.875 0.25 14.2266 0.25 17.125V18.125C0.25 19.1602 1.08984 20 2.125 20H15.875C16.9102 20 17.75 19.1602 17.75 18.125V17.125C17.75 14.2266 15.3984 11.875 12.5 11.875ZM15.875 18.125H2.125V17.125C2.125 15.2656 3.64062 13.75 5.5 13.75C6.07031 13.75 6.99609 14.375 9 14.375C11.0195 14.375 11.9258 13.75 12.5 13.75C14.3594 13.75 15.875 15.2656 15.875 17.125V18.125ZM9 11.25C12.1055 11.25 14.625 8.73047 14.625 5.625C14.625 2.51953 12.1055 0 9 0C5.89453 0 3.375 2.51953 3.375 5.625C3.375 8.73047 5.89453 11.25 9 11.25ZM9 1.875C11.0664 1.875 12.75 3.55859 12.75 5.625C12.75 7.69141 11.0664 9.375 9 9.375C6.93359 9.375 5.25 7.69141 5.25 5.625C5.25 3.55859 6.93359 1.875 9 1.875Z" fill="#484848" stroke="#484848" stroke-width="0.0390625"/>
                        </svg>
                    </Link>
                  </li>
                  <li onClick={handleLogout}>
                  <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                  </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/auth/sign-up">
                      <button className="home-signup-button">Sign Up</button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
