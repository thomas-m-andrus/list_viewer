import list from "./../views/list"
import detail from "./../views/detail"

const routes = [
    {path: '/', name: "home", redirect:"/list"},
    {path: '/list', name:"list", component: list},
    {path:'/detail',redirect:"/list"},
    {path:'/detail/:id', name:"detail", component: detail}
]

export default routes;