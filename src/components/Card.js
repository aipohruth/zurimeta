import {FaStar} from "react-icons/fa";


const Card = ({ title, price, distance, time, logo }) => {


    return (
      <div className="border rounded rounded-4 border-2 p-2">
        <div>
          <img src={logo} alt="images" className="card-img" />
        </div>
        <div className="pt-2 ">
          <span className="small text-black">{title}</span>
          <span className="small text-black float-end fw-semibold">{price}</span>
        </div>
        <div className="dis-time">
          <span className="small text-black">{distance}</span>
          <span className="small mb-4 fs-10 float-end text-black">{time}</span>
        </div>
        <div className="small pt-1">
            <div style={{ color: '#A02279' }}  className="fa-style">
        <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
