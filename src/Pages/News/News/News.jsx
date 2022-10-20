import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      {/* <h2>News details</h2> */}
      <Card>
        <Card.Img variant="top" src={news.image_url} />
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>{news.details}</Card.Text>
          <Link to={"/home"}>
            <Button variant="info">Go home page</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
