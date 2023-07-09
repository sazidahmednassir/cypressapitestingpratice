// import { slowCypressDown } from "cypress-slow-down";



describe("HTTP Requests 2", ()=>{



it("Post Call", ()=>{

    cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        body: {
            title: "sazid",
            body: "sazid is goood",
            userId:1,
        }
    })
    .its("status")
    .should("equal", 201)
})


it("Put Call", ()=>{

    cy.request({
        method: "PUT",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        body: {
            title: "sazid!",
            body: "sazid is goood",
            userId:1,
            id:1
        }
    })
    .its("status")
    .should("equal", 200)
})

it("Get List of Call", ()=>{

    cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
    .its("status")
    .should("equal", 200);

})


it("Delete Call", ()=>{

    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1")
    .its("status")
    .should("equal", 200);

})

})