
import { showData1 } from "./Data";
import Card from "./Card";


const Show = () => {
    
  return (
        <section className="show">
        <h1>Inspiration for your next adventure</h1>
        <div class="row px-2 py-5 px-lg-5">
      {showData1.map((info, id) => (
        <div className="col-12 col-md-6 col-lg-3 p-1 " key={id}>
          <Card title={info.title} price={info.price} distance={info.distance} time={info.time} logo={info.logo} />
        </div>
      ))}
      </div>
        
        </section>
  )
}

export default Show
