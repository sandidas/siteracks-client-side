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
    type: String || null,
    default: null,
  },
  toolTip: {
    type: String || null,
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
    type: String || null,
    default: null,
  },
  tableTitle: {
    type: String || null,
    default: null,
  },
  tableDescription: {
    type: String || null,
    default: null,
  }


});


const ChildSchema = new Schema({
  typeSlug: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
  },
  additionalMonths: {
    type: String || null,
    defaultValue: null,
  },
  promoCode: {
    type: String,
    defaultValue: "",
  },
  additionalDiscount: {
    type: Number,
  },
  monthlyPrice: {
    type: Number,
    required: true,
  },
  annuallyPrice: {
    type: Number,
    required: true,
  },
  bienniallyPrice: {
    type: Number,
    required: true,
  },
  trienniallyPrice: {
    type: Number,
    required: true,
  },
  features: [FeatureSchema],
});

const PackageSchema = new Schema({
  nameSlug: {
    type: String,
    required: true,
  },
  preTitle: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  customBGClassName: {
    type: String,
    required: true,
  },
  customIconClassName: {
    type: String,
  },
  customTitleClassName: {
    type: String,
  },
  customTextClassName: {
    type: String,
  },
  customPriceCLassName: {
    type: String,
  },
  icon: {
    type: String,
    required: true,
  },
  seePlansLink: {
    type: String,
    required: true,
  },
  packages: [ChildSchema],
  order: Number,
});

const Package = models.Package || model('Package', PackageSchema);
export default Package;


// mongoose.models = {};
// export default mongoose.model('Package', PackageSchema);
 
// const Package = mongoose.models.Package || mongoose.model('Package', PackageSchema);



