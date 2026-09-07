import Link from "next/link"
import { usePathname } from "next/navigation"
import { resolveBreadcrumbs } from "@/utils/breadcrumb-utils"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function NavBreadcumb() {
    const pathname = usePathname();
    const items = resolveBreadcrumbs(pathname);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, i) => {
                const isLast = i === items.length-1
                return (
                    <div className="flex items-center capitalize" key={item.href ?? item.label}>
                        <BreadcrumbItem>
                            {isLast ? (
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            ) : (
                            <BreadcrumbLink asChild>
                                <Link href={item.href!}>{item.label}</Link>
                            </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                    </div>
                );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}