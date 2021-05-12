
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/ex1', component: () => import('pages/Exercice1.vue') },
      { path: '/ex2', component: () => import('pages/Exercice2.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
