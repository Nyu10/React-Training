import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils} from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    return (
        <div className = "header">
            <FontAwesomeIcon icon={faUtensils} />
            <h3>Ann Arbor Food Journal</h3>
        </div>
    );
}