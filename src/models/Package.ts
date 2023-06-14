import {Schema, model, models} from "mongoose";

const FeatureSchema = new Schema({
  displayOrder: {
    type: Number,
    default: 0,
  },
  topFeatured: {
    type: Boolean,
    default: false,
  },
  iconColor: {
    type: String,
    default: null,
  },
  toolTip: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: String,
    default: "",
  },
  regular: {
    type: String,
    default: "",
  },
  lineBreak: {
    type: Boolean,
    default: false,
  },
  lineBreakTitle: {
    type: String,
    default: null,
  },
  tableTitle: {
    type: String,
    default: null,
  },
  tableDescription: {
    type: String,
    default: null,
  },
  _id: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
});

const ChildSchema = new Schema({
  typeSlug: String,
  productTitle: String,
  productDescription: String,
  productId: Number,
  featured: Boolean,
  additionalMonths: {
    type: String,
    default: null,
  },
  promoCode: {
    type: String,
    default: "",
  },
  additionalDiscount: Number,
  monthlyPrice: Number,
  annuallyPrice: Number,
  bienniallyPrice: Number,
  trienniallyPrice: Number,
  features: FeatureSchema,
  _id: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
});



const PackageSchema = new Schema({
  nameSlug: String,
  preTitle: {
    type: String,
    default: "",
  },
  title: String,
  shortDescription: String,
  customBGClassName: String,
  customIconClassName: String,
  customTitleClassName: String,
  customTextClassName: String,
  customPriceCLassName: String,
  icon: String,
  seePlansLink: String,
  packages: [ChildSchema],
  _id: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
});

const Package = models.Package || model('Package', PackageSchema);
export default Package;


// mongoose.models = {};
// export default mongoose.model('Package', PackageSchema);
 
// const Package = mongoose.models.Package || mongoose.model('Package', PackageSchema);



