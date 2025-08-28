import { useRef, useState } from "react"

export default function useStateRef(val) {
    const [state, _setState] = useState(val);
    const stateRef = useRef(val);

    function setState(val){
        _setState(val)
        stateRef.current = val;
    }

    return [state, setState, stateRef]
}