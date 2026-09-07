export interface Crumb {
    label: string;
    href: string | undefined;
}

export function resolveBreadcrumbs(
    pathname: string,
    slug: string
): Crumb[] {
    //Splits and removes all falsey values like "", null, undefined, 0 and false from the array created.
    const segments = pathname.split("/").filter(Boolean); 
    const items: Crumb[] = [{label: "dashboard", href: `/dashboard`}];

    let acc = "";
    for(let i=1; i<segments.length; i++) {
        if(segments[i] !== slug) {
            acc += `/dashboard/${segments[i]}`;
            const isLast = i === segments.length-1;
            const label = decodeURIComponent(segments[i]).replaceAll("-", " ");
            items.push({label, href: isLast ? undefined : acc});
        }
    }

    return items;
}