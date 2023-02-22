import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WHManageVpsLightCoreFeature from "@/Components/ModalComponents/WHManageVpsLightCoreFeature";
import { useModalContext } from "@/Context/ModalProvider";
import ManagedVpsImage from "../../../../public/images/article/managed-vps.svg";
const FCManageVpsLightCoreFeature = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full"><ManagedVpsImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" /></div>

        <ColumnTitleAndDesc supTitle="Avoid the complexity of" title="self-managed VPS" subTitle="Let's use 100% Fully managed VPS">
          <p className="text-text lg:text-xl lg:leading-9">We maintain your server performance, optimization, and security, monitoring 24/7. With no complexity, So, You can focus on your business. Because we trust your business, success is our virtue.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Dedicated Support"), setModalData(<WHManageVpsLightCoreFeature />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FCManageVpsLightCoreFeature;
