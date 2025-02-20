<script lang="ts">
import { defineComponent } from 'vue'
import type { CelebrationWithPictureAndAuthor } from '~/types'

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
      type: Array as PropType<CelebrationWithPictureAndAuthor[]>,
      required: true,
    },
    userId: {
      type: String,
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
    v-if="celebrations && formattedCelebrations.length > 0"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-3"
  >
    <div
      v-for="celebration in formattedCelebrations"
      :key="celebration.celebrationId"
      class="parent"
    >
      <div class="card ">
        <div
          class="card-image"
          :style="{ backgroundImage: `url(${celebration.celebrationType.picture})` }"
        />
        <div class="title">
          <div class="category line-clamp-2">
            {{ celebration.name }}
          </div>
          <NuxtLink :to="`/celebrationadmin/${celebration.celebrationId}`">
            <button
              v-if="celebration.author.id === userId"
              class="edit-button"
            >
              <svg
                class="edit-svgIcon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                />
              </svg>
            </button>
          </NuxtLink>
        </div>
        <div class="date-box">
          <span class="date">{{ celebration.dateDay }}</span>
          <span class="month">{{ celebration.dateMonth }}</span>
        </div>
        <div class="heading line-clamp-3">
          {{ celebration.description }}
        </div>
        <a
          class="action place-content-between"
          :href="`/celebration/${celebration.celebrationId}`"
        >
          {{ $t("welcome.event_link") }}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
  <div v-else>
    <p>{{ $t("celebration.no-celebration-created") }}</p>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(100% - 2rem);
  width: 280px;
  max-width: 300px;
  height: auto;
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
  height: 46px;
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
  height: 70px;
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
  font-size: 0.8rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: $tangerine;
  padding: 4px 8px;
  border-radius: 10px;
  border: 1px solid $indigo;
}
.action span {
  background-color: $tangerine;
}

.edit-button {
  background-color: $tangerine;
  width: 29px;
  height: 29px;
  border-radius: 10px;
  border: 1px solid $indigo;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  text-decoration: none !important;
  margin-top: 9px;
}
.edit-svgIcon {
  width: 17px;
}
.edit-svgIcon path {
  fill: $indigo;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
