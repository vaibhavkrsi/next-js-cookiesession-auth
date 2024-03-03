import Link from "next/link";
import LogoutForm from "./LogoutForm";
import { getSession } from "@/action";

const Navbar = async() => {
  const session = await getSession()
  console.log(session);
  return (
    <div>
        <Link href="/">Homepage</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
        {session.isLoggedIn && <LogoutForm/>} 
    </div>
)
}
export default Navbar;
