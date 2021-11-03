import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";

function App() {
  const [highlight, setHighlight] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  // for pagination active btn
  const [value, setValue] = useState(0);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(12);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPost = highlight.slice(firstPost, lastPost);

  // change page
  const paginate = (number) => {
    setValue(number - 1);
    setCurrentPage(number);
  };

  // fetch highlights
  const getHighlight = () => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setLoading(false);
          setError(true);
          setErrorText(response.statusText);
        }
      })
      .then((data) => {
        setHighlight(data.response);
        setLoading(false);
      });
  };

  useEffect(() => {
    getHighlight();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (errorText) {
    return <h1 className="error">{errorText}</h1>;
  }
  return (
    <div className="App">
      <header className="header">
        <h1 className="page-title">HIGHLIGHTS</h1>
      </header>

      <main className="main">
        <div className="card-container">
          {currentPost.map((highlight, index) => {
            return <Card key={index} highlight={highlight} />;
          })}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={highlight.length}
          paginate={paginate}
          value={value}
        />
      </main>
    </div>
  );
}

export default App;