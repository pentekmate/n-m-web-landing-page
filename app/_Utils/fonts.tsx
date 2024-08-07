import { Inter,Lato,Poppins } from "next/font/google";

export const inter = Inter({ 
    subsets: ["latin"],
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable:"--font-inter"
   });
  
  export const lato = Lato({
    subsets: ["latin"],
    weight:["100","300","400","700","900" ],
    variable: "--font-lato",
  });
  
 export  const poppins = Poppins({
    subsets: ["latin"],
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-poppins",
  });