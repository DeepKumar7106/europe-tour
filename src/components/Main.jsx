import Hero from "./Hero"
import Popular from "./Popular"
import Activities from "./Activities"
import Region from "./Regions"
import Recommendation from "./Recoommendation"
import Underrated from "./Underrated"

export default function Main() {
    return (
        <main>
            <Hero />
            <Popular />
            <Activities />
            <Region />
            <Recommendation />
            <Underrated />
        </main>
    )
}