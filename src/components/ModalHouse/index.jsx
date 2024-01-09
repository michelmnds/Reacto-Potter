import "./style.css";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { HouseContext } from "../../providers/HouseContext";
import { useContext } from "react";

export const ModalHouse = ({ isModalOpen, handleCloseModal }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => createHouse(data);
  const { createHouse, houses } = useContext(HouseContext);
  //event.target.key for getting id from the house card

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        style={{
          content: { top: "30vh", left: "30vw", right: "30vw", bottom: "30vh" },
        }}
      >
        <h2 className="modalHeading">Create new house</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue=""
            {...register("name")}
            placeholder="House Name"
          />
          <input
            defaultValue=""
            {...register("image")}
            placeholder="House Image Link"
          />
          <input type="submit" />
        </form>
        <button type="button" onClick={handleCloseModal}>
          close
        </button>
      </ReactModal>
    </>
  );
};
