//checks status code
pm.test("Response status code is 200", function(){
    pm.response.to.have.status(200);
});

const jsonData = pm.response.json();

//snapshot_id is existant
pm.test("Snapshot ID is returned", function(){
    pm.expect(jsonData).to.have.property("snapshot_id");
    pm.expect(jsonData.snapshot_id).to.be.a("string");
});

// cheks if response is empty or it contain message like "Item succesfully removed"
pm.test("Response body contain snapshot", function(){
    let responseBody = pm.response.json();
    pm.expect(responseBody).to.have.property("snapshot_id")
});
