import PlainButton from '@/Components/Buttons/PlainButton';
import ColumnTitleAndDesc from '@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc';
import { useModalContext } from '@/Context/ModalProvider';
import React from 'react';
import FreeDomainImage from "../../../../public/images/article/free-domain.svg";
import WHFreeDotComDomain from '../../ModalComponents/WHFreeDotComDomain';

const FCFreeDomain = () => {
    const { requestModal, setOrderType, setModalData, setModalTitle} = useModalContext();
    return (
        <>
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
                <FreeDomainImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Free .com Domain">
                <p className="text-text lg:text-xl lg:leading-9">Having a .com domain gives you credibility and a professional image, which is essential in today's digital age.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setOrderType(true),
                  setModalTitle("Free .com Domain with Annual Plan"), setModalData(<WHFreeDotComDomain />), requestModal();
                }}
              />
            </article>
        </>
    );
};

export default FCFreeDomain;