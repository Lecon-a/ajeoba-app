import { FaTicketAlt, FaLightbulb, FaChartPie } from "react-icons/fa";
import { IoIosPeople } from 'react-icons/io';
import { SiBookstack } from "react-icons/si";

const tabs = [
  {
    title: "overview",
    image: <FaChartPie className="fs-3" />,
  },
  {
    title: "tickets",
    image: <FaTicketAlt className="fs-3" />,
  },
  {
    title: "ideas",
    image: <FaLightbulb className="fs-3" />,
  },
  {
    title: "contacts",
    image: <IoIosPeople className="fs-3" />,
  },
  {
    title: "agents",
    image: <FaTicketAlt className="fs-3" />,
  },
  {
    title: "articles",
    image: <SiBookstack className="fs-3" />,
  },
];
export default tabs;
