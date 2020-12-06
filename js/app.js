// user-tools dropdown
const toolList = document.querySelector('.user-tools');
const avatarBtn = document.querySelector('.user-avatar');

function showUser(){
    const item = this.parentNode.lastElementChild;
    console.log(item);
    item.classList.toggle('show');
}

avatarBtn.addEventListener('click', showUser);