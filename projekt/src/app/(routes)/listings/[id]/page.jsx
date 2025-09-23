
// kode kommer fra gammelt projekt og stack overflow
import Image from "next/image";
import Link from "next/link";
import "./details.scss"

export default async function AktiviterDetails({ params }) {
  const { id } = await params;
  console.log(id)
  const response = await fetch(`http://localhost:4000/api/v1/listings`)
  console.log(response)
  const json = await response.json()
  console.log(json)
  //vi bruger json.find til lave id om til et nummer fordi det starter med at være en string siden det kommer fra vores url params og så 
  //samligner vi dem så vi finder det rigtige item fra vores json call. det vil sige vi altid får det rigtige item i forhold til hvad vi har klikket på i vores url
  const activity = json.find(item => item.id === parseInt(id));
  const sellerId = activity.user.id;
  console.log(sellerId)

  //vi laver et nyt array med json.filter og sørger for at vores current listing er den samme som den user som har lavet den her "activity"(sellerId)
  //og vi checker på den anden condition om item id matcher vores activity id
  const sellerListing = json.filter(item => item.userId === sellerId && item.id !== activity.id)
  return (<>
    <section className="outter">
      <section className="outter__details">
        <Image className="outter__details__image" src={activity.asset.url} alt="" width="430" height="490" quality={100} ></Image>

      </section>
      <section className="outter__details__info">
        <h1>{activity.title}</h1>
        <h2>{activity.user.firstname + " " + activity.user.lastname} </h2>
        <h2>{activity.createdAt}</h2>
        <h2>{activity.user.email}</h2>
        <p>{activity.description}</p>

        <Link href={"/"}  ><div role="button" className="details__button">Propose a swap</div></Link>
      </section>  
      
      
      
      <div className="items">
      <h2>Other Items from this Swapper</h2>
        {sellerListing.map(item => (
          <Link href={`/listings/${item.id}`}>
          <div  key={item.id}>
            <Image src={item.asset.url} alt={item.title} width={210} height={280}></Image>
            <h3>{item.title}</h3>
          </div></Link>
        ))}
      </div>

    </section>


  </>
  )
}