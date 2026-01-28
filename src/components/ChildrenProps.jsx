import React from "react"

function Card({children, title, color='blue'}){
    const colorClasses={
        green:'border-green-500 bg-green-100',
        blue:'border-blue-500 bg-blue-100',
        red:'border-red-500 bg-red-100',
        gray:'border-gray-500 bg-gray-100',
        purple:'border-purple-500 bg-purple-100'
}
    return(
        <div className={`border-l-4 p-6 ${colorClasses[color]} rounded-lg shadow-md`}>
           {title && <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>}
           <div className="text-gray-700">
            {children}
           </div>
        </div>

    )
}

function Container({children, layout='vertical'}){
    const layoutClasses={
        vertical:'flex flex-col space-y-4',
        horizontal:'flex flex-row flex-wrap  gap-4',
        grid:'grid grid-cols-1 md:grid-cols-2 gap-4'

    }
    return(
       <div className={layoutClasses[layout]}>{children}</div>
    )
}

function ChildrenProps(){
    return(
        <>
        <section className="p-8  bg-white rounded-xl shadow-lg text-black">
            <h2>Children Props</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium debitis placeat impedit dolorem, sed saepe delectus dignissimos, officiis corrupti cumque quos odio quasi est harum repudiandae qui autem deleniti?</p>
            <div className="space-y-6">
                <div>
                    <h3>
                        Card Component with childreen
                    </h3>
                    <Container layout="grid">
                        <Card title="user profile" color="blue">
                            <p className="mb-2">
                                <strong>Name:</strong>Rahul
                            </p>
                             <p className="mb-2">
                                <strong>Email:</strong>rahul@gmail.com
                            </p>
                            <p className="mb-2">
                                <strong>Role</strong>Developer
                            </p>
                        </Card>     
                         <Card title="user profile" color="green">
                            <p className="mb-2">
                                <strong>Name:</strong>Rohit
                            </p>
                             <p className="mb-2">
                                <strong>Email:</strong>rohit@gmail.com
                            </p>
                            <p className="mb-2">
                                <strong>Role</strong>Developer
                            </p>
                        </Card>

                    </Container>
                </div>
            </div>
       
       
        </section>
       
        </>
    )

}

export default ChildrenProps