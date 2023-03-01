import PlainButton from "@/Components/Buttons/PlainButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BannerImage from "../../public/images/webHosting/error-not-found.svg";

export default function Custom404() {
  const router = useRouter();
  // Otp resend timer
  const [timer, setTimer] = useState<number>(50);

  // timer counter
  useEffect(() => {
    if (timer !== 0) {
      const id = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [timer]);

  // redirection
  if (timer === 0) {
    router.replace("/");
  }

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="py-[8vh]">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:5 xl:gap-16 2xl:gap-32">
          <div className="flex flex-col justify-center items-start space-y-4">
            <h1 className="text-4xl lg:text-6xl md:leading-tight text-title font-bold flex flex-col items-start lg:leading-tight">404 - Page Not Found</h1>
            <p className="text-text lg:text-xl lg:leading-9">The page you are looking for does not exist.</p>
            <p className="text-text lg:text-xl lg:leading-9 font-bold">You're redirecting within {timer}s</p>
            
            <PlainButton
              text="BACK TO HOME"
              handler={() => {
                handleClick;
              }}
            />
          </div>

          <div className="flex flex-col justify-start items-center w-full order-1 md:order-2">
            <div className="grow"></div>
            <BannerImage className="w-full h-fit" />
          </div>
        </div>
      </div>
    </div>
  );
}
