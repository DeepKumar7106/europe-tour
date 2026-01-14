import Hero from "./Hero"
import Popular from "./Popular"
import Activities from "./Activities"
import Recommendation from "./Recoommendation"
import Underrated from "./Underrated"

export default function Main() {
    return (
        <main>
            <Hero />
            <Popular />
            <Activities />
            <Recommendation />
            <Underrated />
        </main>
    )
}