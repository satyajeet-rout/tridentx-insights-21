// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This runs on every route change
    window.scrollTo(0, 0);

    // Optional: smoother feel (uncomment if you want)
    // document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}