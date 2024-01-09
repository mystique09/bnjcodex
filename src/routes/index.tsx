import { Meta, Title } from "@solidjs/meta";
import { NavbarDownloadButton } from "~/components/layout/header";

export default function Home() {
	return (
		<>
			<Title>Benjie Ben Garcia</Title>
			<Meta name="description" content="Welcome to my portfolio." />

			<main class="h-full px-4">
				<section id="#" class="max-w-3xl mx-auto">
					<div class="flex flex-col items-start sm:items-center justify-center text-left sm:text-center gap-10 pt-10 sm:pt-20">
						<h1 class="text-6xl sm:text-[120px] leading-none">Welcome.</h1>
						<p class="font-light text-lg sm:text-2xl tracking-wider leading-8">
							I am Benjie Ben Garcia, a Junior front-end developer based in
							Philippines, a Front-End Developer with experience in developing
							and maintaining websites. I am enthusiastic about tackling
							challenges, constantly seeking opportunities to enhance
							programming expertise and apply technology for innovative
							problem-solving.
						</p>
						<p class="font-thin font-space-grotesk text-4xl tracking-wider max-w-lg text-text-content">
							WANT TO KNOW MORE ABOUT ME? DOWNLOAD MY RESUME.
						</p>
					</div>
					<div class="sm:hidden download-resume fixed bottom-10 right-10 w-auto h-auto [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a>span]:hidden [&>a]:size-16 [&>a>svg]:p-0 [&>a]:px-0">
						<NavbarDownloadButton resourcePath="/Garcia, Benjie Ben.pdf" />
					</div>
				</section>
			</main>
		</>
	);
}
