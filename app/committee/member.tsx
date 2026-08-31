type MemberData = {
    name : string;
    role : string;
    games : Array<string>;
    tools : Array<[string, string]>;

}
export default function Member({name, role, games, tools=[]}: MemberData){
    const tool_tags = tools.map(tool=>
        <a className="px-1 mainbutton border-slate-800" key={tool[1]} href={tool[1]}>{tool[0]}</a>
    )
    return (
    <div className="flex flex-col items-center py-10">
        <div className="flex flex-row mainbutton">
        <h2 className="text-[32px]">{name}</h2>
        <p className="text-[32px] text-slate-900 dark:text-slate-400 px-3">({role})</p>
        </div>
        <p><strong>Favourite games:</strong> {games.join(", ")}</p>
        <p><strong>Favourite tools:</strong></p>
        <div className="">{tool_tags}</div>
    </div>
    )
}