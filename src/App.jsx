import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ArticleList from "./components/ArticleList";
import fetchArticlesWithTopic from "./components/articles-api";
import SearchBar from "./components/SearchBar/SearchBar";



const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {/* {loading && <Loader />} */}
      {loading && <p>Loading data, please wait...</p>}
      {/* {error && <Error />} */}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
