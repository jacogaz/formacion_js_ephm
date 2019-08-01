let worker = {
    name:'Luis',
    role:'designer',
    doing: 'a full magazine for MSD'
}

localStorage.setItem('worker', JSON.stringify(worker));

let worker_after = JSON.parse(localStorage.getItem('worker'));

console.log(worker_after);