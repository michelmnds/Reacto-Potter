import "./style.css";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";

export const ModalHouse = ({
  isModalOpen,
  handleCloseModal,
  changeHouseName,
  changeHouseImage,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        style={{
          content: { top: "30vh", left: "30vw", right: "30vw", bottom: "30vh" },
        }}
      >
        <h2 className="modalHeading">Create new house</h2>
        <form>
          <input
            defaultValue={!changeHouseName ? "" : changeHouseName}
            {...register("name")}
            placeholder="House Name"
          />
          <input
            defaultValue={!changeHouseImage ? "" : changeHouseImage}
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
