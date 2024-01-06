// import axios from "axios";

// export const makeRequest = axios.create({
//   baseUrl: "http://localhost:1337/api",
//   headers:{
//     Authorization: "bearer 0ceec8739059982f87ca01f8fb962709ff5a32526f83090cba257f242e426f99555e4fcb826580fb9a00aed703388be0afce0a68e88866d92b84e50c430b2c0daa8c40997a0b9a61491d00afd89f8ad4039b036530f56fb7edbdd13462a49f005c4179ad18f2426eaae9aed7297bf285786401030b677b195e8c17b0c8191a72"
//   }
// })

// below is newssection2 old code
{/* <div className={classes.newsBox}>
          <>
            <div className={classes.imgWrapper}>
              <Link to="#">
                <img src={img} alt="news" />
              </Link>
            </div>

            <time className={classes.timeStamp} dateTime="2023-12-08">
              2023 Dec 08
            </time>

            <Link to='#' className={classes.linkTitle}>
              Hello World
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              modi qui cumque nesciunt eos beatae eaque at similique optio
              assumenda vel minima velit, ad alias unde inventore nobis
              blanditiis delectus...
            </p>
          </>
        </div> */}

        {/* right part of the news section */}
      {/* <div className={classes.rightPart}>
        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Read more</div>
        </Link>
      </div> */}

      // newsCard old styles
//       .newsCard {
//   display: grid;
//   grid-template-columns: 1.5fr 1fr;
//   grid-template-rows: 1fr;
//   grid-column-gap: 40px;
//   grid-row-gap: 0px;
//   margin-bottom: 5rem;
// }

// .newsCard .leftPart{
//   display: flex;
//   column-gap: 30px;
//   justify-content: flex-end;
// }

// .newsCard .leftPart .newsBox{
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 350px;
//   height: 500px;
//   border: 1px solid #f2f2f2;
//   position: relative;
// }

// .newsCard .leftPart .newsBox .imgWrapper {
//   width: 100%;
//   height: 240px;
//   border-bottom: 3px solid #edac15;
// }

// .newsCard .leftPart .newsBox .timeStamp{
//   position: absolute;
//   top: 44.5%;
//   left: 10%;
//   color: #fff;
//   background-color: #edac15;
//   padding: 0.25rem 0.625rem;
// }

// .newsCard .leftPart .newsBox .imgWrapper img {
//   width: 100%;
//   height: 100%;
// }

// .newsCard .leftPart .newsBox p {
//   width: 100%;
//   font-size: 14px;
//   color: #999;
//   padding-bottom: 2rem;
//   padding-left: 2rem;
// }

// .newsCard .leftPart .newsBox a.linkTitle{
//   font-weight: 500;
//   font-size: 23px;
//   text-decoration: none;
//   color: #000;
//   width: fit-content;
//   height: 30px;
//   margin-left: 2rem;
// }

// .newsCard .leftPart .newsBox a.linkTitle:hover{
//   border-bottom: 2px solid #000;
// }

/* news section right part styling */
// .newsCard .rightPart{
//   display: flex;
//   flex-direction: column;
//   border: 1px solid #eee;
//   max-width: fit-content;
//   height: fit-content;
// }

// .newsCard .rightPart a{
//   color: #000;
//   display: flex;
//   flex-direction: column;
//   max-width: 450px;
//   text-decoration: none;
//   border: 2px solid #999;
//   border-top: 0;
//   border-left: 3px solid #eee;
//   border-right: 0;
//   border-bottom: 1px solid #eee;
//   padding: 20px 37px;
//   font-weight: 500;
//   transition: 0.3s;
// }

// .newsCard .rightPart a:last-child{
//   border-bottom: none;
// }

// .newsCard .rightPart a:hover{
//   border-left: 3px solid #edac15;
//   background-color: #999;
// }

// .newsCard .rightPart a div{
//   line-height: 1.1;
//   font-size: 14px;
//   font-weight: bold;
// }

// .newsCard .rightPart a p{
//   margin-top: 10px;
//   font-size: 15px;
// }

// .newsCard .rightPart a:hover div,
// .newsCard .rightPart a:hover p{
//   color: #fff;
// }

// .newsCard .rightPart a p{
//   color: #999;
// }

/* loading animation css */
// .loader {
//   width: fit-content;
//   font-weight: bold;
//   font-family: monospace;
//   font-size: 20px;
//   background: radial-gradient(circle closest-side,#000 94%,#0000) right/calc(200% - 1em) 100%;
//   animation: l24 1s infinite alternate linear;
// }
// .loader::before {
//   content: "Loading...";
//   line-height: 1em;
//   color: #0000;
//   background: inherit;
//   background-image: radial-gradient(circle closest-side,#fff 94%,#000);
//   -webkit-background-clip:text;
//           background-clip:text;
// }

// @keyframes l24{
//   100%{background-position: left}
// }

// @media (max-width:768px) and (min-width: 320px){
//   .newsSection2 {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr;
//     grid-column-gap: 0px;
//     grid-row-gap: 40px;
//     margin-bottom: 5rem;
//     place-items: center;
//   }

//   .newsSection2 .leftPart{
//     display: flex;
//     flex-direction: column;
//     row-gap: 30px;
//     align-items: center;
//   }
// }

// @media (max-width: 1536px) and (min-width:769px){
//   .newsSection2 {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr 0.84fr;
//     grid-column-gap: 0px;
//     grid-row-gap: 40px;
//     margin-bottom: 5rem;
//     justify-items: center;
//   }

//   .newsSection2 .leftPart{
//     display: flex;
//     column-gap: 10px;
//     justify-content: center;
//   }
// }