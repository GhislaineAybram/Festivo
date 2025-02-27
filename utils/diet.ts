/**
 * @file utils/diet.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This file contains utility functions for retrieving dietary preferences and allergy information.
 * It provides lists of diet options and common food allergies,
 * including their database keys, names, descriptions, and associated icons.
 */

/**
 * Returns an array of dietary preferences with their respective details.
 *
 * @returns {Array} A list of diet options including key, database field, name, description, and logo.
 */
export function getDietOptions() {
  const { t } = useI18n()
  return [
    {
      key: 'lacto_ovo_vegetarian',
      db: 'isLOVegetarian',
      name: t('diet.lovegetarian.name'),
      description: t('diet.lovegetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739616558/lacto_ovo_vegetarian_qiiowk.png',
      selected: false,
    },
    {
      key: 'ovo_vegetarian',
      db: 'isOVegetarian',
      name: t('diet.ovegetarian.name'),
      description: t('diet.ovegetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739616481/ovo_vegetarian_xgpvoh.png',
      selected: false,
    },
    {
      key: 'lacto_vegetarian',
      db: 'isLVegetarian',
      name: t('diet.lvegetarian.name'),
      description: t('diet.lvegetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739616339/lacto_vegetarian_kfx50a.png',
      selected: false,
    },
    {
      key: 'strictly_plant_based',
      db: 'isVegetalien',
      name: t('diet.vegetalien.name'),
      description: t('diet.vegetalien.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739614007/vegan_quafs1.png',
      selected: false,
    },
    {
      key: 'vegan',
      db: 'isVegan',
      name: t('diet.vegan.name'),
      description: t('diet.vegan.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613997/Icons8-Windows-8-Food-Vegan-Symbol.512_beus71.png',
      selected: false,
    },
    {
      key: 'pescetarian',
      db: 'isPescetarian',
      name: t('diet.pescetarian.name'),
      description: t('diet.pescetarian.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739612798/pescetarian_j7bpf1.png',
      selected: false,
    },
    {
      key: 'frugivore',
      db: 'isFrugivore',
      name: t('diet.frugivore.name'),
      description: t('diet.frugivore.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739614546/frugivore_i4gatm.png',
      selected: false,
    },
    {
      key: 'raw_foodist',
      db: 'isRawfoodist',
      name: t('diet.rawfoodist.name'),
      description: t('diet.rawfoodist.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739614763/raw_foodist_lo0ufu.png',
      selected: false,
    },
  ]
}

/**
 * Returns an array of common food allergies with their respective details.
 *
 * @returns {Array} A list of food allergies including key, database field, name, description, and logo.
 */
export function getAllergyList() {
  const { t } = useI18n()
  return [
    {
      key: 'gluten',
      db: 'hasGlutenAllergy',
      name: t('allergy.gluten.name'),
      description: t('allergy.gluten.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613431/gluten_allergen_food_allergens_icon_183663_ull2d5.png',
      selected: false,
    },
    {
      key: 'crustaceans',
      db: 'hasCrustaceansAllergy',
      name: t('allergy.crustaceans.name'),
      description: t('allergy.crustaceans.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613477/crustaceans_allergen_food_allergens_icon_183662_mnsyn9.png',
      selected: false,
    },
    {
      key: 'eggs',
      db: 'hasEggsAllergy',
      name: t('allergy.eggs.name'),
      description: t('allergy.eggs.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613535/egg_allergen_food_allergens_icon_183650_pitcah.png',
      selected: false,
    },
    {
      key: 'peanuts',
      db: 'hasPeanutsAllergy',
      name: t('allergy.peanuts.name'),
      description: t('allergy.peanuts.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613551/peanut_allergen_food_allergens_icon_183659_yxthfu.png',
      selected: false,
    },
    {
      key: 'fish',
      db: 'hasFishAllergy',
      name: t('allergy.fish.name'),
      description: t('allergy.fish.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613488/fish_allergen_food_allergens_icon_183655_k8ik7a.png',
      selected: false,
    },
    {
      key: 'soy',
      db: 'hasSoyAllergy',
      name: t('allergy.soy.name'),
      description: t('allergy.soy.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613417/soy_allergen_food_allergens_icon_183654_tsew8i.png',
      selected: false,
    },
    {
      key: 'milk',
      db: 'hasMilkAllergy',
      name: t('allergy.milk.name'),
      description: t('allergy.milk.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613466/milk_allergen_food_allergens_icon_183656_y3yjwv.png',
      selected: false,
    },
    {
      key: 'nuts',
      db: 'hasNutsAllergy',
      name: t('allergy.nuts.name'),
      description: t('allergy.nuts.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613505/nuts_allergen_food_allergens_icon_183660_pleszx.png',
      selected: false,
    },
    {
      key: 'celery',
      db: 'hasCeleryAllergy',
      name: t('allergy.celery.name'),
      description: t('allergy.celery.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613594/celery_allergen_food_allergens_icon_183661_flfdes.png',
      selected: false,
    },
    {
      key: 'mustard',
      db: 'hasMustardAllergy',
      name: t('allergy.mustard.name'),
      description: t('allergy.mustard.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613571/mustard_allergen_food_allergens_icon_183651_mbwu1w.png',
      selected: false,
    },
    {
      key: 'sesame',
      db: 'hasSesameAllergy',
      name: t('allergy.sesame.name'),
      description: t('allergy.sesame.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613522/sesame_allergen_food_allergens_icon_183653_ac2dgl.png',
      selected: false,
    },
    {
      key: 'sulfite',
      db: 'hasSulfiteAllergy',
      name: t('allergy.sulfite.name'),
      description: t('allergy.sulfite.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613443/sulfites_allergen_food_allergens_icon_183658_igbgzx.png',
      selected: false,
    },
    {
      key: 'lupin',
      db: 'hasLupinAllergy',
      name: t('allergy.lupin.name'),
      description: t('allergy.lupin.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613583/lupins_allergen_food_allergens_icon_183652_egw1ye.png',
      selected: false,
    },
    {
      key: 'sellfish',
      db: 'hasSellfishAllergy',
      name: t('allergy.sellfish.name'),
      description: t('allergy.sellfish.explanation'),
      logo: 'https://res.cloudinary.com/dyqzhy0rv/image/upload/v1739613454/shellfish_allergen_food_allergens_icon_183657_clff8b.png',
      selected: false,
    },
  ]
}
