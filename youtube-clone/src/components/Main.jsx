import youtubeShort from "../assets/youtube-shorts.png"

function Main(){
    return(
        <>
        <div className="container text-3xl">
            <div className="side w-1/6 flex-col gap-y-7 border-b-2 mx-3 border-black">
                
            <div className="h-12"> <i class="fa-solid fa-house"></i> Home</div> 
           <div className="flex gap-x-2 h-12"><img src={youtubeShort} alt="short" className="h-8" /> Shorts</div> 
           <div className="h-12"><i class="fa-solid fa-layer-group"></i> Subscriptions</div>

            </div>



            <div className="main">
            

            </div>
            </div>
        </>
    )
}

export default Main;