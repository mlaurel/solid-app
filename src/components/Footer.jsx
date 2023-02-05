import { A, useLocation } from "solid-start";

export default function Footer() {
    const location = useLocation();
    const active = (path) =>
        path == location.pathname
            ? "border-sky-600"
            : "border-transparent hover:border-sky-600";
    return (
        <p class="flex gap-3 my-4 mx-auto w-full justify-center ">
            <A href="/" class={`text-sky-600 border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                Home
            </A> |
            <A href="/yourmom" class={`text-sky-600 border-b-2 ${active("/yourmom")} mx-1.5 sm:mx-6`}>
                Yourmom
            </A> |
            <A href="/about" class={`text-sky-600 border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
                About
            </A>
        </p>
    );
}
