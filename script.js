const container = document.getElementById("container")
const taskScreen = document.getElementById("task-screen")
const addButton = document.getElementById("btn")

addButton.addEventListener('click',()=>{
    const taskBar = document.createElement('div')
    taskBar.className = 'task-bar'
    taskBar.innerHTML = `<div class="taskbar-inner-div1" >
                            <button class="tick-div" ></button>
                            <div class="task-screen-value" >${taskScreen.value}</div>
                         </div>

                         <div class="taskbar-inner-div2" ><img src="/assets/close.png" width="18px" class="close" /></div>`

    container.appendChild(taskBar)
    taskScreen.value = ""
    // console.log(document.getElementsByClassName('taskbar-inner-div1'))

    for(let i=0; i<container.children.length-2; i++){
        console.log()
        const td = document.getElementsByClassName('tick-div')[i]
        td.addEventListener('click',()=>{
            if(td.innerHTML === ""){
                td.innerHTML = '✔️'
            }else{
                td.innerHTML = ""
            }
            // document.getElementsByClassName('task-screen-value')[0].style.textDecoration = 'line-through'
            document.getElementsByClassName('task-screen-value')[i].classList.toggle('toggle-text')
        })
    }

    // console.log()
})


// const tick = document.getElementsByClassName('tick-div')[0]
// tick.addEventListener('click',()=>{
//     console.log("clicked")
//     const taskScreenValue = document.getElementsByClassName('task-screen-value')[0]
//     taskScreenValue.style.textDecoration = "line-through"
// })

