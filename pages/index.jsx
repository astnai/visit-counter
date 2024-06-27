import { useEffect, useState } from "react";

export default function Home() {
  const [visitCount, setVisitCount] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Fetch the visit count from the API
    fetch("/api/visitCount")
      .then((response) => response.json())
      .then((data) => {
        setVisitCount(data.visitCount);
      });

    // Theme change listener
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", handleThemeChange);
    setTheme(darkModeMediaQuery.matches ? "dark" : "light");

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const handleThemeChange = (e) => {
    setTheme(e.matches ? "dark" : "light");
  };

  const incrementCounter = () => {
    fetch("/api/visitCount", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setVisitCount(data.visitCount);
      });
  };

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen ${
        theme === "light" ? "bg-light-mode" : "bg-dark-mode"
      }`}
    >
      <p className="absolute top-4 left-4 text-xs font-mono text-gray-700 dark:text-gray-300">
        click here for increase counter
      </p>
      <button
        onClick={incrementCounter}
        className={`text-9xl font-bold ${
          theme === "light" ? "text-black" : "text-white"
        } focus:outline-none`}
      >
        {visitCount}
      </button>
    </div>
  );
}
