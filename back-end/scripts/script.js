document.addEventListener("click", (event) => {
  const result = [];
  const innerText = event.target.innerText;
  retrieveParents(event.target, result);

  var cssPath = "";
  for (var selector of result) {
    cssPath = cssPath.concat(selector.tag + " ");
  }
  SendDatas(cssPath, innerText);
});

//envoie des datas en BDD via API
function SendDatas(cssPath, innerText) {
  const datas = JSON.stringify({
    cssPath: cssPath,
    text: innerText,
  });
  const request = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: datas,
  };
  fetch("http://localhost:3000/api/paths", request)
    .then((response) => response.json())
    .then((response) => console.log(response));
}

//récupération du chemin CSS de l'élémet cliqué
function retrieveParents(element, result) {
  if (!element) {
    return result;
  }

  const data = {
    tag: element.localName,
  };

  result.push(data);
  retrieveParents(element.parentElement, result);
}
