<script lang="ts" setup>
import IndexByCarousel from "./components/IndexByCarousel.vue";
import IndexByProductInfo from "./components/IndexByProductInfo.vue";

const {data: page} = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <!--    轮播图-->
    <div style="height: 560px;">
      <index-by-carousel></index-by-carousel>
    </div>

    <UPageSection
      id="features"
      :description="page.features.description"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left'
      }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]"/>
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]"/>
      <template #title>
        <MDC
          :value="page.features.title"
          class="*:leading-9"
        />
        <div class="hidden @min-[1020px]:block">
          <UColorModeImage
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[70%]"
            dark="/images/dark/line-2.svg"
            light="/images/light/line-2.svg"
          />
        </div>
      </template>
      <!--产品介绍-->
      <template #body>
        <div class="p-[20px] w-[100%] bg-[var(--ui-color-primary-100)] rounded-sm">
          <index-by-product-info></index-by-product-info>
        </div>

      </template>

    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }"/>

    <UPageSection
      id="steps"
      :description="page.steps.description"
      class="relative overflow-hidden"
    >
      <template #headline>
        <UColorModeImage
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
          dark="/images/dark/line-3.svg"
          light="/images/light/line-3.svg"
        />
      </template>
      <template #title>
        <MDC :value="page.steps.title"/>
      </template>

      <template #features>
        <UPageCard
          v-for="(step, index) in page.steps.items"
          :key="index"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
          class="group"
        >
          <UColorModeImage
            v-if="step.image"
            :alt="step.title"
            :dark="step.image?.dark"
            :light="step.image?.light"
            class="size-full"
          />

          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">
              {{ step.title }}
            </span>
            <span class="text-sm text-muted">
              {{ step.description }}
            </span>
          </div>
        </UPageCard>
      </template>
    </UPageSection>

    <UPageSection
      id="pricing"
      :description="page.pricing.description"
      :plans="page.pricing.plans"
      :title="page.pricing.title"
      :ui="{ title: 'text-left @container relative', description: 'text-left' }"
      class="mb-32 overflow-hidden"
    >
      <template #title>
        <MDC :value="page.pricing.title"/>

        <div class="hidden @min-[1120px]:block">
          <UColorModeImage
            class="absolute top-0 right-0 size-full transform translate-x-[60%]"
            dark="/images/dark/line-4.svg"
            light="/images/light/line-4.svg"
          />
        </div>
      </template>

      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          :billing-cycle="plan.billing_cycle"
          :billing-period="plan.billing_period"
          :button="plan.button"
          :description="plan.description"
          :features="plan.features"
          :highlight="plan.highlight"
          :price="plan.price"
          :scale="plan.highlight"
          :title="plan.title"
          variant="soft"
        />
      </UPricingPlans>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
      :title="page.testimonials.title"
    >
      <template #headline>
        <UColorModeImage
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
          dark="/images/dark/line-5.svg"
          light="/images/light/line-5.svg"
        />
      </template>
      <template #title>
        <MDC :value="page.testimonials.title"/>
      </template>

      <UContainer>
        <UPageColumns class="xl:columns-3">
          <UPageCard
            v-for="(testimonial, index) in page.testimonials.items"
            :key="index"
            :description="testimonial.quote"
            :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
            variant="subtle"
          >
            <template #footer>
              <UUser
                size="xl"
                v-bind="testimonial.user"
              />
            </template>
          </UPageCard>
        </UPageColumns>
      </UContainer>
    </UPageSection>

    <USeparator/>

    <UPageCTA
      class="overflow-hidden @container"
      v-bind="page.cta"
      variant="naked"
    >
      <template #title>
        <MDC :value="page.cta.title"/>

        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            class="absolute left-10 -top-10 sm:top-0 h-full"
            dark="/images/dark/line-6.svg"
            light="/images/light/line-6.svg"
          />
          <UColorModeImage
            class="absolute right-0 bottom-0 h-full"
            dark="/images/dark/line-7.svg"
            light="/images/light/line-7.svg"
          />
        </div>
      </template>

      <LazyStarsBg/>
    </UPageCTA>
  </div>
</template>
