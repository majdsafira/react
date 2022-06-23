function map() {
let fruits = [
    {id: 1 , name: "Apple",  color: "Yellow"},
    {id: 2 , name: "Strawberry", color: "Red"},
    {id: 3 , name: "Kiwi", color: "Green"}
    
]; 
    
const tab = fruits.map((obj)=>{
    return (

            <tr>
            <th>{obj.id}</th>
            <td>{obj.name}</td>
            <td>{obj.color}</td>
            </tr>
            );
            });
    // console.log(names);

    
// const id = fruits.map((fruits)=>fruits.id);
// const name = fruits.map((fruits)=>fruits.name);
// const color = fruits.map((fruits)=>fruits.color);
return(  
        <table class="table" >
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">color</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {tab}
                </tbody>
                </table>)
            
}
export default map;