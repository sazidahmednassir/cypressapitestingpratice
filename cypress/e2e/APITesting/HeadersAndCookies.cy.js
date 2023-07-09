describe("Headers API Testing", ()=>{

    before("create access Token", ()=>{
        
        let authToken=null; 

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

        })

    })
})