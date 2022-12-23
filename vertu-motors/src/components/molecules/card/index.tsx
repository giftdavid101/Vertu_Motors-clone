import React from "react";

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
      {subContent && <div className={"card__sub-content"}>{subContent}</div>}
    </div>
  );
};

export default Card;
