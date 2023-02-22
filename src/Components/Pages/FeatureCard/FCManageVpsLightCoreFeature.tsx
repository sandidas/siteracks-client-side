import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WHManageVpsLightCoreFeature from "@/Components/ModalComponents/WHManageVpsLightCoreFeature";
import { useModalContext } from "@/Context/ModalProvider";

const FCManageVpsLightCoreFeature = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">{/* <DedicatedSupportImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />  */}</div>

        <ColumnTitleAndDesc title="Fully managed VPS" subTitle="Avoid the complexity of self-managed VPS">
          <p className="text-text lg:text-xl lg:leading-9">SiteRacks offers cost-effective and robust Managed VPS Hosting plans to host websites on a secure and resilient infrastructure without the burden of managing the server. We maintain server performance, optimization, and security, monitoring 24/7. With no complexity, we're always behind you so you can focus on your business while we handle your server.</p>
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
