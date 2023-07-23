describe("API Chaining GORest", ()=>{
    
    let auth_token="Bearer dc56e6b6ebaea7f7ade852e7949d19f990f2e1e8c2794d4a7246aef7cc179c0c";

    it("Create, Update, Delete in gorest API", ()=>{

        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            body:{
                name:'sazid ahmed nassir',
                gender: 'male',
                email: Math.random().toString(36).substring(2, 12) + "@gmail.com",
                status: 'active'
            },
            headers:{
                Authorization:auth_token
            }
        })
        .then((res)=>{
            expect(res.status).to.eq(201)
            const userid=res.body.id;
            cy.request({
                method:"PUT",
                url:`https://gorest.co.in/public/v2/users/${userid}`,
                body:{
                    name:'Fahim'
                },
                headers:{
                    Authorization:auth_token
                }

            })
            .then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.name).to.eq('Fahim')

                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${userid}`,
                    headers:{
                    Authorization:auth_token
                }

                })
                .then((res)=>{
                    expect(res.status).to.eq(204)
                })
            })

        })
    })



})