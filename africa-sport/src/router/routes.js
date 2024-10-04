const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePages.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'menu', component: () => import('pages/MenuPages.vue') },
      { path: 'recherche', component: () => import('pages/RecherchesPages.vue') },
      { path: 'hm', component: () => import('pages/HomePges.vue') },
      // { path: '', component: () => import('pages/IndexPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
