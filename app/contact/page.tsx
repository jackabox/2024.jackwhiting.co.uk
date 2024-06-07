import { SeoMatic, getMetadata } from "next-seomatic"

import LinkUnderlineStyle from "@/components/LinkUnderlineStyle"
import { getApiQuery } from "@/utils/getApiQuery"
import { CONTACT_PAGE_QUERY } from "@/queries/contact"

async function getData() {
  const { contactEntries } = await getApiQuery(CONTACT_PAGE_QUERY)

  return contactEntries[0]
}

// Meta Data
export async function generateMetadata() {
  const { seomatic } = await getData()

  return getMetadata(seomatic)
}

const Page = async () => {
  const { title, rte, email, mastodon, twitter, seomatic } = await getData()

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <div
          className="rte max-w-[768px] mb-10 rte--xl"
          dangerouslySetInnerHTML={{ __html: rte }}
        ></div>

        <LinkUnderlineStyle
          title="Email Jack!"
          href={`mailto:${email}`}
          text={email}
          className="h3 sm:h1 !text-blue"
          color="blue"
        />

        <div className="flex flex-wrap gap-16 mt-8 sm:mt-16">
          {mastodon && (
            <LinkUnderlineStyle
              title="Link to Jack's Mastodon"
              href={mastodon}
              text="Mastodon"
              className="h4"
            />
          )}

          {twitter && (
            <LinkUnderlineStyle
              title="Link to Jack's Mastadon"
              href={twitter}
              text="Twitter / X"
              className="h4"
            />
          )}
        </div>
      </section>

      <SeoMatic
        metaJsonLdContainer={seomatic.metaJsonLdContainer}
        metaScriptContainer={seomatic.metaScriptContainer}
      />
    </>
  )
}

export default Page
