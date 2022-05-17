const filterdata=((category,videodata)=>{
    if (category==="") {
        return videodata
        
    }
    return videodata.filter(video=>video.category===category)
})

export{filterdata}