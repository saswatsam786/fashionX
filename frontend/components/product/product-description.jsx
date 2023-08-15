// import { AddToCart } from "components/cart/add-to-cart";
import Price from "../Price";
import Prose from "../Prose";
// import { Product } from "lib/shopify/types";
// import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }) {
  console.log(product.descriptionHtml);
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-lg text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={
              product.priceRange.maxVariantPrice.currencyCode
            }
          />
        </div>
      </div>
      {/* <VariantSelector
        options={product.options}
        variants={product.variants}
      /> */}

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 leading-tight dark:text-white/[60%]"
          style={{ height: "20%" }}
          html={product.descriptionHtml}
        />
      ) : null}

      {/* <AddToCart
        variants={product.variants}
        availableForSale={product.availableForSale}
      /> */}
    </>
  );
}
