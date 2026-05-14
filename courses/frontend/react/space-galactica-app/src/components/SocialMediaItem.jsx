import styles from "./Footer.module.css";
export function SocialMediaItem({ url, title, icon }) {
  return (
    <li className={styles.footerItem}>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={icon} alt={title} width="20" />
      </a>
    </li>
  );
}
