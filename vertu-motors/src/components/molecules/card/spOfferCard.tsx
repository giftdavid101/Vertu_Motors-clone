import React from "react";
import "./card.scss";
import { CardT } from "./index";

const SpOfferCard: React.FC<CardT> = ({
  imgSrc,
  imgAlt,
  subContent,
  name,
  title,
  price,
  monthlyPrice,
  moreDetails,
}) => {
  return (
    <div>
      <div className={"card__image-container"}>
        <img src={imgSrc} alt={imgAlt} />
      </div>

      <div className={"card__sub-content"}>
        <div>
          <p>{title}</p>
          <p>{name}</p>
          <div>
            <div>
              <p>Cash Price</p>
              <p>{price}</p>
            </div>
            <div>
              <p>PCP Finance from</p>
              <p>{monthlyPrice}</p>
            </div>
          </div>
          <p>{moreDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default SpOfferCard;
