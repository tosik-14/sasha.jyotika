import styles from '@/features/Footer/ui/Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>© A Star Consulting</p>
            </div>
        </footer>
    );
};