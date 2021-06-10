import { AiOutlineContacts } from "react-icons/ai";
import { IoBusinessSharp, IoHome } from "react-icons/io5";
import {  IoMdPhotos } from "react-icons/io" 

export const items = [
    {
        cName: "text-link",
        icon: <IoHome/>,
        title: "Home",
        path: "/", 
    },
    {
        cName: "text-link",
        icon: <AiOutlineContacts/>,
        title: "Contacto",
        path: "/contacto", 
    },
    {
        cName: "text-link",
        icon: <IoMdPhotos/>,
        title: "Galeria",
        path: "/galeria", 
    },
    {
        cName: "text-link",
        icon: <IoBusinessSharp/>,
        title: "Nosotros",
        path: "/nosotros", 
    }
];