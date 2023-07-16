document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', e=>{
    e.preventDefault()
    toDo(e.target.new_task_description.value)
    form.reset()
  })

}); 

function toDo(todo){
  const li = document.createElement('li')
  li.textContent = `${todo}  `
  const btn = document.createElement('button')
  btn.addEventListener('click',deleteToDo)
  btn.textContent = 'X'
  li.appendChild(btn)
  const ul = document.querySelector('ul')
  ul.appendChild(li)
 
}

function deleteToDo(e){
e.target.parentNode.remove()
}
