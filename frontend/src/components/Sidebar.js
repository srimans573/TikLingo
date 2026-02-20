import styles from "../styles/sidebar.module.css"
import SidebarButton from '../components/SidebarButton';
import SidebarLogo from '../components/SidebarLogo';
import { ReactComponent as HomeIcon } from "../assets/home_icon.svg"
import { ReactComponent as StarIcon } from "../assets/star_icon.svg"
import { ReactComponent as ProfileIcon } from "../assets/user_icon.svg"
import { ReactComponent as SettingsIcon } from "../assets/settings_icon.svg"
import { ReactComponent as LogoutIcon } from "../assets/logout_icon.svg"


export default function Sidebar({
    onClick,
    theme, 
    homeButtonSelected = false,
    reviewButtonSelected = false,
    profileButtonSelected = false,
    settingsButtonSelected = false,
    logoutButtonSelected = false,
}) {

    return (
        <div className={styles.sidebarContainer}>
            <SidebarLogo />
            <SidebarButton label="HOME" isSelected={homeButtonSelected} link='/home' icon = {<HomeIcon />} />
            <SidebarButton label="REVIEW" isSelected={reviewButtonSelected} link="/home" icon = {<StarIcon />} />
            <SidebarButton label="PROFILE" isSelected={profileButtonSelected} link='/profile' icon = {<ProfileIcon />} />
            <SidebarButton label="SETTINGS" isSelected={settingsButtonSelected} link='/settings' icon = {<SettingsIcon />} />
            <div className={styles.sidebarSpacer}>
                <p></p>
            </div>
            <SidebarButton label="LOG OUT" isSelected={logoutButtonSelected} theme="logout" link='/home' icon = {<LogoutIcon/>} />
        </div>
    )
}
