import { MdiGithub, MdiLinkedin } from "../shared/icons";

export function Footer() {
    return <footer className="footer sticky top-0 left-0 w-full py-2 sm:py-5 z-20 px-4">
        <div className="footer-wrapper max-w-6xl mx-auto py-5 flex items-start justify-between">
            <div className="flex flex-col items-start justify-center gap-2">
                <h6 className="text-sm font-normal tracking-wider">Let's connect!</h6>
                <div className="flex items-start justify-center gap-3">
                    <MdiGithub className="size-10 fill-primary" />
                    <MdiLinkedin className="size-10 fill-primary" />
                </div>
            </div>
        </div>
    </footer>
}