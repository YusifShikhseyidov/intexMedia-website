import { useState, useEffect } from "react"
import axios from "axios"
import classes from "./FeaturedNewsAside.module.css"
import { Link } from "react-router-dom"
import { PiPlayFill } from "react-icons/pi";

export default function FeaturedNewsAside() {

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    const fetchData = async () =>{
      setLoading(true)
      try {
        const res = await axios.get("http://localhost:1337/api/videonewsposts?populate=*", {
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

  console.log(news)

  return (
    <aside className={classes.featuredVideoNews}>
      <h1 className={classes.featuredVideoNews_aside_title}>Featured news</h1>
      {error ? <div>?!error occured?!</div> 
      : loading ? <div className={classes.loader}></div>
      : news.map((singleNews=>(
        <Link to={`news/${singleNews.id}`} key={singleNews.id}>
          <div className={classes.aside_news_box}>
            <div className={classes.aside_news_box_videoHeader_box}>
              <img src={`http://localhost:1337${singleNews.attributes.cover_photo.data.attributes.url}`} alt="video-content-cover"/>
              <PiPlayFill className={classes.play_btn}/>
            </div>
            <div className={classes.aside_news_box_videoNews_info_box}>
              <div>
                <mark className={classes.videoNews_relatedtowhat}>{singleNews.attributes.news_related_to_what}</mark>
                <time dateTime={singleNews.attributes.news_date}>News date: {singleNews.attributes.news_date}</time>
              </div>
              <h2 className={classes.videoNews_header}>{singleNews.attributes.news_title}</h2>
            </div>
          </div>
        </Link>
      )))}
    </aside>
  )
}
