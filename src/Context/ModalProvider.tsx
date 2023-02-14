"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mantine/core";
import React, { Dispatch, SetStateAction, createContext, FC, useContext, useState } from "react";

interface MyProps {
  children?: React.ReactNode;
}

// ================
// Context of Modal Component
// ================
interface IModalProps {
  //Dispatch<SetStateAction<any | boolean>>
  setModalData?: any | null;
  setModalTitle?: any | null;
  requestModal(): void;
}
export const ModalContext = createContext<IModalProps>({
  setModalData: null,
  setModalTitle: null,
  requestModal: () => {}, // define a function
});

export const ModalProvider: React.FC<MyProps> = ({ children }) => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [modalTitle, setModalTitle] = useState<any | null>(null);

  const requestModal = () => {
    setModalOpened(true);
  };
  // console.log("modalTitle", modalTitle);
  // console.log("modalOpened", modalOpened);
  // console.log("modalData", modalData);

  return (
    <>
      <ModalContext.Provider value={{ setModalData, setModalTitle, requestModal }}>{children}</ModalContext.Provider>

      <Modal
        radius="xl"
        zIndex="99999"
        padding={0}
        lockScroll={true}
        opened={modalOpened}
        size="xl"
        onClose={() => {
          setModalOpened(false), setModalData(null), setModalTitle(null);
        }}
        withCloseButton={false}
        style={{ marginTop: "20px" }}
        className="group"
      >
        {/* Modal content */}
        <div className="text-title font-bold text-center text-2xl p-3 lg:p-10 space-x-2 flex w-full justify-between items-center rounded-3xl">
          <div> {modalTitle && modalTitle} </div>

          <button
            className="hover:bg-primary hover:text-light rounded-md p-2"
            onClick={() => {
              setModalOpened(false), setModalData(null), setModalTitle(null);
            }}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>

        <div className="p-3 lg:p-10 bg-surface">{modalData && modalData}</div>

        <div className="flex flex-col py-5 items-center">
          <PlainButton
            text="Close"
            handler={() => {
              setModalOpened(false), setModalData(null), setModalTitle(null);
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export const useModalContext = () => useContext(ModalContext);
