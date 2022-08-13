import '../x.css'


const div = document.getElementById('app')
const btn = document.createElement('button')
btn.innerText = '懒加载'
btn.onclick = () => {
    const promise = import('../lazy.js')
    promise.then((module)=>{
        module.default();
    },()=>{
        console.log('模块加载错误')
    })
}

div.appendChild(btn)