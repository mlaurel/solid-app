import { createRouteAction, useRouteData } from "solid-start";
import { createTrip } from "~/lib/trips";
import server$ from "solid-start/server";

export default function Trips() {
    // bring the route data into our component
    const trips = useRouteData();
    // Define an RPC call of what we want to run on the server
    const makeTrip = server$(async (trip) => createTrip(trip))
    // define a form for creating a trip using solid-states action system
    const [_, { Form }] = createRouteAction(async (formData) => {
        // create the new trip object
        const trip = {
            location: formData.get("location"),
            mileage: formData.get("mileage")
        }
        // pass object RPC call to create new trip on server
        makeTrip(trip)
    });
    return (
        <div class="max-w-xl mx-auto">
            <h2 class="text-2xl">Trips</h2>
            <ul class="flex flex-col">
                {trips()?.map((trip) => (
                    <li class="text-left">{trip.location} - mileage: {trip.mileage}</li>
                ))}
            </ul>
            <h2 class="text-2xl pt-10">Add a trip</h2>
            <Form class="my-8 flex gap-4 ">
                <input class="bg-gray-100 px-2" type="input" name="location" placeholder="location" />
                <input class="bg-gray-100 px-2" type="number" name="mileage" placeholder="mileage" />
                <input class="bg-sky-800 text-white px-4 py-2" type="submit" />
            </Form>
        </div>
    );
}
