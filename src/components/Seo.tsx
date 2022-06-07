import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type SeoType = {
  description: string;
  title: string;
  slug: string;
  lang?: string;
};
function Seo({ description, title, slug, lang = `en` }: SeoType) {
  // noinspection GraphQLUnresolvedReference
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            author
          }
        }
      }
    `
  );
  const canonicalUrl = `${site.siteMetadata.siteUrl}/${slug}`;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: canonicalUrl,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: description,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `robots`,
          content: `index, follow, noodp, noydir`,
        },
      ]}
    >
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
export default Seo;
