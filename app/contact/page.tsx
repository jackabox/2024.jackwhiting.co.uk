import LinkUnderlineStyle from "@/components/LinkUnderlineStyle"
import { getApiQuery } from "@/utils/getApiQuery"

async function getData() {
  const data = await getApiQuery()

  return data
}

const Page = async () => {
  const data = await getData()

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <p className="h4 sm:h3 max-w-[768px] mb-10">
          I don't like long forms, as they become a bit of a chore - so why not
          send me an old-school email with what you want to to talk about.
          Whether that's development tasks, a funny anecdote, or an{" "}
          <b className="font-semibold">exciting new project</b>? Or, hit me up
          on socials.
        </p>

        <LinkUnderlineStyle
          title="Email Jack!"
          href="mailto:hi@jackwhiting.co.uk"
          text="hi@jackwhiting.co.uk"
          className="h3 sm:h1 !text-blue"
          color="blue"
        />

        <div className="flex flex-wrap gap-16 mt-8 sm:mt-16">
          <LinkUnderlineStyle
            title="Link to Jack's Mastodon"
            href="https://mas.to/jackabox"
            text="Mastodon"
            className="h4"
          />

          <LinkUnderlineStyle
            title="Link to Jack's Mastadon"
            href="https://twitter.com/jackabox"
            text="Twitter / X"
            className="h4"
          />
        </div>
      </section>
    </>
  )
}

export default Page
