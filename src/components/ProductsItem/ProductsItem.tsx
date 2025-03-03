import classes from './ProductsItem.module.css'

type ProductsItemProps = {
    id: number
    image: string
    title: string
    price: string
}

const ProductsItem = ({id, image, title, price}:ProductsItemProps) => {
  return (
    <div className={classes.products_item}>
       <div><img src={image} alt={`product${id}`} /></div>
       <h3 className={classes.products_item_title}>{title}</h3>
       <div className={classes.products_item_price}>Rs. {price}</div>
    </div>
  )
}

export default ProductsItem