import {
    FaUtensils,
    FaCar,
    FaHeartbeat,
    FaGamepad,
    FaGraduationCap,
    FaFileInvoiceDollar,
    FaHome,
    FaShoppingCart,
    FaBolt,
    FaWifi,
    FaPlane,
    FaBus,
    FaTrain,
    FaFilm,
    FaMusic,
    FaTshirt,
    FaMoneyBillWave,
    FaPiggyBank,
    FaBriefcase
} from "react-icons/fa";

export const iconsMap = {
    // alimentação
    utensils: FaUtensils,

    // transporte
    car: FaCar,
    bus: FaBus,
    train: FaTrain,
    plane: FaPlane,

    // saúde
    heartbeat: FaHeartbeat,

    // lazer
    gamepad: FaGamepad,
    film: FaFilm,
    music: FaMusic,

    // educação
    book: FaGraduationCap,

    // moradia / contas
    home: FaHome,
    bolt: FaBolt,
    wifi: FaWifi,

    // compras / consumo
    shopping: FaShoppingCart,
    tshirt: FaTshirt,

    // financeiro
    money: FaMoneyBillWave,
    piggy: FaPiggyBank,
    invoice: FaFileInvoiceDollar,
    briefcase: FaBriefcase,

    // fallback
    more: FaFileInvoiceDollar
};

export const getIcon = (iconName) => {
    return iconsMap[iconName] || FaFileInvoiceDollar;
};