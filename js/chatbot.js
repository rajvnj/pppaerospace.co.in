function openChat(){

let question = prompt("Ask about admissions")

fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_OPENAI_KEY"
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{role:"system",
content:"You are assistant for Podar Prep Plus Aerospace Park preschool"},
{role:"user",content:question}
]

})

})

.then(res=>res.json())

.then(data=>{

alert(data.choices[0].message.content)

})

}