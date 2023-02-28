import PlainButton from "@/Components/Buttons/PlainButton";
import { loadMegaMenuItems } from "@/lib/loadMegaMenuItems";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mantine/core";
import { GetServerSideProps, GetStaticPropsContext } from "next";
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
  setOrderType?: any | null;
  requestModal(): void;
}
export const ModalContext = createContext<IModalProps>({
  setModalData: null,
  setModalTitle: null,
  setOrderType: false,
  requestModal: () => {}, // define a function
});

export const ModalProvider: React.FC<MyProps> = ({ children }) => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [modalTitle, setModalTitle] = useState<any | null>(null);
  const [orderType, setOrderType] = useState<boolean>(false);

  const requestModal = () => {
    setModalOpened(true);
  };
  // console.log("modalTitle", modalTitle);
  // console.log("modalOpened", modalOpened);
  // console.log("modalData", modalData);

  return (
    <>
      <ModalContext.Provider value={{ setModalData, setModalTitle, setOrderType, requestModal }}>{children}</ModalContext.Provider>

      <Modal
        radius="xl"
        zIndex="99999"
        padding={0}
        lockScroll={true}
        opened={modalOpened}
        size="xl"
        onClose={() => {
          setModalOpened(false), setModalData(null), setOrderType(false), setModalTitle(null);
        }}
        transition="pop"
        transitionDuration={200}
        exitTransitionDuration={500}
        withCloseButton={false}
        style={{ marginTop: "20px" }}
        className="group"
      >
        {/* Modal content */}
        <div className="text-title font-bold text-2xl p-5 lg:p-10 space-x-2 flex w-full justify-between items-center rounded-3xl">
          <div className="max-w-[90%]"> {modalTitle && modalTitle} </div>

          <button
            className="hover:bg-primary hover:text-light rounded-md p-2"
            onClick={() => {
              setModalOpened(false), setModalData(null), setModalTitle(null);
            }}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>

        <div className="p-5 lg:p-10 bg-surface">{modalData && modalData}</div>

        <div className={`grid p-5 items-center justify-items-center ${orderType ? "grid-cols-2" : ""}`}>
          <PlainButton
            text="CLOSE"
            closeButton
            handler={() => {
              setModalOpened(false), setModalData(null), setOrderType(false), setModalTitle(null);
            }}
          />
          {orderType && (
            <a
              href="#orderNow"
              className="w-full text-center py-2 text-primary hover:text-text font-medium"
              onClick={() => {
                setModalOpened(false), setModalData(null), setOrderType(false), setModalTitle(null);
              }}
            >
              SEE PLANS
            </a>
          )}
        </div>
      </Modal>
    </>
  );
};

export const useModalContext = () => useContext(ModalContext);
