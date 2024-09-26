import styles from "./loading.module.css"

export default function Loading(){
    console.log("loadin");
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>
                <div></div>
            </div>
        </div>
    );
}