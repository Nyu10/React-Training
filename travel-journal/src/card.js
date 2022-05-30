import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.imageUrl} alt="location-img" />
      <div className="card-stats">
        <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 5 }}/>
        <h3>{props.location}</h3>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
        <h1>{props.title}</h1>
        <h3 className="dates">
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
