import logo from "./logoBlue.png"
import {Bars3Icon} from'@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#'},
    { name: 'Explore', href: '#'},
    { name: 'Dashboard', href: '#'},
]
export default function Header() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <header className="bg-white">
                <nav aria-label={global}
                     className="mx-auto flex lg:max-w-7xl xl:mx-auto items-center justify-between p-3 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="home" className="-m-1.5 p-1.5">
                            <span className="sr-only">JobScope</span>
                            <img alt="" src={logo} className="h-10 w-auto"/>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            // onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href}
                               className="text-sm font-semibold leading-6 text-gray-700 hover:underline">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-1">
                        <a href="/SignUp" className="text-sm font-semibold leading-6 text-gray-700 p-2 rounded-md hover:underline">
                            Sign up
                        </a>
                        <a href="/LogIn" className="text-sm font-semibold leading-6 text-gray-700 align-middle p-2 hover:underline">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}