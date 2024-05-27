import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faTrashCan,
  faSpinner,
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faTrashCan, faSpinner, faCirclePlus);
};

export default Icons;