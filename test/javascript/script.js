// Define your functions
const transform = ['uppercase', 'lowercase'];
const type = ['number', 'string'];

const isError = ()=>{
 console.log('isError')
}


const firstClassGreeting = ()=>{
         let greeting = ['Welcome back the best => Firstclass The Best']
         console.log('isError')
}


const userList = [
         {
                  id: 1,
                  firstName: "micheal",
                  lastName: "ugochukwu",
                  gender: 'male',
                  occupation: "web developer",
                  age: 30,
                  image: '',
                  email: function () {
                           return this.firstName + this.lastName + Math.floor(Math.random() * 900) + '@gmail.com'
                  },
                  fullName: function () {
                           return this.firstName + ' ' + this.lastName
                  }
         },
         {
                  id: 1,
                  firstName: "micheal",
                  lastName: "ugochukwu",
                  gender: 'male',
                  occupation: "web developer",
                  age: 30,
                  image: '',
                  email: function () {
                           return this.firstName + this.lastName + Math.floor(Math.random() * 900) + '@gmail.com'
                  }
         }

]

function randomNumber(element) {
         const custom = {
                  length: element.getAttribute('length') || 6,
                  time: element.getAttribute('time') || 1,
                  char: element.getAttribute('char') || 'AaBbCbDdEfFr134567890@#$%^*()',
                  start: element.getAttribute('startWith') || '',
                  transform: transform.includes(element.getAttribute('transform')) ? element.getAttribute('transform') : 'lowercase'
         }

         let number = ''
         for (let i = 0; i < custom.length; i++) {
                  console.log(i);
                  number += custom.char[Math.floor(Math.random() * custom.char.length)]
         }



         console.log(custom.transform);
         let value = custom.start + number

         if (custom.transform == 'uppercase') value = value.toUpperCase()
         if (custom.transform == 'lowercase') value = value.toLocaleLowerCase()


         return element.innerHTML = value
}



function randomUser(element) {
         console.log('hello from randomUser');
         const custom = {
             where: element.getAttribute('where'),
             is: element.getAttribute('is')
         };
     
         if (custom.where && custom.is) {
             const user = userList.filter(el => {
                 return el[custom.where] && el[custom.where] == custom.is;
             });
     
             if (user.length > 0) {
                 let img = element.querySelector('.firstClassImage');
                 let text = element.querySelector('.firstClassP');

                 const returns = text.getAttribute('return')

     
                 if (text) {
                  console.log(user[0][returns]);
                     if (typeof user[0][returns] === 'function') {
                         text.innerHTML = user[0][returns]();
                     } else {
                           console.log('yy');
                         text.innerHTML = user[0][returns];
                     }
                 }
     
                 if (img) {
                     img.src = user[0].imageUrl || '';
                     img.alt = user[0].image
                 }
             } else {
                 console.error('No matching user found');
             }
         } else {
             console.error('Invalid "where" or "is" attribute');
         }
     }

function randomBankCard() {
         console.log('hello from randomBankCard');
}

function getFetchData() {
         console.log('hello from getFetchData');
}

// Array of method names
const method = ['randomNumber', 'randomUser', 'randomBankCard', 'getFetchData'];

document.addEventListener('DOMContentLoaded', function () {
         // Grab the custom element using querySelector
         const element = document.querySelector('firstclass-tag[todo]');

         // Check if the element exists
         try {
                  if (element) {
                           const isAttribute = element.getAttribute('todo');

                           if (isAttribute) {
                                    if (method.includes(isAttribute)) {
                                             // Find the function by name
                                             const func = window[isAttribute];

                                             if (typeof func === 'function') {
                                                      func(element); // Call the function
                                             } else {
                                                      throw { status: false, message: 'Function not found', statusCode: 'Firstclass103' };
                                             }
                                    } else {
                                             throw { status: false, message: 'Unknown Method', statusCode: 'Firstclass102' };
                                    }
                           } else {
                                    throw { status: false, message: 'Todo Attribute cannot be empty', statusCode: 'Firstclass101' };
                           }
                  } else {
                           throw { status: false, message: 'Todo Attribute not found', statusCode: 'Firstclass100' };
                  }
         } catch (error) {
                  console.error(error.message, error.status);
         }
});
