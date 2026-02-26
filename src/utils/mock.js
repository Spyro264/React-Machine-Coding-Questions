export const mockData = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "components",
          isFolder: true,
          items: [
            { id: "4", name: "sidebar.jsx", isFolder: false },
            { id: "5", name: "header.jsx", isFolder: false },
            { id: "6", name: "footer.jsx", isFolder: false },
            { id: "7", name: "navbar.jsx", isFolder: false },
          ],
        },
        {
          id: "8",
          name: "utils",
          isFolder: true,
          items: [
            { id: "9", name: "mockdata.js", isFolder: false },
            { id: "10", name: "helpers.js", isFolder: false },
            { id: "11", name: "constants.js", isFolder: false },
          ],
        },
        {
          id: "12",
          name: "hooks",
          isFolder: true,
          items: [
            { id: "13", name: "useAuth.js", isFolder: false },
            { id: "14", name: "useFetch.js", isFolder: false },
            { id: "15", name: "useLocalStorage.js", isFolder: false },
          ],
        },
        {
          id: "16",
          name: "styles",
          isFolder: true,
          items: [
            { id: "17", name: "global.css", isFolder: false },
            { id: "18", name: "theme.css", isFolder: false },
          ],
        },
        { id: "19", name: "App.jsx", isFolder: false },
        { id: "20", name: "main.jsx", isFolder: false },
        { id: "21", name: "index.css", isFolder: false },
      ],
    },
    {
      id: "22",
      name: "public",
      isFolder: true,
      items: [
        { id: "23", name: "index.html", isFolder: false },
        { id: "24", name: "favicon.ico", isFolder: false },
        {
          id: "25",
          name: "images",
          isFolder: true,
          items: [
            { id: "26", name: "logo.png", isFolder: false },
            { id: "27", name: "banner.svg", isFolder: false },
          ],
        },
      ],
    },
    { id: "28", name: "package.json", isFolder: false },
    { id: "29", name: "vite.config.js", isFolder: false },
    { id: "30", name: ".gitignore", isFolder: false },
    { id: "31", name: "README.md", isFolder: false },
  ],
};