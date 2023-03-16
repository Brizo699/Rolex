import Image from "next/image";

function Landing(){
    return( 
        <div className="w-full">
           <video className="-z-10 w-full absolute top-0 object-cover h-[100vh]"
           loop autoPlay muted src="https://on.rolex.com/3Li9lOO"></video>
        </div>
    );
}; 
export default Landing;