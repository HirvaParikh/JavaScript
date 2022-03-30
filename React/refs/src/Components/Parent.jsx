
import React, {useRef} from 'react'
import MenuList from './MenuList'

function Parent() {
  const listRef = useRef()
    return (
        <div>
            <button onClick={() => listRef.current.openList()}>Open List</button>
            <MenuList ref={listRef} />
        
        </div>
    )
    }

export default Parent;
