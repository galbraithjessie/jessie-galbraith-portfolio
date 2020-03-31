import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faMinusCircle, 
    faSpinner, 
    faPlusCircle,
    faPhoneVolume,
    faEnvelope,
    faMapMarkedAlt, 
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faMinusCircle, 
        faSpinner, 
        faPlusCircle, 
        faPhoneVolume, 
        faEnvelope, 
        faMapMarkedAlt,
        faLock
        );
};

export default Icons;