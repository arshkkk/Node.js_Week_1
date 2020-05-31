module.exports = (x,y, callback)=>{
    
    setTimeout(()=>{

        if(x<=0||y<=0)
        return callback(new Error('Length and Breadth should be greater than 0 '))
    
        callback(null, 
            {
                area : x*y, perimeter: 2*(x+y)
            })

    },2000)
    

}