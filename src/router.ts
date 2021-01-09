export const navigate = (path: string) => {
  loadPage(path);
};

function loadPage(path: string) {
  console.log('path', path);
}