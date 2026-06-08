type MemberData = {
    name : string;
    role : string;

}
export default function Member({name, role}: MemberData){
    return (
    <>
        <div className="flex flex-row">
        <h2 className="text-[32px]">{name}</h2>
        <h2 className="text-[32px] text-slate-900 dark:text-slate-400 px-3">({role})</h2>
        </div>
        <p></p>
    </>
    )
}