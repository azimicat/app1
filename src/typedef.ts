interface ProductIdentifier {
  productIDType: string;
  iDValue: string;
}

interface DescriptiveDetail {
  productComposition: string;
  ProductForm: string;
  contributor: Contributor;
}

interface Contributor {}
interface CollateralDetail {}
interface PublishingDetail {}
interface ProductSupply {}

interface Onix {
  recordReference: string;
  notificationType: string;
  productIdentifier: ProductIdentifier;
  descriptiveDetail: DescriptiveDetail;
  collateralDetail: CollateralDetail;
  publishingDetail: PublishingDetail;
  productSupply: ProductSupply;
}
interface Hanmoto {
  dateshuppan?: string;
  datemodified?: string;
  datecreated?: string;
  lanove?: string;
  hasshohyo?: string;
  hastameshiyomi?: string;
  reviews?: Reviews;
  summary?: Summary;
  hanmotoinfo?: Hanmotoinfo;
}
interface Hanmotoinfo {
  name?: string;
  yomi?: string;
  url?: string;
  twitter?: string;
  facebook?: string;
}
interface Summary {
  isbn?: string;
  title?: string;
  volume?: string;
  series?: string;
  publisher?: string;
  pubdate?: string;
  cover?: string;
  author?: string;
}
interface Reviews {
  appearance?: string;
  reviewer?: string;
  source_id?: string;
  kubun_id?: string;
  source?: string;
  choyukan?: string;
  han?: string;
  link?: string;
  post_user?: string;
}
export interface Reference {
  onix?: Onix;
  hanmoto?: Hanmoto;
  summary?: Summary;
}

export interface Response {
  data: Reference[];
  statusCode: Number;
}
