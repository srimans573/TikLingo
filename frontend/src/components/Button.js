import styles from "../styles/button.module.css"

export default function Button({
  label,
  onClick,
  variant = "primary",
  icon,
  fullWidth = false,
}) {
  const buttonClass = variant === "secondary" ? styles.buttonSecondary : styles.buttonPrimary;
  
  return (
    <div
      className={buttonClass}
      onClick={onClick}
      style={{
        width: fullWidth ? "100%" : "250px",
        height: "40px",
        borderRadius: "10px",
        display: "flex",
        cursor: "pointer"
      }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </div>
  );
}
