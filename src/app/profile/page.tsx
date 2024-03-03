import { changePremium, changeUsername, getSession } from "@/action"
import { redirect } from "next/navigation";

const ProfilePage = async() => {

  const session = await getSession();

  if(!session.isLoggedIn){
    redirect("/");
  }

  return (
    <div className="profile"> 
      <h1>Welcome to Profile page.</h1>
      <p>
        Welcome, {session.username}
      </p>
      <span>You are <b>{session.isPro ? "Premium" : "Free" }</b> </span>
      <form action={changePremium}>
        <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
      </form>

      <form action={changeUsername}>
        <input type="text" name="username" required placeholder={session.username}  />
        <button>update</button>
      </form>
    </div>
  )
}

export default ProfilePage
