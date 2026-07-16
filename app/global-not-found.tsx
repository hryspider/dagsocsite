import RootLayout from "./layout"

export default function NotFound(){
    return(
        <RootLayout children = {
        <main className="h-full pt-30">
            <h2 className="font-sans text-[30px] text-center">Error 404 - Page not found</h2>
            <div className="text-center">
                <iframe
                src="/dinogame/dinogame.html"
                className="w-full h-[80vh]"
                // allow="fullscreen"
                
                />
            </div>
        </main>}></RootLayout>
    )
}