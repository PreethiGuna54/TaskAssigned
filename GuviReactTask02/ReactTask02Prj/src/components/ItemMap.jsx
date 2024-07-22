import ItemDisplay from "./ItemDisplay"

function ItemMap({allItems}){
    return(
        <>
        
        <div style={{width:"1456px",height:"200px",backgroundColor:"black",alignContent:"center"}}>
                <h1 style={{color:"white",textAlign:"center"}}>Shop in Style</h1>
        </div>
        <div className="App">
        
        {
            allItems.map((element,index)=><ItemDisplay title={element.title} thumbnail={element.thumbnail} rating={element.rating}
             price={element.price} brand={element.brand} id={element.id} category={element.category} /> )
        }
        </div>
        </>
    )
}

export default ItemMap


