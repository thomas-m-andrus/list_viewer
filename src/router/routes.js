import list from "./../components/list"
import detail from "./../components/detail"

const routes = [
    {path: '/', name: "home", redirect:"/list"},
    {path: '/list', name:"list", component: list},
    {path:'/detail/:id', name:"detail", component: detail}
]

export default routes;