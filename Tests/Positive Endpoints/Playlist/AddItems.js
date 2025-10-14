pm.test("Response status code is 201", function(){
    pm.response.to.have.status(201);
});

//check if response is valid JSON format
pm.test("Response is valid JSON format", function(){
    pm.response.to.be.json;
});

const jsonData = pm.response.json();

pm.environment.set("snapshot_id", jsonData.snapshot_id);
