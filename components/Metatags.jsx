import Head from "next/head";

export default function Metatags({
  title = "vighnesh153 nextjs-firebase practice",
  description = "A complete Next.js + Firebase practice by vighnesh153",
  image = "https://avatars.githubusercontent.com/u/26544566?v=4",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@vighnesh153" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
