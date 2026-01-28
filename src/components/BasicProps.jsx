import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded transition-all font-medium
        ${size === "small" ? "text-sm px-4 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : "px-6 py-2"}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white mr-1" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white mr-1" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white mr-1" : ""}
        ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white mr-1" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
}


function BasicProps(){  
    const [clickCount, setClickCount]=useState(0); 
    return(
    <>
        <section className={`p-8 bg-white text-black rounded-2xl shadow-2xl`}>
            <h2>Basic Props</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
           <div className="space-y-4">
             <h3>Different Colors</h3>
              <div className="bg-gray-50 px-2 mr-2">
                <Button
                    text="small"
                    color="primary"
                    size="small"
                    onClick={()=> setClickCount(clickCount+1)}
                     />

                       <Button
                    text="Secondary Button"
                    color="secondary"
                    size="large"
                   
                    onClick={()=> setClickCount(clickCount+1)}
                     />
                       <Button
                    text="Danger Button"
                    color="danger"
                    onClick={()=> setClickCount(clickCount+1)}
                     />
                       <Button
                    text="Success Button"
                    color="success"
                    onClick={()=> setClickCount(clickCount+1)}
                     />
                        
            </div>
            <h3>Different Sizes {clickCount}</h3>
            <div className="bg-gray-50 px-2 mr-2">
                <Button
                    text="primary Button"
                    color="primary"
                    onClick={()=> setClickCount(clickCount+1)}
                     />

                       <Button
                    text="Secondary Button"
                    color="secondary"
                     disabled={true}
                    onClick={()=> setClickCount(clickCount+1)}
                     />
                       <Button
                    text="Danger Button"
                    color="danger"
                    onClick={()=> setClickCount(clickCount+1)}
                     />
                       <Button
                    text="Success Button"
                    color="success"
                    onClick={()=> setClickCount(clickCount+1)}
                     />
                        
            </div>
            <div className="bg-gray-10 text-black">
                <span>Click= {clickCount}</span>
            </div>
           </div>
            </section>
    </>
    )
}

export default BasicProps
