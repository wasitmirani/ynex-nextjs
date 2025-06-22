import Link from 'next/link';

interface BreadcrumbProps {
    items: { label: string, link?: string }[];
    current: string;
}

const Breadcrumb = ({ items, current }: BreadcrumbProps) => {
    return (
        <div>
            <nav>
                <ol className="">
                    <li className="">
                        <a className="" href="javascript:void(0);">
                            Home
                        </a>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="">
                            {item.link ? (
                                <Link className="" href={item.link}>{item.label}

                                </Link>
                            ) : (
                                item.label
                            )}
                        </li>
                    ))}

                    <li className="" aria-current="">
                        {current}
                    </li>
                </ol>
            </nav>
            <h1 className="">{current}</h1>

        </div>
    );
};


export default Breadcrumb;
