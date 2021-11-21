"use strict"
let divFeedback;

window.addEventListener('load',initialise);

function initialise(){
    bindElements();
   loadData()
    // bindEvents();


}
//laden van locatie in selectielijst
// function loadSelect()
// {
//     for (let zone in mountains) {
//         slcLocatie.options[slcLocatie.length] = new Option(zone, zone);
//       }
// }
//dom elementen

function loadData(){
  fetch("https://vdapgithowest.github.io/Data/Mountains.js")
  .then(function (resp) {
  return resp.json();
  })
  .then(function (data) {
  console.log(data);
  divFeedback.textContent = data.value.subject;
  })
  .catch(error => console.log(error));
 }

function bindElements()
{
    //  slcLocatie= document.getElementById("slcRegion");
     divFeedback=document.getElementById("feedback-zone");

}
//koppel events aan select
// function bindEvents()
// {
//     slcLocatie.addEventListener("change", () => {
//         let index = slcLocatie.selectedIndex;
//         let region = slcLocatie[index].value;
//         showDetails(region);
//       });
// }

// function showDetails(region) {
//     let MountainsRegion = mountains[region];
//     divFeedback.innerHTML = "";

//     //show region
//     let hdgZone= document.createElement("h1");
// hdgZone.textContent=region;
// hdgZone.className="feedback";
// divFeedback.appendChild(hdgZone);

//     if (Array.isArray(MountainsRegion)) {
//         MountainsRegion.forEach(mountaindData => {
//         divFeedback.appendChild(showMountainDiv(mountaindData));
//       });
//     } else {
//         divFeedback.appendChild(showMountainDiv(MountainsRegion));
//     }
//   }
//   function showMountainDiv(mountainObject) {
//     let divMountainDiv = document.createElement('div');
//     divMountainDiv.className = "default";

//     for (const key in mountainObject) {
//       let value = mountainObject[key];
//       let mountainInfo = `${key}: ${value}`;

//       if(key=="name")
//       {
//           const h= document.createElement("h2");
//           h.innerHTML=value;
//           divMountainDiv.appendChild(h);
//       }
//       else
//       {
//         let lblInfo = document.createElement('label');
//         lblInfo.innerText = mountainInfo + '\n';
//         divMountainDiv.appendChild(lblInfo);
//       }
  
//     }
//     return divMountainDiv;
//   }