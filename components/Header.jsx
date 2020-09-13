import Link from "next/link"

export default function Header(){
	return (
    <div className="w3-top w3-theme">
      <div className="w3-bar" style={{ height: "45px"}} >
        <div className="w3-container" style={{ textAlign: "center"}} >
          <Link href="/">
            <a className="w3-button">
            <img style={{width: "35px"}} src="/images/logo.jpg" />
            </a>
          </Link>
         </div>
      </div>
    </div>
	)
}