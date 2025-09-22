// import { formatCurrency } from "@/util/currency";
import Image from "next/image";
// import Link from "next/link";
import "./items.scss"
import Link from "next/link";
export const metadata = {
    title: "Hjem"
}
export default async function Kort({ item }) {

    return (
        //vi klikker på linket så går ind i mappen item/[kageslug] (som er "slug" i json filen(vi ku ogs hente id og vise ting ud fra det på details))
        <>
       
            <article className="aktiviteter"><Link href={`/listings/${item.id}`}>
              
                
              
                         <Image src={item.asset.url} alt="" width="250" height="290" quality={100} ></Image> </Link>
        
                    <h3>
                        {item.title}


                    </h3>
  
            </article></>
       
    )
} 