import { ReactComponent as Logo} from '../assets/buzzlingo.svg';
import styles from '../styles/logo.module.css';

export default function SidebarLogo() {
    return (
        <div className={styles.logo}>
            <Logo />
        </div>
    );
}