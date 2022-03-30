import React, {useImperativeHandle,useState,forwardRef} from "react";

const MenuBar = forwardRef((props,ref)=>{
    const [visiblility, setVisibility] = useState(null)

    useImperativeHandle(ref,()=>({
        openList(){
            setVisibility(!visiblility)
            console.log(visiblility);
        }
    }))
    return(
        <>
            {visiblility === true?(
            <div className="listbar">
                <ul className="list-group">
                    <li className="list-group-item">Home</li>
                </ul>
            </div>):null}
        </>
)
})

export default MenuBar;