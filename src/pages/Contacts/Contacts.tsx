import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <section id="Contact" className={styles.contacts}>
      <div className={styles.contactsHeader}>
        <h2 className={styles.contactsHeading}>Contacts</h2>
        <h1 className={styles.contactsSubheading}>Reach out to me!</h1>
      </div>

      <div className={styles.contactsContent}>
        <div className={styles.contactsLeft}>
          <div className={styles.contactItem}>
            <img src="assets/images/email.png" alt="Email" className={styles.contactIcon} />
            <span className={styles.contactText}>kalistasingh4@gmail.com</span>
          </div>

          <div className={styles.contactItem}>
            <img src="assets/images/linkedin.png" alt="LinkedIn" className={styles.contactIcon} />
            <a
              href="www.linkedin.com/in/kalista-singh-cs13"
              target="_blank"
              className={styles.contactLink}
            >
              LinkedIn
            </a>
          </div>

          <div className={styles.contactItem}>
            <img src="assets/images/address.png" alt="Address" className={styles.contactIcon} />
            <span className={styles.contactText}>Edmonton, Alberta</span>
          </div>
        </div>

        <div className={styles.contactsRight}>
          <img src="assets/images/me.png" alt="Me" className={styles.contactPhoto} />
        </div>
      </div>
    </section>
  );
}
