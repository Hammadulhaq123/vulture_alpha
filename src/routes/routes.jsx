import AddCelebrity from "../pages/AddCelebrity"
import Celebrities from "../pages/Celebrities"
import Chats from "../pages/Chats"
import Discover from "../pages/Discover"
import EditCelebrity from "../pages/EditCelebrity"
import Notification from "../pages/Notification"
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
        'title': 'Groups',
        'to': '/chats/',
        'page': <Chats />
    },
    {
        'title': 'Notifications',
        'to': '/notifications/',
        'page': <Notification />
    },
    {
        'title': 'Add Celebrity',
        'to': '/add-celebrity/',
        'page': <AddCelebrity />
    },
    {
        'title': 'Edit Celebrity',
        'to': '/edit-celebrity/',
        'page': <EditCelebrity />
    },

    
]

export default routes