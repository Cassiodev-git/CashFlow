import {
    FaUtensils,
    FaCar,
    FaHeartbeat,
    FaGamepad,
    FaGraduationCap,
    FaFileInvoiceDollar
} from "react-icons/fa";

export const iconsMap = {
    utensils: FaUtensils,
    car: FaCar,
    heartbeat: FaHeartbeat,
    gamepad: FaGamepad,
    book: FaGraduationCap,
    more: FaFileInvoiceDollar
};

export const getIcon = (iconName) => {
    return iconsMap[iconName] || FaFileInvoiceDollar;
};