describe("Chaining Api", ()=>{

    it("Getting all the posts", ()=>{

        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",

        })
        .then((res)=>{
            expect(res.status).to.eq(200);
            const postid=res.body[0].id;
            return postid
        })
        .then((postid)=>{
            cy.request({
                method:"GET",
                url:`https://jsonplaceholder.typicode.com/comments?postId=${postid}`
            })
            .then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body).to.have.length(5);
            })
        })
    })
})