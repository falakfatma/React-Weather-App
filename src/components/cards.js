export default function card (imageUrl,position){
    console.log(position,imageUrl)
    return(
        <>
            <div className={`card ${position.position}`} >
                <h6 className='cardsWeekName'>
                    Wednesday
                </h6>
                <img src={`${imageUrl.imageUrl}`}></img>
                <p className='cardsTemperature'>
                    21'C
                </p>
            </div>
        </>
    )
}