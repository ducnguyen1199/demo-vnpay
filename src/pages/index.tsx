import CustomHead from '~components/helpers/SEO';
import { CheckoutPage } from '~components/pages/CheckoutPage';
import { EPages } from '~documents/types';

export default function Home() {
  return (
    <>
      <CustomHead page={EPages.HOME} />
      <CheckoutPage />
    </>
  );
}
