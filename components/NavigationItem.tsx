import Link from "next/link";

export default function NavigationItem({ href, title, children = null }: any) {
  return (
		<Link href={href} className="font-normal flex relative pb-2 -mb-2 group">
			{title}

			{children}

			<span className="absolute bottom-0 left-0 opacity-0 w-[0px] transition-all duration-300 group-hover:opacity-100 group-hover:w-full h-[2px] bg-black"></span>
	    </Link>
  );
}
	