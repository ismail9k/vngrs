export const UPDATE_PAGE = 'UPDATE_PAGE';


export const navigate = (page: string) => (dispatch: any) => {
  dispatch(loadPage(page));
};

export const pushState = (page: string) => (dispatch: any) => {
  console.log('page', page);
  window.history.pushState({}, '', page);
  dispatch(navigate(page));
};

const loadPage = (page: string) => (dispatch: any) => {
  switch (page) {
    case '/signup':
      import('../views/signup-view');
      break;

    case '/product':
      import('../views/product-view');
      break;

    case '/':
    case '/home':
      import('../views/home-view');
      break;
  }

  dispatch(updatePage(page));
};

const updatePage = (page: string) => {
  return {
    type: UPDATE_PAGE,
    page
  };
};