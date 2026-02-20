import Sidebar from '../components/Sidebar';
import styles from '../styles/sidebar.module.css'

export default function Settings() {
    return (
        <div className={styles.sidebarScreenSetting}>
            <Sidebar settingsButtonSelected={true}/>
            <h1>Settings</h1>
        </div>
    );
}
