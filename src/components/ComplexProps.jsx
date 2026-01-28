import React from "react"

function UserProfileCard({user, theme, actions}){

    return(
        <div className={`p-6 rounded-xl ${theme.backgroundColor}${theme.textColor}`}>
<h2>{user.name}</h2>
<h3>{user.role}</h3>

{user.stats && 
<div>
    {Object.entries(user.stats).map(([key, value]) => (
          <div key={key}>
            <div className="text-sm capitalize text-gray-600">{key}</div>
            <div className="text-lg font-bold">{value}</div>
          </div>
        ))}
    </div>
}
        </div>
    )
}

function ComplexProps(){
       const users = [
  {
    user: {
      name: "rahul",
      email: "rahul@gmail.com",
      role: "admin",
      status: "active",
      stats: {
        posts: 245,
        followers: 2564,
        following: 100,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
      textColor: "text-gray-800",
      badgeColor: "bg-purple-200",
    },
    actions: {
        primary:{
            label:"view profile",
            onClick:()=>setMessage("viweing this rahul profile"),


        },
        secondary: {
            label:"view profile",
            onClick:()=>setMessage("viweing this admin profile"),
        }


    },
  },
];

         return(
        <>
        <div className={`text-white`}>

            <div className="y-8">
                <div>
                    <h3>User Profle Card</h3>
                    <div>

                        {
                        users.map((userData, index) => (
                            <UserProfileCard key={index} {...userData}/>
                        ))
                        }

                    </div>
                </div>
            </div>
        </div>

        </>
    )

}

export default ComplexProps