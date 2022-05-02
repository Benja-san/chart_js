import Link from 'next/link'

const Sidebar = () => {
    return <aside>
        <h2>Menu</h2>
        <ul>
            <li>
                <Link href="/">Overview</Link>
            </li>
        </ul>
    </aside>
}

export default Sidebar