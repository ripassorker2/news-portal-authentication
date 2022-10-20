import React from "react";
import { BsFillShareFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsCardSummary = ({ news }) => {
  // console.log(news);
  const { author, details, image_url, rating, title, total_view, _id } = news;
  return (
    <div className="mb-4">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex  align-items-center justify-content-center">
            <Image
              roundedCircle
              src={author.img}
              style={{ width: "60px" }}
            ></Image>
            <div className="mt-2 ms-3">
              <p className="mb-0">{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div>
            <BsFillShareFill className="me-3" size={20} />
            <BsFillBookmarkCheckFill size={20} />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" className="my-3" src={image_url} />
          <Card.Text>
            {details.length > "330" ? (
              <span>
                {details.slice(0, 330)} ....{" "}
                <Link to={`/news/${_id}`}>Read more </Link>
              </span>
            ) : (
              <span>{details}</span>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <AiFillStar className="text-warning" size={20} />{" "}
            <span>{rating.number}</span>
          </div>
          <div>
            <AiFillEye size={20} />
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCardSummary;
