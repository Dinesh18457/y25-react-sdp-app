import React, { useEffect, useState } from "react";
import MainNavBar from "./MainNavBar";
import "./style.css";

function ApiDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_BASE || "";
  const API_RESOURCE = import.meta.env.VITE_API_RESOURCE || "api/resources.json";
  const API_URL = API_BASE ? `${API_BASE}/${API_RESOURCE}` : API_RESOURCE;

  const loadPosts = React.useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // Replace with project-specific endpoint, e.g. '/api/books', '/api/resources', '/api/users'.
      // If you set VITE_API_BASE=https://your-backend.example.com in .env, this will call your backend.
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <div className="page-container home-page">
      <MainNavBar />

      <div className="hero-section">
        <h1>Digital Library API Demo</h1>
        

        <div>
          <button className="primary-button" onClick={loadPosts} disabled={loading}>
            {loading ? "Loading..." : "Refresh Posts"}
          </button>
        </div>

        {error && <div className="error-message" style={{ color: "#cc0000", marginTop: "1rem" }}>{error}</div>}

        <section className="user-books-card" style={{ marginTop: "1.5rem" }}>
          <div className="user-books-header">
            <h3>Live posts</h3>
            <span>Example of async fetch state handling (Digital Library resources)</span>
          </div>

          <div className="user-books-table-wrapper">
            {loading ? (
              <p>Loading posts from API...</p>
            ) : posts.length === 0 ? (
              <p>No posts loaded yet.</p>
            ) : (
              <table className="user-books-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.department ?? "n/a"}</td>
                      <td><span className="user-book-badge">{post.status ?? "Unknown"}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>

        
      </div>
    </div>
  );
}

export default ApiDemo;
