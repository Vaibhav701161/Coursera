function createCourseRoutes(app) {
app.get("/courses", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

app.get("/user/purchases", function(req,res){
    res.json({
        message : "user purchases endpoint"
    })
})


}
module.exports= {
    createCourseRoutes:createCourseRoutes
}