import styles from './Product.module.scss'

function Product  (props: {title: string, id: number, category:string, price: number, image: string}){

  const { title, category, price, image } = props

  return(
    <div className={styles.card}>
      <div className={styles.img_wrapper}>
        <img className={styles.product_img} src={image} alt={title} />
      </div>
      <div className={styles.product_text}>
        <h2>
          {title}
        </h2>
        <h3>
          {category}
        </h3>
        <span className={styles.product_price}>
            $ {price}
        </span>
      </div>
    </div>
  )
}

export default Product
