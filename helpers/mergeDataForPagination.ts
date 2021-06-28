const mergeDataForPagination = (data: Array<Object>, limit: number = 4) => {
    const pageData: Array<Object> = []
    let subarr: Array<Object> = []

    data.forEach((dataItem, i) => {
        if(subarr.length < limit){
            subarr.push(dataItem)
        }else{
            pageData.push(subarr)
            subarr = []
            subarr.push(dataItem)
        }

        if(i === data.length - 1 && subarr.length){
            pageData.push(subarr)
        }
    })

    return {
        data: pageData,
        pageCount: pageData.length
    }
}

export default mergeDataForPagination