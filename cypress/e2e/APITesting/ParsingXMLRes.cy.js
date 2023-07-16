
const xml2js=require('xml2js');
const parser= new xml2js.Parser({explicitArray:false});

describe("Parsing XML Response", ()=>{

    const xmlpayload="<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>string</name> 	</Category> 	<name>Jimmy</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>"
    let petId=null;

    before("Creating Pet", ()=>{

        cy.request({
            method:"POST",
            url:"https://petstore.swagger.io/v2/pet",
            body:xmlpayload,
            headers: {"Content-Type":"application/xml",
                        "accept":"application/xml"}
        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            parser.parseString(res.body, (err, result)=>{
                petId=result.Pet.id;


        })
        })
    })

    it("Fetching Pet by Id", ()=>{

        cy.request({
            method:"GET",
            url:"https://petstore.swagger.io/v2/pet/"+petId,
            body:xmlpayload,
            headers: {"Content-Type":"application/xml",
                        "accept":"application/xml"}
        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            parser.parseString(res.body, (err, result)=>{
                expect(result.Pet.name).equal("Jimmy");
                expect(result.Pet.id).equal(petId);


        })
        })
    })
    
})