import JourneyHeader from "./shop/JourneyHeader"
export  function  StaticPage({page}){
    return (
        <>
            <JourneyHeader/>
            <div className="page-content">
                {page}
            </div>
        </>
    )
}