// Define your functions
const transform = ['uppercase', 'lowercase'];
const type = ['number', 'string'];

const loadTailwindcss = async () => {
    var tailwindScript = document.createElement('script');
    var link = document.createElement('link');
    tailwindScript.src = "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
    link.rel = "stylesheet"
    document.head.appendChild(link);
    document.head.appendChild(tailwindScript);
}

const isError = (error) => {
    const html = `
    <button data-modal-target="select-modal" data-modal-toggle="select-modal" class="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>
   <div id="select-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Error Board
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <p class="text-gray-500 dark:text-gray-400 mb-4">Error Description:</p>
                <ul class="space-y-4 mb-4">
                    <li>
                        <input type="radio" id="job-1" name="job" value="job-1" class="hidden peer" required />
                        <label for="job-1" class="inline-flex items-center justify-between w-full px-5 py-2 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-500">                           
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Error Message</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">${error.message}</div>
                            </div>
                           
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="job-2" name="job" value="job-2" class="hidden peer">
                        <label for="job-2" class="inline-flex items-center justify-between w-full px-5 py-2 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 ">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Error Code</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">${error.statusCode}</div>
                            </div>
                            
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="job-3" name="job" value="job-3" class="hidden peer">
                        <label for="job-3" class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 ">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Error Code</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">${(error.statusCode == false) ? 'Syntax Error' : "Parse Error"}</div>
                            </div>
                           
                        </label>
                    </li>
                </ul>
                <a href="https://github.com/SPOTWEBDEV/firstclass-libray/">
                <button class="text-white inline-flex w-full justify-center bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                    Read Documentation
                </button>
                </a>
            </div>
        </div>
    </div>
</div> 
    `
    document.querySelector('body').insertAdjacentHTML("beforeend", html)
}


const firstClassGreeting = () => {
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

function theBest() {
    const html = `
    <button data-modal-target="select-modal" data-modal-toggle="select-modal" class="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>
   <div id="select-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[400px]0">
    <div class="relative p-4 w-1/2 ">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      CEO Wizard Web
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 w-full">
                
                <ul class="space-y-4 mb-4 w-full ">

                
<div class="flex items-start gap-2.5 w-full ">
   
   <div class="flex flex-col gap-1 w-full">
      <div class="flex flex-col w-full  leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
         <div class="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Micheal Ugochukwu</span>
         </div>
         <p class="text-sm font-normal text-gray-900 dark:text-white">This is the new office <3</p>
         <div class="group relative my-2.5">
            <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                              
            </div>
            <img style="height:300px; width:100%" className="bg-cover" src="https://images.pexels.com/photos/15045083/pexels-photo-15045083/free-photo-of-woman-in-hat-posing-by-vintage-car.jpeg?lazy=load" class="rounded-lg" />
         </div>
         
      </div>
   </div>
</div>      
                </ul>
            </div>
        </div>
    </div>
</div> 
    `
    document.querySelector('body').insertAdjacentHTML("beforeend", html)
}

// Array of method names
const method = ['randomNumber', 'randomUser', 'randomBankCard', 'getFetchData', 'theBest'];

document.addEventListener('DOMContentLoaded', function () {
    loadTailwindcss()

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
        isError(error)
    }
});
