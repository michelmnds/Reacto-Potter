import "./style.css";

// eslint-disable-next-line react/prop-types
export const HouseCard = ({ name, image, children }) => {
  return (
    <div className="mainHouseCard">
      {children}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="mainHouseImg"
      />

      <span className="houseName">{name}</span>
    </div>
  );
};
