// Insta Story Feature:->
// Image or data dalenge js ki help se:

let arr = [
  {
    dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fE1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1703008948807-354be77fa6a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VudGVsJTIwbWFufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1703102980426-a0c06477a2d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fE1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1555992643-a97955e6aae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fE1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fE1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fE1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1578835187997-017d9952f020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxNb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1513374933342-24bf646c8f5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxNb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1508606572321-901ea443707f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxNb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxNb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

let storiya = document.querySelector("#storiya");
let clutter = "";
arr.forEach(function (elem, index) {
  clutter += `<div class="story">
  <img id = "${index}" src="${elem.dp}"
    alt="IMAGE">
    </div>`;
});

// console.log(clutter);
storiya.innerHTML = clutter;

storiya.addEventListener("click", function (dets) {
  let value = arr[dets.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector(
    "#full-screen"
  ).style.backgroundImage = `url(${value})`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
