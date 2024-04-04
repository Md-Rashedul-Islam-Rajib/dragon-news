/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { title, details, image_url, _id } = singleNews;
  return (
    <div className="card bg-base-100 shadow-xl p-2">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 300 ? (
          <p>
            {details.slice(0, 300)}{" "}
            <Link className="text-blue-600" to={`/news/${_id}`}>
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
