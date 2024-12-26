<script lang="ts">
import { defineComponent } from 'vue'
import type { CelebrationWithGuestsAndType } from '~/types'

export function getMonth(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleString('default', { month: 'long' })
}
export function getDay(dateString: string) {
  const date = new Date(dateString)
  return date.getDate()
}

export default defineComponent({
  name: 'CelebrationsList',
  props: {
    celebrations: {
      type: Array as PropType<CelebrationWithGuestsAndType[]>,
      required: true,
    },
  },
  setup(props) {
    const formattedCelebrations = computed(() =>
      props.celebrations.map(celebration => ({
        ...celebration,
        dateMonth: getMonth(celebration.date),
        dateDay: getDay(celebration.date),
      })),
    )

    return { formattedCelebrations }
  },
})
</script>

<template>
  <div
    v-for="celebration in formattedCelebrations"
    :key="celebration.celebration_id"
    class="parent"
  >
    <div class="card">
      <div class="finished">
        {{ $t("celebration.finished") }}
      </div>
      <div
        class="card-image"
        :style="{ backgroundImage: `url(${celebration.celebration_type.picture})` }"
      />
      <div class="category line-clamp-2">
        {{ celebration.name }}
      </div>
      <div class="date-box">
        <span class="date">{{ celebration.dateDay }}</span>
        <span class="month">{{ celebration.dateMonth }}</span>
      </div>
      <div class="heading line-clamp-3">
        {{ celebration.description }}
      </div>
      <a
        class="action"
        :href="`/celebration/${celebration.celebration_id}`"
      >
        {{ $t("welcome.event_link") }}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 35px;
  opacity: 0.5;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(100% - 2rem);
  width: 272px;
  height: 272px;
  background: white;
  padding: 0.5em;
  border-radius: 6px;
  border: 1px solid $indigo;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px -10px;
}

.card-image {
  background-color: rgb(236, 236, 236);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid $haze;
  width: 100%;
  height: 130px;
  border-radius: 6px 6px 6px 6px;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 600;
  color: $indigo;
  padding: 10px 7px 0;
  background-color: white;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  font-size: 0.8em;
  color: $grey;
  padding: 7px;
  background-color: white;
}

.heading:hover {
  cursor: pointer;
}

.date-box {
  position: absolute;
  top: -20px;
  right: -20px;
  height: 70px;
  width: 70px;
  background: white;
  border: 2px solid $tangerine;
  border-radius: 10px;
  padding: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
}

.date-box span {
  display: block;
  text-align: center;
  background-color: white;
}

.date-box .month {
  color: $indigo;
  font-size: 11px;
  font-weight: 700;
}

.date-box .date {
  font-size: 20px;
  font-weight: 900;
  color: $indigo;
}

.action {
  display: inline-flex;
  margin-top: auto;
  color: $indigo;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: $whisper;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid $indigo;
  border-radius: 10px;
}
.action span {
  background-color: $whisper;
}

.finished {
  position: absolute;
  top: 0;
  left: 0;
  background-color: $grey;
  color: white;
  font-size: 0.75em;
  font-weight: bold;
  padding: 8px 15px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 2;
  text-transform: uppercase;
}
</style>
