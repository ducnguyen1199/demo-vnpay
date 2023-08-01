import * as React from 'react';
import { NextSeo } from 'next-seo';
import { EPages } from '~documents/types';
import SEOPages, { hostname } from '~documents';
interface ICustomHeadProps {
  page: EPages;
}

const CustomHead: React.FunctionComponent<ICustomHeadProps> = (props) => {
  const { page } = props;
  return (
    <NextSeo
      title={SEOPages[page].title || SEOPages[EPages.HOME].title}
      description={SEOPages[page].description || SEOPages[EPages.HOME].description}
      canonical={`${hostname}${SEOPages[page].slug || SEOPages[EPages.HOME].slug}`}
      openGraph={{
        type: 'website',
        url: `${hostname}`,
        title: SEOPages[page].title || SEOPages[EPages.HOME].title,
        description: SEOPages[page].description || SEOPages[EPages.HOME].description,
        locale: 'en_EN',
        images: [
          {
            url: `${hostname}${SEOPages[page].metaImage || SEOPages[EPages.HOME].metaImage}`,
            width: 1200,
            height: 627,
            alt: SEOPages[page].title || SEOPages[EPages.HOME].title,
          },
        ],
        site_name: `${hostname}`,
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '',
        },
      ]}
      twitter={{
        handle: '',
        site: '',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default CustomHead;
