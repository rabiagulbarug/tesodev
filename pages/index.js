import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <button type="submit" className={styles.addNewRecord} onClick={() => router.push(`/add-link`)}>Add new record</button>
            <div className={styles.logo}>
                <img src="/assets/image/logo.png" alt="logo"/>
            </div>
            <p>Search app</p>
            <div className={styles.navigation}>
                <div className={styles.title}>Find in records</div>
            </div>
            <div className={styles.label}>
                <input type="text" className={styles.input}/>
                <img src="/assets/image/leftActionable.png" className={styles.img} alt=""/>
            </div>
            <div className={styles.control}>
                <button type="submit" className={styles.search}>Search</button>
            </div>
            <div className={styles.large}>
                <div className={styles.news}>Top News</div>
            </div>
            <div className={styles.group}>
                <img src="/assets/image/group.png" alt=""/>
            </div>
            <div className={styles.footer}>
                <img src="/assets/image/image1.png" alt="" className={styles.img1}/>
                <div className={styles.contact}>
                    <h5 style={{marginBottom:2}}>İletişim</h5>
                    <h6 className={styles.location}>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad.
                        Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03
                        Esenler/İstanbul</h6>
                    <h5>Email: bilgi@tesodev.com</h5>
                </div>
                <img src="/assets/image/image2.png" alt="" className={styles.img2}/>
            </div>
        </div>
    )
}
