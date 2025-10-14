//checks if status code is 200
pm.test("Status code is 200", function(){
    pm.response.to.have.status(200);
});

//checks if response body contains user id
pm.test("Response body contains user id", function(){
    pm.expect(pm.response.json().id)
    .to.eql(pm.environment.get("userId"));
});
