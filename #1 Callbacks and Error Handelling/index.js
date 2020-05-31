const rectangle = require('./rectangle')

function solveRec(x,y){

    rectangle(x,y,(err, result)=>{
       
        if(err)
            return console.log("Error: "+ err.message)

        console.log(`Area: ${result.area} || Perimeter: ${result.perimeter}`)

    })

}

solveRec(0,10)
solveRec(5,0)
solveRec(5,10)
solveRec(1,10)

