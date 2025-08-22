
import { Link } from 'react-router-dom';
function Users(){
  
    const users=[
        {id:1,name:"Narendra Modi"},
        {id:2,name:"Donald Trump"},
        {id:3,name:"Elon Musk"}
    ]
    return(
        <>
            <div className="bg-indigo-200 p-6 font-serif">
                <h1 className="text-xl ">Users List Page</h1>
                {
                    users.map((user)=>{
                        return (
                            <div key={user.id} className="bg-red-100 p-4 m-2 w-1/7 rounded-lg shadow-lg">
                                <h2 className="text-xl font-semibold">
                                    <Link to={"/users/"+user.id}>{user.name}</Link>
                                </h2>
                            </div>
                        )
                    })
                }

            </div>
       
        </>
    )
}

export default Users;