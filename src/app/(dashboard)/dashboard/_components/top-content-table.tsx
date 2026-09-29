
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import blogs from "@/data/blogs"

const topContents =  blogs.slice(0,10);

const tableHeaders = [{ title: 'Ranking'},{title: 'Blog'},{title: 'Category'},{title: 'Views'},
  {title: 'Visitors'}, {title: 'Shares'}, {title: 'Likes'}

];

export function TopContentTable() {
  return (
    <div className="mx-auto flex w-full flex-col">
      <Table className="border border-foreground/10">
        <TableHeader className="bg-accent">
          <TableRow>
            {
              tableHeaders.map((head, _index) => (
                  <TableHead key={_index} className="font-bold">{head.title}</TableHead>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {topContents.map((content, _index) => (
            <TableRow key={_index}>
              <TableCell className="font-mono text-sm">{_index+1}</TableCell>
              <TableCell>
                  <div className="flex flex-col capitalize">
                    <span className="text-sm font-medium">
                      {content.title}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {content.date}
                    </span>
                  </div>
              </TableCell>
              <TableCell className="capitalize">
                {content.category}
              </TableCell>
              <TableCell>
                {content.views}
              </TableCell>
              <TableCell>
                {content.visitors}
              </TableCell>
              <TableCell>
                {content.shares}
              </TableCell>
              <TableCell>
                {content.likes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
