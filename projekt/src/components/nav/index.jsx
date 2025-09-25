import Image from "next/image";
import Link from "next/link";
import "./navigation.scss"
export default function Navigation() {
  return (
<nav >
   
           
  
   <ul className="navigation"> 
    <div className="grid1">
    <Image  src="/Icon.png" alt="" width="40" height="40" quality={25} priority={true} />
            <h1>Swaphub</h1></div>

            <div className="grid2">
   <Link href={"/"}>Listings</Link>
     <Link href={"/"}>Community</Link>
        <Link href={"/contact"}>Contact</Link>
         <Link className="signin" href={"/login"}>  Sign in</Link>
           <Link className="register" href={"/login"}>  Register</Link></div>
   </ul>
   <hr />
</nav>
  );
}