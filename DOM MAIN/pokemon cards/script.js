var main = document.getElementById("main");
let arr=["https://i.pinimg.com/736x/d3/61/90/d36190eb326eb02966819687128b34f9.jpg",
"https://i.pinimg.com/474x/7a/66/15/7a6615072a6613d1f8dff64532ad44d1.jpg",
"https://i.pinimg.com/736x/a2/9a/ea/a29aea58bdaa4a7fc08f6ede92a0f853.jpg",
"https://i.pinimg.com/736x/4e/ba/a5/4ebaa58f6ce3c8de123e5be8a3c3f045.jpg",
"https://i.pinimg.com/736x/33/f4/8c/33f48c9b2dfd9ec8d62e97931978f775.jpg"];
let s = "";
for(let i= 1; i <= 65; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card">
                <img src=${arr[r]}>
            </div>`;
}
main.innerHTML = s;
