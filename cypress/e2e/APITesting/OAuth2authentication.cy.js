describe('Oauth2', ()=>{

    let access_token=" ";
    it("get Oauth2 Acces token",()=>{

       

        cy.request({
            method:"POST",
            url:"https://github.com/login/oauth/access_token",
            qs:{
                client_id:'e35154fa4edbf0115572',
                client_secret:'88566750b7e258cd54b081a22f06fdb8e3268eb3',
                code:'2aaa0572d15e8fe9f362'

            }

        })
        .then((res)=>{
            const params=res.body.split('&');
            access_token=params[0].split("=")[1];
        })

    })

    it("Oauth2 request",()=>{

        cy.request({
            method:"GET",
            url:"https://api.github.com/user/repos",
            headers:{
                Authorization:'Bearer '+access_token

            }
        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body[0].id).to.eq(466689135)
        })
    })



})