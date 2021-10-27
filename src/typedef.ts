interface Jyuhan {
  date: string;
  ctime: string;
  suri: string;
  comment: string;
}

interface PersonName {
  collationkey: string;
  content: string;
}

interface Author {
  listseq: string;
  dokujikubun: string;
}

interface ProductIdentifier {
  ProductIDType: string;
  IDValue: string;
}

interface Contributor {
  SequenceNumber: string;
  ContributorRole: string[];
  PersonName: PersonName;
}

interface PersonName {
  content: string;
}

interface Measure {
  MeasureType: string;
  Measurement: string;
  MeasureUnitCode: string;
}

interface DescriptiveDetail {
  ProductComposition: string;
  ProductForm: string;
  ProductFormDetail: string;
  Measure: Measure[];
  Collection: {
    CollectionType: string;
    TitleDetail: {
      TitleType: string;
      TitleElement: TitleElement[];
    };
  };
  TitleDetail: TitleDetail;
  Contributor: Contributor[];
  Language: Language[];
  Extent: Extent[];
  Subject: Subject[];
}

interface TitleDetail {
  TitleType: string;
  TitleElement: TitleElement;
}

interface TitleElement {
  TitleElementLevel: string;
  TitleText: TitleText;
  Subtitle: Subtitle;
}

interface TitleText {
  collationkey: string;
  content: string;
}

interface Subtitle {
  collationkey: string;
  content: string;
}
interface Language {
  LanguageRole: string;
  LanguageCode: string;
  CountryCode: string;
}

interface Subject {
  MainSubject: string;
  SubjectSchemeIdentifier: string;
  SubjectCode: string;
}

interface Extent {
  ExtentType: string;
  ExtentValue: string;
  ExtentUnit: string;
}

interface TextContent {
  TextType: string;
  ContentAudience: string;
  Text: string;
}

interface Onix {
  RecordReference: string;
  NotificationType: string;
  ProductIdentifier: ProductIdentifier;
  DescriptiveDetail: DescriptiveDetail;
  CollateralDetail: {
    TextContent: TextContent[];
    SupportingResource: SupportingResource[];
  };
  PublishingDetail: PublishingDetail;
  ProductSupply: ProductSupply;
}

interface PublishingDetail {
  Imprint: Imprint;
  PublishingDate: PublishingDate[];
}

interface SupportingResource {
  ResourceContentType: string;
  ContentAudience: string;
  ResourceMode: string;
  ResourceVersion: ResourceVersion[];
}

interface ResourceVersion {
  ResourceForm: string;
  ResourceVersionFeature: ResourceVersionFeature[];
  ResourceLink: string;
}

interface ResourceVersionFeature {
  ResourceVersionFeatureType: string;
  FeatureValue: string;
}

interface Imprint {
  ImprintIdentifier: ImprintIdentifier[];
  ImprintName: string;
}

interface PublishingDate {
  PublishingDateRole: string;
  Date: string;
}

interface ProductSupply {
  MarketPublishingDetail: MarketPublishingDetail;
  SupplyDetail: SupplyDetail;
}

interface MarketPublishingDetail {
  MarketPublishingStatus: string;
  MarketPublishingStatusNote: string;
}

interface SupplyDetail {
  ProductAvailability: string;
  Price: Price[];
}

interface Price {
  PriceType: string;
  PriceAmount: string;
  CurrencyCode: string;
}

interface ImprintIdentifier {
  ImprintIDType: string;
  IDValue: string;
}

interface Hanmoto {
  toji: string;
  zaiko: string;
  maegakinado: string;
  kaisetsu105w: string;
  tsuiki: string;
  genrecodetrc: string;
  ndccode: string;
  kankoukeitai: string;
  sonotatokkijikou: string;
  jushoujouhou: string;
  furokusonota: string;
  dokushakakikomi: string;
  zasshicode: string;
  jyuhan: Jyuhan[];
  hatsubai: string;
  hatsubaiyomi: string;
  hastameshiyomi: true;
  author: Author[];
  datemodified: string;
  datecreated: string;
  kanrenshoisbn: string;
  reviews: Review[];
  hanmotoinfo: Hanmotoinfo;
  dateshuppan: string;
}

interface Hanmotoinfo {
  name: string;
  yomi: string;
  url: string;
  twitter: string;
  facebook: string;
}

interface Summary {
  isbn: string;
  title: string;
  volume: string;
  series: string;
  publisher: string;
  pubdate: string;
  cover: string;
  author: string;
}

interface Review {
  post_user: string;
  reviewer: string;
  source_id: string;
  kubun_id: string;
  source: string;
  choyukan: string;
  han: string;
  link: string;
  appearance: string;
  gou: string;
}

export interface OpenDBDescriptiveData {
  onix: Onix;
  hanmoto: Hanmoto;
  summary: Summary;
}
