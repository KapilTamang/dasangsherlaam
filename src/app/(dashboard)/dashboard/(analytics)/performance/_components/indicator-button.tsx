
interface ButtonProps {
    status: string
}

export default function IndicatorButton({status}: ButtonProps) {
    return (
        <>
            {
                status === 'good'  ?
                (<span className="flex w-3 h-3 bg-[#24A148] shadow-[0_0_15px_rgba(34,211,238,0.5)] rounded-full"></span>) 
                :
                status === 'moderate' ?
                (<span className="flex w-3 h-3 bg-[#F1C21B] shadow-[0_0_15px_rgba(34,211,238,0.5)] rounded-full"></span>) 
                :
                (<span className="flex w-3 h-3 bg-[#FF0000] shadow-[0_0_15px_rgba(34,211,238,0.5)] rounded-full"></span>)
            }
        </>
    )
}