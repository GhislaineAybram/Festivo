/**
 * @file components/FooterPage.test.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This file contains unit tests for the footer.
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterPage from '@/components/FooterPage.vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'

describe('FooterPage.vue', () => {
  const wrapper = mount(FooterPage, {
    global: {
      stubs: {
        NuxtLink: true,
      },
    },
  })

  it('renders the footer component', () => {
    expect(wrapper.find('#footer').exists()).toBe(true)
  })

  it('contains a link to the About page', () => {
    const aboutLink = wrapper.findComponent({ name: 'NuxtLink', props: { to: '/about' } })
    expect(aboutLink.exists()).toBe(true)
  })

  it('contains a link to the Legal page', () => {
    const legalLink = wrapper.findComponent({ name: 'NuxtLink', props: { to: '/legal' } })
    expect(legalLink.exists()).toBe(true)
  })

  it('contains a link to the Privacy page', () => {
    const privacyLink = wrapper.findComponent({ name: 'NuxtLink', props: { to: '/privacy' } })
    expect(privacyLink.exists()).toBe(true)
  })

  it('displays the GitHub icon', () => {
    expect(wrapper.findComponent(IconGitHub).exists()).toBe(true)
  })
})
