import React, { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));

  if(isDark) {
    document.body.classList.add("dark-mode");
  }else {
    document.body.classList.remove("dark-mode");
  }
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="#">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark",!isDark)
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}
