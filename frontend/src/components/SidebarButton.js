import styles from "../styles/sidebar.module.css"
import { NavLink } from "react-router-dom";

export default function SidebarButton({
    label,
    icon,
    onClick,
    variant = "primary",
    link,
}) {
    return (
        <NavLink
                link={link}
                className={({ isActive }) =>
                    isActive ? "sidebarButton active" : "sidebarButton"
            }>
            <div
                className={styles.sidebarButton}
                onClick={onClick}
                style={{
                    cursor: "pointer"
                }}>
                
                    <span className="sidebarButtonIcon">{icon}</span>
                    <span className="sidebarButtonText">{label}</span>
            </div>
        </NavLink>
        // <div
        //     className={styles.sidebarButton}
        //     onClick={onClick}
        //     style={{
        //         cursor: "pointer"
        //     }}>
        //         <NavLink
        //             link={link}
        //             className={({ isActive})} =>
        //                 isActive ? "sidebarButton active" : "sidebarButton"
        //         }
        //     ></div>
        //     <h3>{label}</h3>
        //     </NavLink>
        // </div>
    );
}