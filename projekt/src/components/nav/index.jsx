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
   <li> <Link href={"/aktiviteter"}>Listings</Link></li>
    <li> <Link href={"/aktiviteter"}>Community</Link></li>
       <li> <Link href={"/aktiviteter"}>Contact</Link></li>
          <li> <Link href={"/aktiviteter"}>Sign in</Link></li>
             <li> <Link href={"/aktiviteter"}>Register</Link></li></div>
   </ul>
   <hr />
</nav>
  );
}