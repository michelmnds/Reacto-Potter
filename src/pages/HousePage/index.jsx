import { useState } from "react";
import { ModalHouse } from "../../components/ModalHouse";
import { Header } from "../../components/Header";
import { HouseCard } from "../../components/HouseCard";
import { useContext } from "react";
import { HouseContext } from "../../providers/HouseContext";
import ReactModal from "react-modal";

import x from "../../assets/x.png";
import info from "../../assets/info.png";

import "./style.css";
const houseNames = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
export const HousePage = () => {
  const { houses, deleteHouse } = useContext(HouseContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [houseIdToBeUpdated, setHouseIdToBeUpdated] = useState(0);
  const [houseName, setHouseName] = useState("");
  const [houseImage, setHouseImage] = useState("");

  //should take "create" or "update"
  const handleOpenModal = (type, houseChangeId, name, image) => {
    setHouseName(name);
    setHouseImage(image);
    setModalType(type);
    setHouseIdToBeUpdated(houseChangeId);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);
  //accessibility setting
  ReactModal.setAppElement("#root");
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
                      <img
                        className="icon"
                        src={info}
                        alt="update house"
                        onClick={() =>
                          handleOpenModal(
                            "update",
                            house.id,
                            house.name,
                            house.image
                          )
                        }
                      />
                      <img
                        className="icon"
                        src={x}
                        alt="delete house"
                        onClick={() => deleteHouse(house.id)}
                      />
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

        <button
          className="createHouseBtn"
          onClick={() => handleOpenModal("create")}
        >
          Create new house
        </button>
        <ModalHouse
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          modalType={modalType}
          houseIdToBeUpdated={houseIdToBeUpdated}
          houseName={houseName}
          houseImage={houseImage}
        />
      </div>
    </>
  );
};
