import { use } from "react"

export default function User({ fetchUser }) {
    const users = use(fetchUser);
    return (
        <div className="state">
            <h2>It's Comming Form API</h2>
            <h3>User : {users.length}</h3>
        </div>
    )
}