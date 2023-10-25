
const History = () => {


return [localStorage]?.map((element, index) => {
    const id = element.key(index)
    const users = JSON.parse(element[id])
    console.log(users)
    return (
        <div key={id} className="flex border-b-2 py-2 justify-between items-center">
    <div>{users.name}</div>
    </div>
    )
});    
}
export default History