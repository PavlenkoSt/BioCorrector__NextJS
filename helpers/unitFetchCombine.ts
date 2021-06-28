import fetcher from "./fetcher"
import isEmptyObject from "./isEmptyObject"

const unitFetchCombine = async (path: string, id: string) => {
    const unit = await fetcher(`http://localhost:3000/api/${path}/${id}`)
    const nextUnit = await fetcher(`http://localhost:3000/api/${path}/${+id + 1}`)

    const next = 
        isEmptyObject(nextUnit)
            ? await fetcher(`http://localhost:3000/api/${path}/0`)
            : nextUnit 

    return {
        unit, 
        next
    }
}

export default unitFetchCombine