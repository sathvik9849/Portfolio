import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import { useEffect, useState } from "react";
import FloatingDockDemo from "./components/FloatingDockDemo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { isMobile } from "mobile-device-detect";
import { Toaster } from "react-hot-toast";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to Sathvik's Portfolio!" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [isIntroDone, setIsIntroDone] = useState(true);
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark"
  );

  // Apply the theme class to the HTML element
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); // Store the theme in local storage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <Layout>
      {/* {isIntroDone && isMobile ? (
        <Navbar
          isIntroDone={isIntroDone}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      ) : null} */}
      <Toaster position="top-center" reverseOrder={false} />
      <Outlet context={{ isIntroDone, setIsIntroDone }} />
      <Footer isIntroDone={isIntroDone} />
      {isIntroDone ? (
        <FloatingDockDemo isIntroDone={isIntroDone} toggleTheme={toggleTheme} />
      ) : null}
    </Layout>
  );
}
