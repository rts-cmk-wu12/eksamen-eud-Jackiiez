"use client";

import { useActionState } from "react";
import SearchAction from "./search-action";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import "./search.scss"
export default function SearchForm() {

    //react hook som producere 3 ting(et state, en function, og et true false state) det opdateres når vores form bliver submitet og vores action returnere noget
    //det vores action returnere bliver til vores state
    const [formState, formAction, pending] = useActionState(SearchAction);
    return (<>
        <form action={formAction}>
            <div>
                <label >
                    <span>

                    </span>
                    <input type="search" name="keyword" placeholder="Search"/> <button type="submit"> <FaSearch /></button>

                    <select name="sort" id="">

                        <option value="titleAscending">Title A-Z</option>
                        <option value="titleDescending">Title Z-A</option>
                    </select>
                </label>
            </div>

        </form>
        <div className="searchitems"> {(Array.isArray(formState) && !formState?.length) && <div>Der er ingen resultater</div>}
        {formState?.map(activity => <div key={activity.id}><>
        
      <article className="aktiviteter"><Link href={`/listings/${activity.id}`}>
              
            
                         <Image src={activity.asset.url} alt="" width="100" height="120" quality={100} ></Image> 
        
                    <h3>
                        {activity.title}


                    </h3></Link> </article>
        </></div>)} </div>
    </>
    )
}