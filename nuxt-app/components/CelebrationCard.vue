<script setup lang="ts">
interface Celebration {
  name: string
  description: string
  author: string
  date: string
  hour: string
  location: string
}

const runtimeConfig = useRuntimeConfig()
const { data: celebration, error } = await useFetch<Celebration>(() => `${runtimeConfig.public.apiUrl}/celebration/6597f938-9e05-4015-b62b-4468d042869e`)

if (error.value) {
  console.error('Failed to fetch celebration data', error.value)
}

const getMonth = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'long' });
};

const getDay = (dateString: string) => {
  const date = new Date(dateString);
  return date.getDate();
};

const dateMonth = computed(() => celebration.value ? getMonth(celebration.value.date) : '');
const dateDay = computed(() => celebration.value ? getDay(celebration.value.date) : '');
</script>

<template>
<div class="parent">
    <div class="card">
        <div class="card-image"></div>
        <div class="category"> {{ celebration?.name }} </div>
        <div class="date-box">
            <span class="date">{{ dateDay }}</span>
            <span class="month">{{ dateMonth }}</span>
        </div>
        <div class="heading"> {{ celebration?.description }}</div>
        <a class="action" href="#">
            Go to the event page
            <span aria-hidden="true">→</span>
        </a>
    </div>
</div>
</template>

<style  lang="scss" scoped>
.parent {
  width: 260px;
  padding: 35px;
  perspective: 1000px;
}

.date-box {
  position: absolute;
  top: 30px;
  right: 30px;
  height: 60px;
  width: 60px;
  background: white;
  border: 1px solid $tangerine;
  border-radius: 10px;
  padding: 5px;
  transform: translate3d(0px, 0px, 80px);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
}

.date-box span {
  display: block;
  text-align: center;
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
.card {
  width: 190px;
  background: white;
  padding: 0.5em;
  border-radius: 6px;
  border: 1px solid $indigo;
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 130px;
  border-radius: 6px 6px 0 0;
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
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  color: $grey;
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}

.action {
  display: inline-flex;
  margin-top: 1rem;
  color: #180161;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: $tangerine;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>