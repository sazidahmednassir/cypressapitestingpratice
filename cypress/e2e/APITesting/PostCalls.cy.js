describe("post api testing", ()=>{


    it("Hard Coded JSON Object", ()=>{
      
        const touristBody={
            tourist_name:"sazid",
            tourist_email:"sazid1234@gmail.com",
            tourist_location:"Paris"
        }

     
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: touristBody
        })
        .then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.tourist_name).to.eq("sazid")
            expect(res.body.tourist_email).to.eq("sazid1234@gmail.com")
            expect(res.body.tourist_location).to.eq("Paris")

        })




    })

    it("Hard Coded 2 Dynamically JSON Object", ()=>{
      
        const touristBody={
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email:Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location:"Paris"
        }

     
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: touristBody
        })
        .then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.tourist_name).to.eq(touristBody.tourist_name)
            expect(res.body.tourist_email).to.eq(touristBody.tourist_email)
            expect(res.body.tourist_location).to.eq(touristBody.tourist_location)

        })




    })
    it.only("Hard Coded 3 used fixture", ()=>{

      
      
           cy.fixture('tourist').then((data)=>{

            const jsonData= data;

       
           

     
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: jsonData
        })
        .then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.tourist_name).to.eq(jsonData.tourist_name)
            expect(res.body.tourist_email).to.eq(jsonData.tourist_email)
            expect(res.body.tourist_location).to.eq(jsonData.tourist_location)
            expect(res.body).has.property('tourist_name', jsonData.tourist_name )
            expect(res.body).to.have.property('tourist_email', jsonData.tourist_email )

        })

    })
    

    })
})