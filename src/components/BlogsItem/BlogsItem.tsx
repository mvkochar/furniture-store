import classes from './BlogsItem.module.css'

type BlogsItemProps = {
    id: number
    image: string
    title: string
    duration:string
    date: string
}

const BlogsItem = ({id, image, title, duration, date}:BlogsItemProps) => {
  return (
    <div className={classes.blogs_item}>
        <div><img src={image} alt={`blog${id}`} /></div>
        <h3 className={classes.blogs_item_title}>{title}</h3>
        <a href="" className={classes.blogs_item_more}>Read More</a>
        <div className={classes.blogs_item_info}>
            <div className={classes.blogs_item_duration}>{duration}</div>
            <div className={classes.blogs_item_date}>{date}</div>
        </div>
    </div>
  )
}

export default BlogsItem