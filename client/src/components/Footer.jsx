import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';


const FooterSec = () => {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link
                            to='/'
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                        >
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-lg text-white'>
                                MindVoyage
                            </span>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.100jsprojects.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    100 JS Projects
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Sahand's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.github.com/sahandghavidel'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link href='#'>Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='#'
                        by="Sahand's blog"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='https://github.com/sahandghavidel' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterSec


{/* <div class="upsell-cross-sell-container">
  <h3>Related Products</h3>
  {% for item in cart.items %}
    {% assign up_sell_products = item.product.metafields.custom.up_sell_products.value %}
    {% for product in up_sell_products %}
      {% render 'card-product',
        card_product: product,
        media_aspect_ratio: section.settings.image_ratio,
        show_secondary_image: section.settings.show_secondary_image,
        show_vendor: section.settings.show_vendor
      %}
      <form method="post" action="/cart/add">
        <input type="hidden" name="id" value="{{ product.variants.first.id }}">
        <button type="submit" class="btn btn--primary">Add to Cart</button>
      </form>
    {% endfor %}
  {% endfor %}
</div>

<style>
    .upsell-cross-sell-container .card.card--standard.card--media {
      display: flex;
      flex-direction: row;
  }
</style>

{%- liquid
          for tag in article.tags
            if tag contains 'product_'
              assign prod_handle = tag | split: '_'
              assign blog_prod = all_products[prod_handle[1]]
            endif
          endfor
        %}
        {% if blog_prod %}
          <hr>
          <img src="{{ blog_prod.featured_image | img_url: '100x'}}"><br>
          <p>
            <a href="{{blog_prod.url}}">{{ blog_prod.title }}</a>
          </p>
          <p>{{ blog_prod.price | money }}</p>
        {% endif %} */}