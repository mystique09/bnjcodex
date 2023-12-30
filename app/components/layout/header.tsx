export function Header() {
    return <NavbarContainer>
        <NavbarLogo logoPath="/bnj-logo-light.svg" />
        <NavbarDownloadButton resourcePath="/Garcia, Benjie Ben.pdf" />
    </NavbarContainer>
}

interface INavbarProps {
    children: React.ReactNode;
}
export function NavbarContainer(props: INavbarProps) {
    return <header className="header sticky top-0 left-0 w-full pt-5 z-20">
        <nav className="navbar max-w-6xl bg-white mx-auto shadow-lg py-5 px-10 rounded-[100px] flex items-center justify-between">
            {props.children}
        </nav>
    </header>
}

interface INavbarLogoProps {
    logoPath: string;
}
function NavbarLogo(props: INavbarLogoProps) {
    return <a href="/" className="navbar-logo">
        <img src={props.logoPath} alt="Logo" />
    </a>
}

interface INavbarDownloadButtonProps {
    resourcePath: string;
}
function NavbarDownloadButton(props: INavbarDownloadButtonProps) {
    return <a download href={props.resourcePath} className="navbar-download-btn pr-8 pl-6 py-6 bg-primary rounded-[100px] text-white font-light">Download resume</a>
}