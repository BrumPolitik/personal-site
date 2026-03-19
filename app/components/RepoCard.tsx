
export default function RepoCard(props: {
    href: string | undefined;
    title: string;
    description: string;
}) {
    return (
        <a href={props.href} className=" flex flex-col max-w-1/2 repo-card">
            <div>
                {props.title}
            </div>
            <div>
                {props.description}
            </div>
        </a>
    )
}


