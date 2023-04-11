import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(objectSupport);
dayjs.extend(customParseFormat);

export default (...date) => dayjs(...date);