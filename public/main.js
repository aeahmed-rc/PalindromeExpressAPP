

const btn=document.querySelector('button')

let result=document.querySelector('h3')
var trash = document.getElementsByClassName("fa-trash");


btn.addEventListener('click',()=>{
  let input=document.querySelector('input').value.toLowerCase()

  fetch(`/api?word=${input}`)
  // const name = this.parentNode.parentNode.childNodes[1].innerText
  //     const msg = this.parentNode.parentNode.childNodes[3].innerText
  //     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
      fetch('Palindrome', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          pal: input,

        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
    });



    Array.from(trash).forEach(function(element) {
          element.addEventListener('click', function(){
            const pal= this.parentNode.parentNode.childNodes[1].innerText
            const resp= this.parentNode.parentNode.childNodes[3].innerText
            fetch('Palindrome', {
              method: 'delete',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                'pal': pal,
                'resp':resp,


              })
            }).then(function (response) {
              window.location.reload()
            })
          });
    });



  // .then(res =>res.json())
  // .then(response=>{
  //   console.log(response)
  //   console.log(response)
  //   document.querySelector('h3').innerHTML=response.res
  //
  //
  // })

  // stringReveresed(input)
  // checkPalidrome(input)
  // console.log(input)
// })

// function stringReveresed(input){
// let reverse=input.split('').reverse().join('')
// result.appendChild(document.createTextNode(reverse))
// console.log(reverse)
//   return reverse
// }
//
// function checkPalidrome(input,reverse){
//   console.log(input)
//
//   if(input===stringReveresed(input)){
//     let mainElement=document.createElement('section')
//     let element=document.createElement('h4')
//     document.body.appendChild(mainElement)
//     element.appendChild(document.createTextNode('Is A Palindrome'))
//     mainElement.appendChild(element)
//     input.value=""
//     console.log(mainElement)
//
//   }else {
//     let mainElement=document.createElement('section')
//     let element=document.createElement('h4')
//     document.body.appendChild(mainElement)
//     element.appendChild(document.createTextNode('Is not a Palindrome'))
//     mainElement.appendChild(element)
// console.log('no')
//   }
// // if(str===)
// }
