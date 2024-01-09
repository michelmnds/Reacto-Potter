import { Header } from "../../components/Header";
import { HouseCard } from "../../components/HouseCard";
import { useContext } from "react";
import { HouseContext } from "../../providers/HouseContext";

import x from "../../assets/x.png";
import info from "../../assets/info.png";

import "./style.css";
const houseNames = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
export const HousePage = () => {
  const { houses } = useContext(HouseContext);
  return (
    <>
      <Header />
      <h1 className="houseTitle">Manage your Houses</h1>

      <div className="houseContainer">
        <span className="mainTitle">Main houses</span>
        <div className="mainHousesContainer">
          {houses.length ? (
            houses.map((house) => {
              if (houseNames.includes(house.name)) {
                return (
                  <HouseCard
                    key={house.id}
                    image={house.image}
                    name={house.name}
                  />
                );
              }
            })
          ) : (
            <div
              style={{ backgroundColor: "#1a1a1a", width: 300, height: 306 }}
            />
          )}
        </div>

        <span className="mainTitle">Custom Houses</span>

        <div className="customHousesContainer">
          {houses.length ? (
            houses.map((house) => {
              if (!houseNames.includes(house.name)) {
                return (
                  <HouseCard
                    key={house.id}
                    image={house.image}
                    name={house.name}
                  >
                    <div className="iconContainer">
                      <img className="icon" src={info} alt="" />
                      <img className="icon" src={x} alt="" />
                    </div>
                  </HouseCard>
                );
              }
            })
          ) : (
            <div
              style={{ backgroundColor: "#1a1a1a", width: 300, height: 306 }}
            />
          )}
        </div>

        <button className="createHouseBtn">Create new house</button>
      </div>
    </>
  );
};
