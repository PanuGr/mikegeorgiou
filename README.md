# mikegeorgiou
Mike's professional website. B2B/Portfolio 

## Design Example
https://briegercreative.com/

## Files
- index
- about
- services
- contact
- games (Javascript creates for each game)
- privacy
- netlify.toml (config file)
- games/ (folder for each game file.md)
- 404.html
- img/ (folder for local images)
Shared functionality among all pages:
- site.json
- style.css
- app.js

## Games
**To add a new game:**
1. Create games/gameName.md
2. The fileName should be the same with the id
3. Change the front matter (id, title, image, shortDescription).
4. Write their content in Markdown.
5. Add "gameName.md" to the games array in index.html. You'll find it in the bottom of the file, inside the scipt tag

## Site Details
The file site.json contains information shared among all pages:
- navigation links
- logo
- site's title
- social links in footer
If you change these values, they change automatically in every page.


