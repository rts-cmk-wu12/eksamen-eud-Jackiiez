"use client";

import { useActionState } from "react";
import SearchAction from "./search-action";

export default function SearchForm() {

    //react hook som producere 3 ting(et state, en function, og et true false state) det opdateres når vores form bliver submitet og vores action returnere noget
    //det vores action returnere bliver til vores state
    const [formState, formAction, pending] = useActionState(SearchAction);
    return (<>
        <form action={formAction}>
            <div>
                <label >
                    <span>
                        søg
                    </span>
                    <input type="search" name="keyword" />
                    <select name="sort" id="">

                        <option value="titleAscending">Title A-Z</option>
                        <option value="titleDescending">Title Z-A</option>
                    </select>
                </label>
            </div>
            <button type="submit">Søg</button>

        </form>
        {(Array.isArray(formState) && !formState?.length) && <div>Der er ingen resultater</div>}
        {formState?.map(activity => <div key={activity.id}>{activity.title}</div>)}
    </>
    )
}