import { BannerInterface } from "./banner.interface";
import { ClaimInterface } from "./claim.interface";
import { ProductInterface } from "./product.interface";

export interface MainInterface {
  banners: [BannerInterface];
  products: [ProductInterface];
  claims: [ClaimInterface]
}
