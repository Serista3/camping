type LinkItem = {
    href: string;
    label: string;
}

export const links: LinkItem[] = [
    {
        href: '/', 
        label: 'Home'
    },
    {
        href: '/profile',
        label: 'Profile'
    },
    {
        href: '/favorites', 
        label: 'Favorites'
    },
    {
        href: '/camp', 
        label: 'Camp'
    },
    {
        href: '/camp/create',
        label: 'Create Landmark'
    }
]