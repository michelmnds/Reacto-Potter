import { useState } from "react";
import { ModalHouse } from "../../components/ModalHouse";

export const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>ProfilePage</h1>
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      <ModalHouse
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};
