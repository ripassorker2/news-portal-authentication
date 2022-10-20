import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCardSummary from "../../../Shared/NEwsCardSummary/NewsCardSummary";

const Catagory = () => {
  const catagoryNews = useLoaderData();
  // console.log(catagoryNews);
  return (
    <div>
      <h1>Catagory news {catagoryNews.length}</h1>
      {catagoryNews.map((news, index) => (
        <NewsCardSummary key={index} news={news}></NewsCardSummary>
      ))}
    </div>
  );
};

export default Catagory;
