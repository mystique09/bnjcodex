import { MdiGithub, MdiLinkedin } from "../shared/icons";

export function Footer() {
    return <footer className="footer sticky top-0 left-0 w-full py-2 sm:py-5 z-20 px-4">
        <div className="footer-wrapper max-w-6xl mx-auto py-5 flex items-start justify-between">
            <div className="flex flex-col items-start justify-center gap-2">
                <h6 className="text-sm font-normal tracking-wider">Let's connect!</h6>
                <ul className="flex items-start justify-center gap-3">
                    <li className="sm:group">
                        <a aria-label="Github link" rel="noopener noreferrer" target="_blank" href="https://github.com/mystique09">
                            <MdiGithub className="size-10 fill-primary sm:group-hover:fill-black sm:group-hover:scale-110  transition-all duration-300 ease-out" />
                        </a>
                    </li>
                    <li className="sm:group">
                        <a aria-label="Linkedin link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/benjie-ben-garcia-916261202/">
                            <MdiLinkedin className="size-10 fill-primary sm:group-hover:fill-blue-600 sm:group-hover:scale-110  transition-all duration-300 ease-out" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
}