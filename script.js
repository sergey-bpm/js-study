// alert('Hello!')

// confirm('Are you learn JS')

// console.log(span)
// console.log(span.innerText)

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')

// const skillText = prompt('What language do you learn?', 'I do not know jet!')
// const isLoveValue = confirm('Do you like it?')

// console.log(isLoveValue)

// skill.innerText = skillText
// isLove.innerText = isLoveValue

// string.innerText = "string1"

// const example = document.getElementById('example')

// console.log(example.innerHTML)
// console.log(example.innerText)

// STRING

// const strl1 = 'I\'m Greeting'
// const strl2 = "Text"
// const strl3 = `Reverse I'm say ${strl1}`

// console.log(strl1)
// console.log(strl2)
// console.log(strl3)

//NUMBER
// + - * / ** 
// const num1 = 75 + 15
// const num2 = 79**2
// alert(num2)
//console.log(9999999999999999)

//BIGINT
//const bigint = 9999999999999999n
//console.log(bigint)

//BOOLEAN
// true / false
// > < >= <= <== >== == ===

// const bool = "a" < "b"
// console.log(bool)

//NULL
// let empty = null
// console.log(empty, typeof empty)

//UNDEFINED
// let box
// console.log(box, typeof box)

//SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

// //OBJECT
// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }

// // console.log(obj.name)
// // console.log(obj['name'])

// obj.job = "Google"

// const array = ["Anna", 18, false]
// array [3] = "Yandex"

// console.log(array)
// console.log(array[0])


// const variant = "option1"

// console.log(5 == "5")
// console.log(5 === "5")

// // console.log("a">15)
// // console.log(null==0)

// const username = prompt("Who you are", "anonim")

// if (username === "admin") {
//     alert("Hello boss!")
// } else if (username === "anonim" || !username) {
//     alert("I don't know you...")
// } else if (!username) {
//     alert(`Hi ${username}`)
// }

// const count = prompt("How many numbers do you want?", 10)
// let i = 10

// while(i < count) {
//     console.log(i++)
//     // i = i + 1
//     // i += 1
//     // i++
// }

// do {
//     console.log(i++)
// } while (i < count)
// console.log(i)

// const arr = []

// for (let i = 1; i <= 50; ++i) {
//     arr.push(i) 
//  }

// //  console.log(arr)
// //  arr[15] = 'abracadabra'
// //  console.log(arr)

// const newarr = []

// for (elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newarr.push(elem)
//     }
// }
// console.log(newarr)

// const obj = {
//     name: "Serg",
//     age: 25,
//     city: "Voroneg"
// }

// for ( key in obj) {
//     console.log(key, obj[key])
// }

// FUNCTION

// declaration
// console.log(scream(15, 11))
// function scream(a, b) {
// alert("AAAAAAAAAAAAA")
// const result = a * b
// return result
// return a * b
// }
// scream()
// console.log(scream(15, 13))


// expression
// const wowScream = function() {
//     alert("WOOOW")
// }
// // wowScream()

// arrow
// const arrow = () => {
//     alert("arrow is in the sky")
// }
// arrow()


// Game
// Press the button "Start", 
// game starts,
// the task runs,
// user can input the answer and press the button "Check"
// check user's answer with the right answer
// Output the result and the right answer
// Change the button "Check" to the button "Run Again"
// go to the start game




const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)
    // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }

    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task

}

// console.log(getTask())
// console.log(getTask())
// console.log(getTask())
// console.log(getTask())

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "The Game has began"
        userAnswer.value = null
        // start the task and get the answer
        // const task = getTask()
        // show the task to user
        userTask.innerText = getTask()
        userAnswer.hidden = false
        // change the button
        btnGame.innerText = "Check!"
        // change the state
        toggleGameState()
    } else {
        // check the answer
        const isRight = gameState.rightAnswer == userAnswer.value
        // show result and congratulation
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "You are a Winner!" : "You don't win :( Try it again"
        // change the button
        btnGame.innerText = "Start the Game again!"
        // change the state
        toggleGameState()
    }
}

// test github

btnGame.addEventListener("click", startGameFunc)

userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})




// console.dir(document)
const choosedE1 = document.querySelectorAll(".choosed_block-container > div")
const counterE1 = document.querySelector(".choosed_block span")

// const choosedState = {
//     countElements: 0,
// }
// const changeCount = (value) => {
//     choosedState.countElements += value
//     counterE1.innerText = choosedState.countElements
// }

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterE1.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    // choosedE1[i].addEventListener("click", (e) => {
    // choose elements
    // choosedE1[i].className = "choosed_element"
    // console.log(e)
    // turn on the counter        
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}


for (let i = 0; i < choosedE1.length; i++) {
    choosedE1[i].addEventListener("click", eventFunc)
}

// choosedE1[2].removeEventListener("click", eventFunc)

// unit 6

// const timeIsOver = () => {
//     alert("time is over!")
// }



// setTimeout(timeIsOver, 2000)

// const alarm = setInterval(timeIsOver, 3000)

// const alarm = setInterval(() => {
//     let wantToSleep = confirm("Do you want to sleep?")
//     if (wantToSleep) {
//         console.log("tic")
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)


// console.log("1")
// setTimeout(() => {
//     console.log("2")
// }, 0)
// console.log("3")


const postsBlock = document.querySelector(".posts_block-container")
const showPostRTN = document.querySelector(".posts_block button")


function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postTitle.innerText = title
    postBody.innerText = body

    postItem.append(postTitle, postBody)
    postsBlock.append(postItem)
}

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            for (el of data) {
                addPost(el.title, el.body)
            }
            // addPost(data[7].title, data[7].body)
        })
        .catch(err => console.log(err.message))
}


// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => console.log(err.message))
// }
// createPost("title", "body", 15)

showPostRTN.onclick = () => {getPosts()}
