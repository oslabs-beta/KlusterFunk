import { Link } from "react-router-dom"

export default function Homepage() {
    return (
        <main>
        <nav>
            <Link to='/dashboard/demo'>DEMO</Link>
            <Link to='/login'>Login</Link>
        </nav>
        <Link to='/cluster'>enter your cluster</Link>
        </main>
    )
}