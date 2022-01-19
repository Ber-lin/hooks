import React, { useCallback,useState } from 'react'
function UseCallback() {
    var [count, setCount] = useState(0)
    var [value, setValue] = useState(0)
    var b = useCallback(() => {
        console.log(222)
        return count
    }, [value])
    return (
        <div>
            <p>{b()}</p>
            <p>{value}</p>
            <button onClick={() => { setCount(++count) }}>addCount</button>
            <button onClick={() => { setValue(++value) }}>addValue</button>
        </div>
    )
}
export default UseCallback