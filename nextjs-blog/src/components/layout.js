import Footer from "./footer";
import Navbar from "./navbar";
import Subnabvar from "./Subnabvar"

export default function Layout({children}){
return(
 <div>
     <Navbar />
     <Subnabvar />
     {children}
 </div>   
)
}