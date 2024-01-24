import Work from "@/widgets/works/work";
export default function WorkInfo({params}: {params:{id: string}}){
    return (
        <div>
            <Work id={params.id}/>
        </div>
    )
}