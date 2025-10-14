// Goal: check what happend if we provide invalid data type in the request body
pm.test("Check if status code is 400", function(){
    pm.response.to.have.status(400);
});

//check if the response contain correct error message
pm.test("Response has correct error message", function(){
    pm.expect(pm.response.json().error).to.have.property("message", "Invalid data type");
});
