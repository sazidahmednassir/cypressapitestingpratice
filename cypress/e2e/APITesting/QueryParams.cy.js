describe("API Testing with query", ()=>{

  it("passing query parameter", ()=>{

    const qparam={page:2}

    cy.request({
        method:"GET",
        url:"https://reqres.in/api/users",
        qs:qparam
    })
    .then((res)=>{
        expect(res.status).equal(200);
        expect(res.body.page).equal(2);
        expect(res.body.data).has.length(6);
        expect(res.body.data[0]).have.property('id', 7);
        expect(res.body.data[0]).have.property('first_name', 'Michael');
    })

  })


})