import { useEffect, useState } from "react";

export default function Home() {
  const [visitCount, setVisitCount] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedCount = localStorage.getItem("visitCount");
    const parsedCount = storedCount ? parseInt(storedCount, 10) : 0;
    const newCount = parsedCount + 1;
    setVisitCount(newCount);
    localStorage.setItem("visitCount", newCount);

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
    const newCount = visitCount + 1;
    setVisitCount(newCount);
    localStorage.setItem("visitCount", newCount);
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
