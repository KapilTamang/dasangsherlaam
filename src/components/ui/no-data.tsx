import Image from "next/image";

interface noDataDescription{
    content: string,
    orientation: string
}

export default function NoData({content, orientation}: noDataDescription) {
    return(
        <>
            {
                orientation == "horizontal" ? 
                (
                    <div className="no-data flex flex-col md:flex-row w-full justify-center items-center text-[1rem] md:text-[1.2rem] text-muted-foreground font-medium capitalize italic bg-accent">
                        <div className="no-data-image w-full h-auto flex flex-1 justify-center">
                            <Image 
                            src={`/images/nodata.png`}
                            alt="no-data"
                            width={450}
                            height={450}/>
                        </div>
                        <div className="no-data-text w-full flex flex-1 justify-center">
                            {content} !
                        </div>
                    </div>
                ):
                (
                    orientation == "vertical" && 
                    <div className="no-data flex flex-col w-full justify-center items-center text-[1rem] md:text-[1.125rem] text-muted-foreground font-medium capitalize italic bg-accent">
                        <div className="no-data-image w-full h-auto flex flex-1 justify-center">
                            <Image
                            src={`/images/nodata.png`}
                            alt="no-data"
                            width={300}
                            height={300}/>
                        </div>
                        <div className="no-data-text w-full flex flex-1 justify-center">
                            {content} !
                        </div>
                    </div>
                )
            }
        </>
    )
}