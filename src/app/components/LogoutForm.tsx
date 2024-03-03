import { logout } from "@/action"

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button>Logout</button>
    </form>
  )
}

export default LogoutForm
