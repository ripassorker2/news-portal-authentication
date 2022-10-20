import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCardSummary from "../../Shared/NEwsCardSummary/NewsCardSummary";

const Home = () => {
  const newses = useLoaderData();
  // console.log(newses);
  return (
    <div>
      <h1>All news</h1>
      {newses.map((news, index) => (
        <NewsCardSummary key={index} news={news}></NewsCardSummary>
      ))}
    </div>
  );
};

export default Home;
