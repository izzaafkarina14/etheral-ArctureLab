import Link from "next/link"

const NotFound = () => {
    return (
        <main>
            <p>Not found page</p>
            <Link href="/landing-page" className="hover:underline">Back to Landing Page</Link>
        </main>
    )
}

export default NotFound;