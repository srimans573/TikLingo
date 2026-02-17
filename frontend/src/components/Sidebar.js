import styles from "../styles/sidebar.module.css"
import SidebarButton from '../components/SidebarButton';
import SidebarLogo from '../components/SidebarLogo';

export default function Sidebar({
    onClick,
}) {
    return (
        <div className={styles.sidebarContainer}>
            <SidebarLogo />
            <SidebarButton label="Home" link="/Home" />
            <SidebarButton label="Review" link="/Home" />
            <SidebarButton label="Profile" link="/Profile" />
            <SidebarButton label="Settings" link="/Settings"/>
        </div>
    )
}