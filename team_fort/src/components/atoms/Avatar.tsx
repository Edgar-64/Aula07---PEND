import Image from "next/image"

type Props = {
    src: string /*endereço da img*/
    alt?: string /*Descrição da img. ? é opcional.*/
}

export default function Avatar({ src, alt }: Props) {
    return (
        <div className=/*(w-1 = width:4px;)*/"w-10 h-[40px] relative" /*em [] pode-se usar as medidas (px,vh,vx,rem), fora não.*/>
            <Image
                src={src}
                alt={alt ||/*ou*/ ""}
                fill
                className="rounded-full object-cover border"
            />
        </div>
    )
}