"use server"

import z, { includes } from "zod";
const SearchSchema = z.object({
    keyword: z.string().optional(),
    sort: z.enum(["titleAscending", "titleDescending"]).optional(),
});


export default async function SearchAction(prevState, formData) {


    const { sort, keyword } = SearchSchema.parse(Object.fromEntries(formData))
    console.log("sort", sort)
    console.log(keyword)
    const response = await fetch(`http://localhost:4000/api/v1/listings`);
    console.log(response)
    if (!response.ok) {
        return {
            status: "FEJL"
        };
    }
    const json = await response.json();

    //vi retunere et match ud fra hvad keyword der bliver tastet ind i søgefeltet
    const filteredData = json.filter(listing => (listing.title.toLowerCase().includes(keyword.toLowerCase())

        || listing.description.toLowerCase().includes(keyword.toLowerCase())
        || listing.user.firstname.toLowerCase().includes(keyword.toLowerCase())
        || listing.user.lastname.toLowerCase().includes(keyword.toLowerCase())
    ))

    //sortering, af a og b, vis det er først udtryk så retunere den et negativt tal så a ved at den er før b
    //vis det er den anden modtager den et positivt tal og  fortæller derfor b at den kommer før a
    if (sort === "titleAscending") {
        filteredData.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === "titleDescending") {
        filteredData.sort((a, b) => b.title.localeCompare(a.title))
    }




    return filteredData;

}