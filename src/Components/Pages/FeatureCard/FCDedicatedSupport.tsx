import PlainButton from '@/Components/Buttons/PlainButton';
import ColumnTitleAndDesc from '@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc';
import { useModalContext } from '@/Context/ModalProvider';
import React from 'react';
import WHDedicatedSupport from '../../ModalComponents/WHDedicatedSupport';
import DedicatedSupportImage from "../../../../public/images/article/dedicated-support.svg";

const FCDedicatedSupport = () => {
    const { requestModal, setModalData, setModalTitle } = useModalContext();
    return (
        <>
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
                <DedicatedSupportImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Dedicated Support">
                <p className="text-text lg:text-xl lg:leading-9">Our support team takes the time to understand your individual needs and provides customized solutions that are tailored specifically to your situation. </p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Dedicated Support"),
                  setModalData(<WHDedicatedSupport />),
                  requestModal()
                }}
              />
            </article>
        </>
    );
};

export default FCDedicatedSupport;