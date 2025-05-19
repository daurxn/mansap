import { describe, it, expect, mock } from 'bun:test'
import { render, screen } from '@testing-library/vue'
import HeroHeading from '~/components/home/HeroHeading.vue'

// Mock the i18n composable
const mockT = mock((key: string) => key === 'home.hero_title' ? 'Mocked Hero Title' : key)

describe('HeroHeading.vue', () => {
  it('renders with correct content and classes', () => {
    render(HeroHeading, {
      global: {
        mocks: {
          $t: mockT
        }
      }
    })

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeDefined()
    expect(heading.textContent).toBe('Mocked Hero Title')
    expect(mockT).toHaveBeenCalledWith('home.hero_title')

    const expectedClasses = [
      'text-4xl',
      'mx-auto',
      'text-center',
      'mb-4',
      'font-medium',
      'w-[28rem]',
      'leading-11'
    ]

    expectedClasses.forEach(className => {
      expect(heading.classList.contains(className)).toBe(true)
    })
  })
})
