import { A } from "@solidjs/router";
import { JSX } from "solid-js";
import { MaterialSymbolsCloudDownloadOutline } from "../shared/icons";

export function Header() {
    return <NavbarContainer>
        <NavbarLogo logoPath="/bnj-logo-light.svg" />
        <div class="nav-links flex items-center gap-6">
            <ul class="font-light">
                <li>
                    <A href="/projects">
                        Projects
                    </A>
                </li>
            </ul>
            <div class="divider w-px h-4 bg-text-content hidden sm:block"></div>
            <NavbarDownloadButton resourcePath="/Garcia, Benjie Ben.pdf" />
        </div>
    </NavbarContainer>
}

interface INavbarProps {
    children: JSX.Element;

}
export function NavbarContainer(props: INavbarProps) {
    return <header class="header sticky top-0 left-0 w-full py-2 sm:py-5 z-20 px-4">
        <nav class="navbar max-w-6xl bg-white mx-auto shadow-lg py-5 px-10 rounded-[100px] flex items-center justify-between">
            {props.children}
        </nav>
    </header>
}

interface INavbarLogoProps {
    logoPath: string;
}
function NavbarLogo(props: INavbarLogoProps) {
    return <A href="/" class="relative h-8 w-8 sm:h-10 sm:w-10 navbar-logo">
        <img class="absolute inset-0 w-full h-full" src={props.logoPath} alt="Logo" />
    </A>
}

export interface INavbarDownloadButtonProps {
    resourcePath: string;
}
export function NavbarDownloadButton(props: INavbarDownloadButtonProps) {
    return <A download href={props.resourcePath} class="navbar-download-btn hidden group py-3 px-4 sm:pr-10 sm:pl-8 sm:py-6 bg-primary rounded-[100px] text-white font-light sm:flex items-center gap-4 lg:hover:bg-transparent lg:hover:ring-2 lg:hover:ring-primary lg:hover:ease-in-out lg:hover:duration-300 hover:transition-all"><span class="lg:group-hover:text-primary text-sm sm:text-base">
        Download resume</span>
        <MaterialSymbolsCloudDownloadOutline class="w-7 h-7 fill-white lg:group-hover:fill-primary" />
    </A>
}