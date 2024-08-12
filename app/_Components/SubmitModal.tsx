import { lato, poppins } from "../_Utils/fonts"
import { IoClose } from "react-icons/io5";
type SubmitModalProps={
    responseMessageType:boolean |  null,
    responseMessage:string,
    onClick: React.MouseEventHandler<SVGElement>;
}
export default function SubmitModal({...props}:SubmitModalProps){
    if(props.responseMessageType){
       return(
       
        <div 
            className={`w-full flex h-fit gap-4 relative bg-[#4CAF50] p-4 rounded-lg`}
        >
            <div className="flex w-full gap-4 flex-col items-center ">
                <div className="flex gap-5 items-center ">
                    <p className={` h2 ${poppins.className} text-white`}>Sikeres üzenet küldés!</p>
                </div>
                <p className={`${lato.className} text-center text-base text-white lg:text-[20px] xl:text-[25px] lg:leading-[40px]  opacity-100`}>
                    <span>{props.responseMessage.split('\n').map((line, index) => (
                    <>
                        {line}
                        <br />
                    </>
                        ))}
                    </span>
                </p>
            </div>
            <div className="absolute end-5 ">
                <IoClose fill="white" onClick={props.onClick} />
            </div>
        </div>
      
       )
    }
    return(
       
        <div
            className={`w-full flex h-fit gap-4 relative bg-[#E53935] p-4 rounded-lg`}
        >
            <div className="flex w-full gap-4 flex-col items-center ">
                <div className="flex gap-5 items-center ">
                    <p className={` h2 ${poppins.className} text-white`}>Sikertelen üzenet küldés!</p>
                </div>
                <p className={`${lato.className}  text-base text-white lg:text-[20px] xl:text-[25px] lg:leading-[40px]  opacity-100`}>{props.responseMessage}</p>
            </div>
            <div className="absolute end-5 ">
                <IoClose fill="white" onClick={props.onClick} />
            </div>
        </div>
    )
}