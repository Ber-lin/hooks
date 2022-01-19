import React, { useMemo,useState } from 'react'
function UseMemo() {
    var [count, setCount] = useState(0)
    var [value, setValue] = useState(0)
    var b = useMemo(() => {
        console.log(222)
        return count
    }, [count])
    return (
        <div>
            <p>{b}</p>
            <p>{value}</p>
            <button onClick={() => { setCount(++count) }}>addCount</button>
            <button onClick={() => { setValue(++value) }}>addValue</button>
        </div>
    )
}
export default UseMemo