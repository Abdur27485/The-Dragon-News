import { useEffect } from "react"

const useTitleState = title => {
    useEffect(() => {
        document.title = `${title} - Dragon News`;
    }, [title])
}

export default useTitleState;