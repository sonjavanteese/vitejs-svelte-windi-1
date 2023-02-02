  import P1 from './P1.svelte'
  import P2 from './P2.svelte'
  import P4 from './P4.svelte'
  import P3 from './P3.svelte'
  const routes = {
    '/': P1,
    '/data': P2,
    '/settings': P3,
    '*': P4
  }
 export default routes;