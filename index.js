var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add('flex-around');

//
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//
const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);

//
function handleTopMenuClick(e) {
    e.preventDefault();
    if(e.target.tagName !=='A')
        return;
    else{
        console.log(e.target.text);
        isActive(e);
    }
}
function isActive(e) {
    if (!e.target.classList.contains('active')) {
        topMenuLinks.forEach(function (link) {
            link.classList.remove('active');
        }); e.target.classList.add('active');
        TogglesubLinks(e);
    } else {
        e.target.classList.remove('active');
        TogglesubLinks(e);
    }
}

topMenuEl.addEventListner('click', handleTopMenuClick);

function TogglesubLinks(e) {
    const tempobj = menuLinks.find((obj) => obj.text === e.target.text);
    console.log(tempobj);
    if ('subLinks' in tempobj && e.target.classList.contains('active')) {
        subMenuEl.style.top = '100%';
        buildSubMenu(tempobj);
    }else {
        subMenuEl.style.top = '0'
        headgenerator(e);
    }
    
}
function buildSubMenu(tempobj) {
    if (subMenuEl.children.length > 0) {
        clearSubMenu();
    }
    tempobj.subLinks.forEach((obj) => {
        const newSubLink = document.createElement('a');
        newSubLink.href = obj.href;
        newSubLink.textContent = obj.text;
        subMenuEl.appendChild(newSubLink);
    });
}
function clearSubMenu() {
    while (subMenuEl.firstChild) {
        subMenuEl.removeChild(subMenuEl.firstChild);
    }
}

subMenuEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.tagName === 'A') return;
    else {
        console.log(e.target.text);
        subMenuEl.style.top = '0';
        topMenuLinks.forEach((link) => link.classList.remove('active'));
        headingGenerator(e);
        
    }
});
//
function headingGenerator(e) {
        const newHeadingGenerator = e.target.textContent;
        if (newHeadingOneContent === 'about') {
            const modifiedHeadingOneContent = 
            newHeadingGenerator[0].toUpperCase() + newHeadingOneContent.slice(1);
            console.log(modifiedHeadingOneContent);
            mainEl.querySelector('h1').textContent = modifiedHeadingOneContent;
            
        }
        else {
            mainEl.querySelector('h1').textContent = newHeadingOneContent;
        }
    }


