import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Axios from "axios"
import NumberFormat from "react-number-format"
import MENU from "../library/ElogieMenu"
import Loader from "./Loader"
import * as Faker from "../library/Faker"

export default function LayoutDashboard({
 title="", pageTitle="", children
}){
 const [idShow, setIdShow] = React.useState("MENU")
 const [sidebarShow, setSidebarShow] = React.useState(false)
 const d = new Date()
 const router = useRouter()
 const { pass } = router.query
 const [isAdmin, setIsAdmin] = React.useState(false)
 const [loader, setLoader] = React.useState({...Faker.fakeloader})

 const close = () => {
  setSidebarShow(false)
 }

 const open = () => {
  setSidebarShow(true)
 } 

 const showThisId = idshow => () => {
  setIdShow(prevState => {
   if(prevState === idshow) return ""
   return idshow
  })
 }

 React.useEffect(() => {
  Axios.get("/api/elogie/adminmiddleware?pass="+pass)
  .then(res => {
   setIsAdmin(res.data)
   setLoader({
    ...Faker.fakeloader,
    isLoading: false,
   })
  })
  .catch(error => {
   setLoader(prevState => {
    const x = error.response.data
    const y = "Kesalahal terjadi !! Coba ulangi beberapa saat lagi atau jangan ragu untuk segera hubungi kami : )"
    const z = {
     ...prevState,
     isLoading: false,
     isError: true,
    }
    if(x === undefined) return {...z, errorMessage: y}
    return {...z, errorMessage: x}
   })
   console.log(error)
  })
 }, [pass])

 return (<React.Fragment>
   {loader.isError? 
    <p style={{textAlign: "center" }}>{loader.errorMessage}</p>
   :null}

   {loader.isLoading ? <Loader />: 
    !loader.isError ?
    isAdmin ?<React.Fragment>
     <div id="body" className="w3-content" style={{maxWidth:"1200px"}}>
      <Head>
       <meta charSet="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta name="theme-color" content="#000849" />
       
       <title>Elogie Store | {title} </title>

      </Head>

      {/* Sidebar/menu */}
      <nav className="w3-sidebar sidebar w3-bar-block w3-theme-white w3-collapse w3-top" style={{zIndex:"3",width:"250px", display: sidebarShow?"block":"none"}} id="mySidebar">
        <div className="w3-container w3-display-container w3-padding-16">
          <i onClick={close} className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
          <h3 className="w3-wide">
           <Link href="/">
            <b style={{cursor: "pointer"}}>ELOGIE</b>
           </Link>
          </h3>
        </div>

        <div className="w3-padding-64 w3-large w3-text-grey" style={{fontWeight:"bold", color: "#808080"}}>
         <Link href="/">
          <a className="w3-bar-item w3-button w3-light-grey">Home</a>
         </Link>
         
         {MENU.map(value => (
           <React.Fragment key={value.id}>
            <button onClick={showThisId(value.id)} className="w3-button w3-block w3-white w3-left-align" id="myBtn">
             {value.name} <i className="fa fa-caret-down"></i>
            </button>
            <div id={value.id} className={`w3-bar-block ${idShow === value.id? "w3-show": "w3-hide"} w3-padding-large w3-medium`}>
              {value.submenu.map(subvalue => (
               <Link href={"/elogie/"+subvalue.url} key={subvalue.id}>
                <a className="w3-bar-item w3-button w3-light-grey">{subvalue.name}</a>
               </Link>
              ))}
            </div>
           </React.Fragment>
         ))}
        </div>
      </nav>

      {/* Top Menu on Small Screen */}
      <header className="w3-bar w3-top w3-hide-large w3-theme w3-xlarge">
       <div className="w3-bar-item w3-padding-24 w3-wide">ELOGIE</div>
       <a href="#" className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={open}><i className="fa fa-bars"></i></a>
      </header>

      {/* Top Menu on Small Screen */}
      <div className="w3-overlay w3-hide-large" onClick={close} style={{cursor: "pointer", display: sidebarShow?"block":"none"}} title="close side menu" id="myOverlay"></div>

      {/* Page Content */}
      <div className="w3-main" style={{marginLeft:"250px"}}>
       {/* Push Down on Small Screen */}
       <div className="w3-hide-large" style={{marginTop:"83px"}}></div>

       {/* Top Header */}
       <header className="w3-container w3-xlarge">
         <p className={`w3-left`}>{pageTitle}</p>
         <p className="w3-right">
           <i className="fa fa-shopping-cart w3-margin-right"></i>
           <i className="fa fa-search"></i>
         </p>
       </header>

       {children}

       <footer className="w3-padding-64 w3-theme w3-center" id="footer">
        <div style={{marginTop: "64px", textAlign: "center"}} >
         <span className="w3-button">
          &copy; Copyright {d.getFullYear()} elogie
         </span>
        </div>
       </footer>

      </div>

      <style jsx>{`
       .w3-sidebar a {font-family: "Roboto", sans-serif}
        #body,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}
      `}</style>
     </div></React.Fragment>
    : <p style={{textAlign: "center"}}>404 halaman tidak ditemukan. Kembali ke halaman utama <Link href="/"><a>Home</a></Link></p>
   :null
  }
  </React.Fragment>
 )
}