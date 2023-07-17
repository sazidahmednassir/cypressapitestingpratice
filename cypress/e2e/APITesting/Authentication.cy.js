describe("Basic Auth ", ()=>{

    it("Basic Auth", ()=>{

      cy.request({
        method:"GET",
        url:"https://postman-echo.com/basic-auth",
        auth:{
            user:"postman",
            pass:"password"
        }
      })
      .then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.authenticated).to.eq(true)
      })




    })


    it("Digest Auth", ()=>{

        cy.request({
          method:"GET",
          url:"https://postman-echo.com/basic-auth",
          auth:{
              username:"postman",
              password:"password",
              method:"digest"

          }
        })
        .then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body.authenticated).to.eq(true)
        })
  
  
  
  
      })


      const token='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'
      it("Bearer Auth Token",()=>{

        cy.request({
          method:"GET",
          url:"https://api.github.com/user/repos",
          headers:{
            Authorization:'Bearer '+token
          }

        })
        .then((res)=>{
          expect(res.status).to.eq(200)
        })
      })


      it("API KEY Auth",()=>{

       cy.request({
        method:"GET",
        url:'https://api.openweathermap.org/data/2.5/weather?q=Dhaka',
        qs:{
          appid:'5bda770012e627ac4719e8d8f801819d'
        }

       })
       .then((res)=>{
        expect(res.status).to.eq(200)
       })


      })


})