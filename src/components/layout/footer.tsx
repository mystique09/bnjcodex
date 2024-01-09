import { A } from "@solidjs/router";
import { MdiGithub, MdiLinkedin } from "../shared/icons";

export function Footer() {
    return <footer class="footer sticky top-0 left-0 w-full py-2 sm:py-5 z-20 px-4">
        <div class="footer-wrapper max-w-6xl mx-auto py-5 flex items-start justify-between">
            <div class="flex flex-col items-start justify-center gap-2">
                <h6 class="text-sm font-normal tracking-wider">Let's connect!</h6>
                <ul class="flex items-start justify-center gap-3">
                    <li class="sm:group">
                        <A aria-label="Github link" rel="noopener noreferrer" target="_blank" href="https://github.com/mystique09">
                            <MdiGithub class="size-10 fill-primary sm:group-hover:fill-black sm:group-hover:scale-110  transition-all duration-300 ease-out" />
                        </A>
                    </li>
                    <li class="sm:group">
                        <A aria-label="Linkedin link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/benjie-ben-garcia-916261202/">
                            <MdiLinkedin class="size-10 fill-primary sm:group-hover:fill-blue-600 sm:group-hover:scale-110  transition-all duration-300 ease-out" />
                        </A>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
}