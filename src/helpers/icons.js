import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faTrashCan,
  faSpinner,
  faCirclePlus,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
      faTrash,
      faSignOutAlt,
      faEdit,
      faTrashCan,
      faSpinner,
      faCirclePlus,
      faPhone,
      faEnvelope,
      faMapMarkedAlt,
      faLock
    );
};

export default Icons;