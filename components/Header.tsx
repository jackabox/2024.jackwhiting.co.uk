import Link from "next/link";
import NavigationItem from "./NavigationItem";

export default function Header() {
  return (
	<header className="py-16 fixed top-0 left-0 right-0">
	  	<div className="container flex items-center justify-between">
	      	<Link href="/" title="Back to the home page" className="font-semibold">
	      		Jack Whiting
	      	</Link>

	      	<nav className="flex gap-12">
	      		<NavigationItem href="about" title="About" />
	      		<NavigationItem href="projects" title="Projects">
	      			<pre className="absolute text-sm text-black/30 font-semibold -right-3 -top-2">5</pre>
	      		</NavigationItem>
	      		<NavigationItem href="blog" title="Articles" />
	      		<NavigationItem href="contact" title="Contact" />
		    </nav>
	  	</div>
	</header>
  );
}
	

