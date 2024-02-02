import Celebrities from "../pages/Celebrities"
import Chats from "../pages/Chats"
import Discover from "../pages/Discover"
import Users from "../pages/Users"


const routes = [
    {
        'title': 'Dashboard',
        'to': '/dashboard/',
        'page': <Discover />
    },
    {
        'title': 'Users',
        'to': '/users/',
        'page': <Users />
    },
    {
        'title': 'Celebrities',
        'to': '/celebrities/',
        'page': <Celebrities />
    },
    {
        'title': 'Chats',
        'to': '/chats/',
        'page': <Chats />
    },

    
]

export default routes