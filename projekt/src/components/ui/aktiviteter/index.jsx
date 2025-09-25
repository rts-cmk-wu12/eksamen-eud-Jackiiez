// import { formatCurrency } from "@/util/currency";
import Image from "next/image";
// import Link from "next/link";
import "./items.scss"
import Link from "next/link";
import SearchPage from "@/app/(routes)/soeg/page";
export const metadata = {
    title: "Hjem"
}
export default async function Kort({ item }) {

    return (
        //vi klikker på linket så går ind i mappen item/[kageslug] (som er "slug" i json filen(vi ku ogs hente id og vise ting ud fra det på details))
        <>

              
            <article className="aktiviteter"><Link href={`/listings/${item.id}`}>
              
               
                         <Image src={item.asset.url} alt="" width="350" height="390" quality={100} ></Image> 
        
                    <h3>
                        {item.title}


                    </h3></Link>
  
            </article></>
       
    )
} 