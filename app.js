// This contains javascript functionality shared among all pages
document.addEventListener('DOMContentLoaded', () => {
  // Fetch the site.json file
  fetch('site.json')
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      // Access the site data
      const siteName = data.name;
      const logoUrl = data.logo;
      const socialLinks = data.socialLinks;
      const navigationLinks = data.navigation;

      // Update the site name in the navbar brand
      const navbarBrandSpan = document.querySelector('.navbar-brand span');
      if (navbarBrandSpan) {
        navbarBrandSpan.textContent = siteName;
      }

      // Update the logo image source
      const navbarLogoImg = document.querySelector('.navbar-brand img');
      if (navbarLogoImg) {
        navbarLogoImg.src = logoUrl;
      }

      // Dynamically create navigation links in the header
      const navList = document.querySelector('.navbar-nav');
      if (navList) {
        navList.innerHTML = ''; // Clear existing list items
        navigationLinks.forEach(link => {
          const listItem = document.createElement('li');
          listItem.className = 'nav-item';

          const linkAnchor = document.createElement('a');
          linkAnchor.href = link.url;
          linkAnchor.className = 'nav-link';
          linkAnchor.textContent = link.name;

          listItem.appendChild(linkAnchor);
          navList.appendChild(listItem);
        });
      }


      // Update the year in the footer
      const footerSpan = document.querySelector("footer p span");
      if (footerSpan) {
        footerSpan.textContent = new Date().getFullYear();
      }

      // Dynamically create social media links in the footer
      const socialList = document.querySelector('footer ul');
      if (socialList) {
        socialList.innerHTML = ''; // Clear existing list items
        socialLinks.forEach(link => {
          const listItem = document.createElement('li');
          listItem.className = 'list-inline-item';

          const linkAnchor = document.createElement('a');
          linkAnchor.href = link.url;
          linkAnchor.className = 'btn btn-outline-primary btn-sm';
          linkAnchor.setAttribute('aria-label', `Follow us on ${link.name}`);

          const icon = document.createElement('i');
          icon.className = `bi ${link.iconClass}`;

          linkAnchor.appendChild(icon);
          listItem.appendChild(linkAnchor);
          socialList.appendChild(listItem);
        });
      }
    })
    .catch(error => {
      console.error('Error fetching or parsing site data:', error);
    });
});

//Don't touch. This reads the markdown files
function parseFrontMatter(content) {
  const match = /^---\n([\s\S]+?)\n---/.exec(content);
  if (!match) return { attributes: {}, body: content };
  const yaml = match[1];
  const body = content.slice(match[0].length);
  return { attributes: jsyaml.load(yaml), body };
}

