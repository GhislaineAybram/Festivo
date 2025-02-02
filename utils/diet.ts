// diet.ts

// Return an array with the diet requirement information
export function getDietOptions() {
  const { t } = useI18n()
  return [
    {
      key: 'lacto_ovo_vegetarian',
      db: 'is_l_o_vegetarian',
      name: t('diet.lovegetarian.name'),
      description: t('diet.lovegetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1738458242/vegan_quafs1.png', // TODO
      selected: false,
    },
    {
      key: 'ovo_vegetarian',
      db: 'is_o_vegetarian',
      name: t('diet.ovegetarian.name'),
      description: t('diet.ovegetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1738458242/vegan_quafs1.png', // TODO
      selected: false,
    },
    {
      key: 'lacto_vegetarian',
      db: 'is_l_vegetarian',
      name: t('diet.lvegetarian.name'),
      description: t('diet.lvegetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1738458242/vegan_quafs1.png', // TODO
      selected: false,
    },
    {
      key: 'strictly_plant_based',
      db: 'is_vegetalien',
      name: t('diet.vegetalien.name'),
      description: t('diet.vegetalien.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1738458242/vegan_quafs1.png',
      selected: false,
    },
    {
      key: 'vegan',
      db: 'is_vegan',
      name: t('diet.vegan.name'),
      description: t('diet.vegan.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1738458127/Icons8-Windows-8-Food-Vegan-Symbol.512_beus71.png',
      selected: false,
    },
    {
      key: 'pescetarian',
      db: 'is_pescetarian',
      name: t('diet.pescetarian.name'),
      description: t('diet.pescetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/fish_allergen_food_allergens_icon_183655_k8ik7a.png',
      selected: false,
    },
    {
      key: 'frugivore',
      db: 'is_frugivore',
      name: t('diet.frugivore.name'),
      description: t('diet.frugivore.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1738459921/fruits_1624997_uljpd6.png',
      selected: false,
    },
    {
      key: 'raw_foodist',
      db: 'is_rawfoodist',
      name: t('diet.rawfoodist.name'),
      description: t('diet.rawfoodist.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1738459271/fruit_10580500_qkdtgf.png',
      selected: false,
    },
  ]
}

// Return an array with the food allergy information
export function getAllergyList() {
  const { t } = useI18n()
  return [
    {
      key: 'gluten',
      db: 'has_gluten_allergy',
      name: t('allergy.gluten.name'),
      description: t('allergy.gluten.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/gluten_allergen_food_allergens_icon_183663_ull2d5.png',
      selected: false,
    },
    {
      key: 'crustaceans',
      db: 'has_crustaceans_allergy',
      name: t('allergy.crustaceans.name'),
      description: t('allergy.crustaceans.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/crustaceans_allergen_food_allergens_icon_183662_mnsyn9.png',
      selected: false,
    },
    {
      key: 'eggs',
      db: 'has_eggs_allergy',
      name: t('allergy.eggs.name'),
      description: t('allergy.eggs.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851380/egg_allergen_food_allergens_icon_183650_pitcah.png',
      selected: false,
    },
    {
      key: 'peanuts',
      db: 'has_peanuts_allergy',
      name: t('allergy.peanuts.name'),
      description: t('allergy.peanuts.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851380/peanut_allergen_food_allergens_icon_183659_yxthfu.png',
      selected: false,
    },
    {
      key: 'fish',
      db: 'has_fish_allergy',
      name: t('allergy.fish.name'),
      description: t('allergy.fish.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/fish_allergen_food_allergens_icon_183655_k8ik7a.png',
      selected: false,
    },
    {
      key: 'soy',
      db: 'has_soy_allergy',
      name: t('allergy.soy.name'),
      description: t('allergy.soy.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/soy_allergen_food_allergens_icon_183654_tsew8i.png',
      selected: false,
    },
    {
      key: 'milk',
      db: 'has_milk_allergy',
      name: t('allergy.milk.name'),
      description: t('allergy.milk.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/milk_allergen_food_allergens_icon_183656_y3yjwv.png',
      selected: false,
    },
    {
      key: 'nuts',
      db: 'has_nuts_allergy',
      name: t('allergy.nuts.name'),
      description: t('allergy.nuts.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/nuts_allergen_food_allergens_icon_183660_pleszx.png',
      selected: false,
    },
    {
      key: 'celery',
      db: 'has_celery_allergy',
      name: t('allergy.celery.name'),
      description: t('allergy.celery.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851739/celery_allergen_food_allergens_icon_183661_flfdes.png',
      selected: false,
    },
    {
      key: 'mustard',
      db: 'has_mustard_allergy',
      name: t('allergy.mustard.name'),
      description: t('allergy.mustard.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851380/mustard_allergen_food_allergens_icon_183651_mbwu1w.png',
      selected: false,
    },
    {
      key: 'sesame',
      db: 'has_sesame_allergy',
      name: t('allergy.sesame.name'),
      description: t('allergy.sesame.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/sesame_allergen_food_allergens_icon_183653_ac2dgl.png',
      selected: false,
    },
    {
      key: 'sulfite',
      db: 'has_sulfite_allergy',
      name: t('allergy.sulfite.name'),
      description: t('allergy.sulfite.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/sulfites_allergen_food_allergens_icon_183658_igbgzx.png',
      selected: false,
    },
    {
      key: 'lupin',
      db: 'has_lupin_allergy',
      name: t('allergy.lupin.name'),
      description: t('allergy.lupin.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851380/lupins_allergen_food_allergens_icon_183652_egw1ye.png',
      selected: false,
    },
    {
      key: 'sellfish',
      db: 'has_sellfish_allergy',
      name: t('allergy.sellfish.name'),
      description: t('allergy.sellfish.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1737851379/shellfish_allergen_food_allergens_icon_183657_clff8b.png',
      selected: false,
    },
  ]
}
