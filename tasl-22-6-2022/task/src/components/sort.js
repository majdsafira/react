function Sort(){
    const array1 = ["Z", "A", "Q", "B", "C", "Y", "S", "W" ];
    const array2 = array1.sort();
    return(
        <div>
            {array2.map((value)=>
            
                <li>{value}</li>
            
            
            )}
        </div>
    )
    }
    export default Sort;