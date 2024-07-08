'use client';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
    homeElement?: ReactNode;
    separator?: ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
};

const Breadcrumb = ({
    homeElement = 'Home',
    separator = <span> &gt; </span>,
    containerClasses = 'flex px-2 py-5 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-[black]/80',
    listClasses = 'hover:underline mx-2',
    activeClasses = 'text-amber-500',
    capitalizeLinks = true,
}: TBreadCrumbProps) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    const capitalizeText = (text: string) => {
        return text.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    const generateLink = (link: string, index: number) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
        const itemLink = capitalizeLinks ? capitalizeText(link) : link;

        return (
            <React.Fragment key={index}>
                <li className={itemClasses}>
                    <Link href={href}>{itemLink}</Link>
                </li>
                {pathNames.length !== index + 1 && separator}
            </React.Fragment>
        );
    };

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}>
                    <Link href="/">{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => generateLink(link, index))}
            </ul>
        </div>
    );
};

export default Breadcrumb;
