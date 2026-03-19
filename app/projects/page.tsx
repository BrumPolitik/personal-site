import RepoCard from "@/app/components/RepoCard";


export default function AboutMe() {

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex min-h-screen w-full flex-col items-center bg-white dark:bg-black sm:items-start">
                <main className="w-full justify-center items-center">
                    <div className="flex flex-col max-w-3/4 items-center mx-auto">
                        <RepoCard href={"https://github.com/BrumPolitik/personal-site"} title={"This Site"} description={"A personal site I started post State of the Browser 2026"} />
                    </div>
                </main>
            </div>
        </div>
    );
}