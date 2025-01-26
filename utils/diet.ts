// diet.ts

export function getDietOptions() {
  const { t } = useI18n()
  return [
    {
      name: t('diet.lovegetarian.name'),
      description: t('diet.lovegetarian.explanation'),
      selected: false,
    },
    {
      name: t('diet.ovegetarian.name'),
      description: t('diet.ovegetarian.explanation'),
      selected: false,
    },
    {
      name: t('diet.lvegetarian.name'),
      description: t('diet.lvegetarian.explanation'),
      selected: false,
    },
    {
      name: t('diet.vegan.name'),
      description: t('diet.vegan.explanation'),
      selected: false,
    },
    {
      name: t('diet.vegetarian.name'),
      description: t('diet.vegetarian.explanation'),
      selected: false,
    },
    {
      name: t('diet.pescetarian.name'),
      description: t('diet.pescetarian.explanation'),
      selected: false,
    },
    {
      name: t('diet.frugivore.name'),
      description: t('diet.frugivore.explanation'),
      selected: false,
    },
    {
      name: t('diet.rawfoodist.name'),
      description: t('diet.rawfoodist.explanation'),
      selected: false,
    },
  ]
}

export function getAllergyList() {
  const { t } = useI18n()
  return [
    {
      name: t('allergy.gluten.name'),
      description: t('allergy.gluten.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/gluten_allergen_food_allergens_icon_183663_ull2d5.png',
      selected: false,
    },
    {
      name: t('allergy.crustaceans.name'),
      description: t('allergy.crustaceans.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/crustaceans_allergen_food_allergens_icon_183662_mnsyn9.png',
      selected: false,
    },
    {
      name: t('allergy.eggs.name'),
      description: t('allergy.eggs.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851380/egg_allergen_food_allergens_icon_183650_pitcah.png',
      selected: false,
    },
    {
      name: t('allergy.peanuts.name'),
      description: t('allergy.peanuts.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851380/peanut_allergen_food_allergens_icon_183659_yxthfu.png',
      selected: false,
    },
    {
      name: t('allergy.fish.name'),
      description: t('allergy.fish.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/fish_allergen_food_allergens_icon_183655_k8ik7a.png',
      selected: false,
    },
    {
      name: t('allergy.soy.name'),
      description: t('allergy.soy.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/soy_allergen_food_allergens_icon_183654_tsew8i.png',
      selected: false,
    },
    {
      name: t('allergy.milk.name'),
      description: t('allergy.milk.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/milk_allergen_food_allergens_icon_183656_y3yjwv.png',
      selected: false,
    },
    {
      name: t('allergy.nuts.name'),
      description: t('allergy.nuts.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/nuts_allergen_food_allergens_icon_183660_pleszx.png',
      selected: false,
    },
    {
      name: t('allergy.celery.name'),
      description: t('allergy.celery.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851739/celery_allergen_food_allergens_icon_183661_flfdes.png',
      selected: false,
    },
    {
      name: t('allergy.mustard.name'),
      description: t('allergy.mustard.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851380/mustard_allergen_food_allergens_icon_183651_mbwu1w.png',
      selected: false,
    },
    {
      name: t('allergy.sesame.name'),
      description: t('allergy.sesame.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/sesame_allergen_food_allergens_icon_183653_ac2dgl.png',
      selected: false,
    },
    {
      name: t('allergy.sulfite.name'),
      description: t('allergy.sulfite.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/sulfites_allergen_food_allergens_icon_183658_igbgzx.png',
      selected: false,
    },
  ]
}
