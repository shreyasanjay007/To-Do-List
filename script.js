const container = document.getElementById("container")
const taskScreen = document.getElementById("task-screen")
const addButton = document.getElementById("btn")
const todos = document.createElement('div')
todos.id = 'todos'
container.appendChild(todos)

addButton.addEventListener('click',()=>{
    const taskBar = document.createElement('div')
    taskBar.className = 'task-bar'
    taskBar.innerHTML = `<div class="taskbar-inner-div1" >
                            <button class="tick-div" ></button>
                            <div class="task-screen-value" >${taskScreen.value}</div>
                         </div>

                         <div class="taskbar-inner-div2" ><img src="/assets/dustbin.png" width="18px" class="close" /></div>`

    todos.appendChild(taskBar)
    taskScreen.value = ""
    // console.log(document.getElementsByClassName('taskbar-inner-div1'))

    
    
        const tickButton = taskBar.querySelector('.tick-div')
        const taskValue = taskBar.querySelector('.task-screen-value')
        tickButton.addEventListener('click',()=>{
            if(tickButton.innerHTML === ""){
                tickButton.innerHTML = '✔️'
            }else{
                tickButton.innerHTML = ""
            }
            taskValue.classList.toggle('toggle-text')
            tickButton.classList.toggle('toggle-tick-div')
        })

        const closeButton =taskBar.querySelector('.close')
        closeButton.addEventListener('click',()=>{
            todos.removeChild(taskBar)
        })
    }

    // console.log()
)


// const tick = document.getElementsByClassName('tick-div')[0]
// tick.addEventListener('click',()=>{
//     console.log("clicked")
//     const taskScreenValue = document.getElementsByClassName('task-screen-value')[0]
//     taskScreenValue.style.textDecoration = "line-through"
// })

