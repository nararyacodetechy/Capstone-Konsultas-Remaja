/* eslint-disable operator-linebreak */
import { createCheckoutConsultantTemplate } from '../templates/templates-creator';
import ConsultantSource from '../../../data/consultant-source';
import UrlParser from '../../routes/url-parser';

const CheckoutPage = {
  async render() {
    return `
        <div id="consultant-checkout"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const consultant = await ConsultantSource.detailConsultant(url.id);
    const ConsultantContainer = document.querySelector('#consultant-checkout');

    ConsultantContainer.innerHTML =
      createCheckoutConsultantTemplate(consultant);
  },
};

export default CheckoutPage;
