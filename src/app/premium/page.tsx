import { getSession } from "@/action"
import Link from "next/link";
import { redirect } from "next/navigation";

const PremiumPage = async() => {
  const session = await getSession();

  if(!session.isLoggedIn){
    redirect("/");
  }
  
  if(!session.isPro){
    return(
      <div className="notPremium">
        <h1>Only premium users can see the context!</h1>
        <Link href="/profile">
          Go to the profile page to upgrade to premium.
        </Link>
      </div>
    )
  }


  return (
    <div className="premium">
      <h1>Welcome to Premuim page</h1>       
      <ul>
        <li>Apple</li>
        <li>Organge</li>
        <li>Peach</li>
      </ul>
    </div>
  )
}

export default PremiumPage
