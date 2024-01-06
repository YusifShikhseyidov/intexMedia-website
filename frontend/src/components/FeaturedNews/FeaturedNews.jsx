import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import classes from "./FeaturedNews.module.css"


export default function FeaturedNews() {

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    const fetchData = async () =>{
      setLoading(true)
      try {
        const res = await axios.get("http://localhost:1337/api/blogposts?populate=*", {
          headers:{
            Authorization: "bearer 0ceec8739059982f87ca01f8fb962709ff5a32526f83090cba257f242e426f99555e4fcb826580fb9a00aed703388be0afce0a68e88866d92b84e50c430b2c0daa8c40997a0b9a61491d00afd89f8ad4039b036530f56fb7edbdd13462a49f005c4179ad18f2426eaae9aed7297bf285786401030b677b195e8c17b0c8191a72"
          }
        })
        setNews(res.data.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchData()
  },[])

  // console.log(news)

  return (
    <section className={classes.featuredNews}>
      <h1 className={classes.featuredNews_section_title}>Latest News</h1>
      {loading && <div className={classes.loader}></div>}
      {error && <div>error occured</div>}
      {!loading && !error && news.map((singlenews) => {
        return singlenews.id % 2 === 0 ? (
        <Link to={`news/${singlenews.id}`} key={singlenews.id}>
          <div className={classes.newsCard}>
              <div className={classes.leftPart}>
                <img src={`http://localhost:1337${singlenews.attributes.coverphoto.data.attributes.url}`} alt="newscoverphoto" />
              </div>
              <div className={classes.rightPart}>
                <span className={classes.news_relatedtowhat}><mark>{singlenews.attributes.relatedtowhat}</mark></span>
                <h1 className={classes.news_title}>{singlenews.attributes.title}</h1>
                <p className={classes.news_description}>
                  {singlenews.attributes.description.substring(0,400)}
                </p>
                <time dateTime="2018-07-07" className={classes.news_date}>News Date: {''}{singlenews.attributes.eventdate}</time>
              </div>
          </div>
        </Link>)
        : (
          <Link to={`news/${singlenews.id}`} key={singlenews.id}>
            <div className={classes.newsCard}>
                <div className={classes.rightPart_alternative_layout}>
                  <span className={classes.news_relatedtowhat_alternative_layout}><mark>{singlenews.attributes.relatedtowhat}</mark></span>
                  <h1 className={classes.news_title_alternative_layout}>{singlenews.attributes.title}</h1>
                  <p className={classes.news_description_alternative_layout}>
                    {singlenews.attributes.description.substring(0,400)}
                  </p>
                  <time dateTime="2018-07-07" className={classes.news_date_alternative_layout}>News Date: {''}{singlenews.attributes.eventdate}</time>
                </div>
                <div className={classes.leftPart_alternative_layout}>
                  <img src={`http://localhost:1337${singlenews.attributes.coverphoto.data.attributes.url}`} alt="newscoverphoto" />
                </div>
              </div>
        </Link>
        )
      })}
    </section>
  )
}
