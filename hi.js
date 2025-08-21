let topic_question = "Compare how poets **present** the ways people are affected by conflict in 'Kamikaze"

class Response{
    constructor(introduction=[], main_body=[], conclusion=[]){
        this.introduction = introduction 
        this.main_body = main_body 
        this.conclusion = conclusion
    }
    show(){
        this.nested_array = [this.introduction, this.main_body, this.conclusion]
        for(let section of this.nested_array){
            if(section){
            console.log("Section length: " + String(section.length))
            }
                for(let element of section){
                    if(element){
                    console.log(element)
                    }
        }
    }// More methods
    }
}

/* class Comparative_response extends Response{
    constructor(first_poem="", second_poem=""){
        this.first_poem = first_poem
        this.second_poem = second_poem 
    }

} */

const new_response = new Response(["OneParagraph"], ["paragraph1", "paragraph2", "paragraph3"], ["conclusion one", "conclusion two"])

new_response.show()