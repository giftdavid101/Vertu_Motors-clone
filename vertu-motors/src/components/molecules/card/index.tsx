import React from "react";
import { SlArrowRight } from "react-icons/sl";

export type CardT = {
  imgSrc: string;
  subContent: any;
  imgAlt: string;
  title?: string;
  name?: string;
  price?: string;
  monthlyPrice?: string;
  moreDetails?: string;
};
const Card: React.FC<CardT> = ({ imgSrc, subContent, imgAlt }) => {
  return (
    <div>
      <div className={"card__image-container"}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      {subContent && (
        <div className={"card__sub-content"}>
          {subContent}
          <SlArrowRight />
        </div>
      )}
    </div>
  );
};

export default Card;
