'use client'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Link from "next/link";
import { SplitText } from "gsap/SplitText"
import {useRef} from "react";

gsap.registerPlugin(useGSAP, SplitText);

export default function NavBar() {

    const container = useRef(null);
    //const [padding, setPadding] = useState("md:py-21 sm:py-18 py-16")

    useGSAP(() => {
        gsap.to("#separator", {
            width: "50%",
            delay: 1,
            duration: 2,
        })
        gsap.from("#subtitle", {
            scale: 0.1,
            delay: 1,
            duration: 2,
        })
        gsap.to("#subtitle", {
            opacity: 1,
            delay: 1,
            duration: 2,
        })
        gsap.from("#name", {
            yPercent: 100,
            delay: 2.5,
        })
        if (window.matchMedia("(min-width: 402px)")) {
            gsap.to("#links", {
                display: "flex",
                textDecoration: "underline",
                opacity: 1,
                delay:3,
                duration:2,
            })
        }
        //setPadding("")
    },{scope: container});

    return(
        <header>
            <div id="header" ref={container} className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black countainer">
                <div id="pad" className={`flex min-h-30 w-full max-w-4xl flex-col justify-center items-center bg-white dark:bg-black sm:items-start`}>
                    <div id="name" className="mx-auto">
                        <div className="flex w-full items-center gap-1 justify-center">
                            <h1 className="max-w-xs text-3xl font-semibold sm:py-1 leading-10 tracking-tight text-black dark:text-zinc-50">
                                Fergus
                            </h1>
                            <hr id="separator" />
                            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                                Adams
                            </h1>
                        </div>
                        <div>
                            <h2 id="subtitle" className="md:text-3xl text-base text-center tracking-tight text-black dark:text-zinc-50">
                                A Frontend focused Fullstack developer
                            </h2>
                        </div>
                        <div id="links" style={{display:"none", opacity: 0}} className="md:text-3xl text-sm justify-between">
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/about-me">
                                About Me
                            </Link>
                            <Link href="/projects">
                                Projects
                            </Link>
                            <Link href="/anchors">
                                Other
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}