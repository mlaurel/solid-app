import { A } from "solid-start";
import Footer from "~/components/Footer";

import Counter from "~/components/Counter";
export default function Yourmom() {
    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
                Your Mom
            </h1>
            <Counter />
            <p class="mt-8">
                Visit{" "}
                <a
                    href="https://solidjs.com"
                    target="_blank"
                    class="text-sky-600 hover:underline"
                >
                    solidjs.com
                </a>{" "}
                to learn how to build Solid apps.
            </p>
            <Footer />
        </main>
    );
}
