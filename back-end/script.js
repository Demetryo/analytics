document.addEventListener("click", (event) => {
  const result = [];
  retrieveParents(event.target, result);
  console.log(JSON.stringify(result));
});

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
