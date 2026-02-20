import styles from "../styles/sidebar.module.css"
import { Link } from "react-router-dom";


export default function SidebarButton({
    label,
    icon,
    variant = "primary",
    link = '/home', // if a link isn't added, make the sidebar button automatically default to home
    theme, 
}) {

    console.log("button for " + {label} + " pressed") // Debug statement :)
    return (
        <Link to={ link }>
        <div className = {styles.sidebarButton}>
            <span className = {styles.sidebarButtonIcon}>{icon}</span>
            <span className = {styles.sidebarButtontext}><p>{label}</p></span>
        </div>
        </Link>
    );
}