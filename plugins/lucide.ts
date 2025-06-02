import { h } from 'vue'
import type { FunctionalComponent } from 'vue'
import type { LucideProps } from 'lucide-vue-next'
import {
  MapPin,
  Phone,
  Mail,
  Redo2,
  ChevronDown,
} from 'lucide-vue-next'

function withBlueColor(Component: FunctionalComponent<LucideProps>) {
  return (props: LucideProps, ctx: any) =>
    h(Component, { ...props, color: '#1078D7' }, ctx.slots)
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LucideMapPin', MapPin)
  nuxtApp.vueApp.component('LucidePhone', Phone)
  nuxtApp.vueApp.component('LucideMail', Mail)
  nuxtApp.vueApp.component('LucideRedo2', Redo2)
  nuxtApp.vueApp.component('LucideChevronDown', ChevronDown)

  nuxtApp.vueApp.component('LucideMapPinBlue', withBlueColor(MapPin))
  nuxtApp.vueApp.component('LucidePhoneBlue', withBlueColor(Phone))
  nuxtApp.vueApp.component('LucideMailBlue', withBlueColor(Mail))
  nuxtApp.vueApp.component('LucideRedo2Blue', withBlueColor(Redo2))
  nuxtApp.vueApp.component('LucideChevronDownBlue', withBlueColor(ChevronDown))
})
