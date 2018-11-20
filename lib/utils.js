
module.exports = {
    proxySort(proxyTable){
        if(proxyTable && proxyTable.length>0){
            proxyTable = proxyTable.sort((a,b)=>{
                if(a.path && b.path)
                    return b.path.length-a.path.length;
                return 0;
            })
        }
        return proxyTable;
    }
}