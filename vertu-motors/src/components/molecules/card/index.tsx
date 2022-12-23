import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Card: React.FC<{ imgSrc: string; subContent: any; imgAlt: string }> = ({
  imgSrc,
  subContent,
  imgAlt,
}) => {
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
