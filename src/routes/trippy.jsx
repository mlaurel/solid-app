import { createRouteData } from "solid-start";
import Footer from "~/components/Footer";
import Trips from "~/components/Trips";

// define our route data, server provided data to frontend
export function routeData() {
    return createRouteData(async () => {
        // fetch data from api endpoint
        const response = await fetch("http://localhost:3000/api/trips")
        const data = await response.json()
        return data
    });
}

export default function Trippy() {
    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
                Trip
            </h1>
            <Trips />
            <Footer />
        </main>
    )
}
