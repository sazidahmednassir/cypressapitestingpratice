describe("Headers API Testing", ()=>{

    let authToken=null; 

    before("create access Token", ()=>{
        

        cy.request({
              method:"POST",
              url:"https://simple-books-api.glitch.me/api-clients/",
              headers:
              {
                'Content-Type':'application/json'
             },
            body:{
                
                    clientName: Math.random().toString(5).substring(2),
                    clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
               
            }

        }).then((res)=>{
            authToken=res.body.accessToken;
        })

    })

    before("create Orders", ()=>{
        

        cy.request({
              method:"POST",
              url:"https://simple-books-api.glitch.me/orders",
              headers:
              {
                'Content-Type':'application/json',
                'Authorization': 'Bearer '+authToken,
             },
            body:{
                "bookId": 1,
                "customerName":"John"
            }

        }).then((res)=>{
            expect(res.status).equal(201);
            expect(res.body.created).equal(true);
        })

    })

    it('Fetching the all orders', ()=>{

        cy.request({
            method:"GET",
            url:"https://simple-books-api.glitch.me/orders",
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer '+authToken,

            },
            cookies:{
                'cookie_name':'sazid'
            }


        })
        .then((res)=>{
            expect(res.status).equal(200);
            expect(res.body).has.length(1);
        })
    })
})