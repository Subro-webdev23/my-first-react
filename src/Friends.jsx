import { use } from "react"

export default function Friends({ friends }) {
    const friend = use(friends)

    return (
        <div className="state">
            <h2>It's Comming form API asyne/await</h2>
            <h3>Friends : {friend.length}</h3>
        </div>
    )
}