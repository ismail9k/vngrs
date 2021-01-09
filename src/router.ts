export const navigate = (path: string) => {
  return loadPage(path);
};

async function loadPage(path: string) {
  let component;
  switch (path) {
    case '/login':
      component = await import('./views/signup-view');
      break;

    case '/product':
      component = await import('./views/product-view');
      break;

    case '/':
    case '/home':
      component = await import('./views/home-view');
      break;
  }

  return component;
}