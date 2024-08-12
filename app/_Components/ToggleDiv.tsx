import { lato, poppins } from "../_Utils/fonts";
import Form from "./Form";
type ToggleDivProps={
    isVisible:boolean,
    formId:string,
    selectedPackage?: string|null
}
export default function ToggleDiv({isVisible,formId,selectedPackage}:ToggleDivProps){
   return(
    <div
    className={` ${
      isVisible ? "  lg:h-[600px] xl:h-[750px]  m-8 sm:m-4 md:m-6 lg:m-8 xl:m-10" : "h-[0px] bg-red-900"
    } transition-all duration-500 flex flex-col  items-center space-y-4 `}
  >
    {isVisible && (
      <>
        <h3
          className={`${poppins.className} h2`}
        >
          Megtetted első lépésed,
        </h3>
        <p
          className={`${lato.className} p1`}
        >
          A Siker felé, vedd fel velünk a kapcsolatot!
        </p>
        <div id={formId} className="md:w-1/2 w-full">
          <Form selectedPackage={selectedPackage} tier />
        </div>
      </>
    )}
  </div>
   )
}