import styles from './Challeng.module.css'
function Challeng({ cars }) {

    return (
        <div>

            <div key={cars.id} className={styles.challenge}>Marca:{cars.brand}
            <p>
                Detalhes: {cars.cor}
            </p>
            </div>
        </div>
    )
}

export default Challeng