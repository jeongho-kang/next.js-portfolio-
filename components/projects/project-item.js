import { APP_PATHS_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function ProjectItem({data}) {
    
    const Title = data.properties.project.title[0].plain_text
    const githubLink = data.properties.github.url
    const descrip = data.properties.description.rich_text[0]?.plain_text
    const daystart = data.properties.day.date.start
    const dayend = data.properties.day.date.end
    const Imgsrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.tag.multi_select

    return (
        <>
            <div className="project-card">
                <Image
                    className="rounded-t-xl"
                    src={Imgsrc}
                    alt="cover image"
                    width="100%"
                    height="60%"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}

                />
                
                <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{Title}</h1>
                <h3 className="mt-4 text-xl">{descrip}</h3>
                <p className="my-1">작업기간 : {daystart} ~ {dayend}</p>
                <a href={githubLink}>깃허브 바로가기</a>

                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={(aTag.id)}>{aTag.name}</h1>
                    ))}

                </div>

                </div>
               
            </div>
        </>
    )
}