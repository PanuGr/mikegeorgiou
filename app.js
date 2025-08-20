// This contains javascript functionality shared among all pages

//Sets the year in footer
document.querySelector("footer small span").textContent = new Date().getFullYear();

  //Don't touch. This reads the markdown files
  function parseFrontMatter(content) {
    const match = /^---\n([\s\S]+?)\n---/.exec(content);
    if (!match) return { attributes: {}, body: content };
    const yaml = match[1];
    const body = content.slice(match[0].length);
    return { attributes: jsyaml.load(yaml), body };
}

/* fetch("site.json")
.then(res => res.json())
.then(data => {
     document.getElementById("currentYear").textContent = data.currentYear;

    //For array of items 
    const servicesList = document.getElementById("services");
    data.services.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        servicesList.appendChild(li);
    }); 
}); */