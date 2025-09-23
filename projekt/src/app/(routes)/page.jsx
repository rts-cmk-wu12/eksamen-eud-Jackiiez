import Kort from "@/components/ui/aktiviteter";

export default async function Home() {

  const response = await fetch("http://localhost:4000/api/v1/listings");
  const json = await response.json();
  console.log(json)
     return (

    <>
  <div className="itemss">
      {json.map(item =>

        <div className="itemm" key={item.id} >
          {/* vi henter vores kort hvor vi har en property som hedder "item" og giver den det samme parameter så vi viser alt indholdet fra kortet */}
          <Kort item={item} />
        </div>)}</div>
    </>
  );
}
