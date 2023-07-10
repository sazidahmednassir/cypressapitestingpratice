describe("Parsing JSON Response",()=>{

    it("Simple JSON Response", ()=>{

        cy.request({

            method:"GET",
            url: "https://fakestoreapi.com/products"
        })
        .then((res)=>{

            expect(res.status).equal(200);
            expect(res.body[0].id).equal(1);
            expect(res.body[0].title).equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
            expect(res.body[0].price).equal(109.95);
            expect(res.body[0].rating.rate).equal(3.9);
        })
    } )

    it.only("Complex JSON Response", ()=>{

        let totalprice=0;

        cy.request({

            method:"GET",
            url: "https://fakestoreapi.com/products",
            qs:{limit:5}
        })
        .then((res)=>{

            expect(res.status).equal(200);
            res.body.forEach((element)=>{
               totalprice= totalprice+ element.price;

            })

            expect(totalprice).equal(899.23);

         
        })
    } )

})