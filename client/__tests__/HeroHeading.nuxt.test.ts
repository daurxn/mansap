import { describe, it, expect, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import HeroHeading from "~/components/home/HeroHeading.vue";

describe("HeroTitle.vue", () => {
  const mockTranslatedText = "Mocked Hero Title";

  it("renders the h1 element", async () => {
    const wrapper = await mountSuspended(HeroHeading, {
      global: {
        mocks: {
          $t: (key: string) =>
            key === "home.hero_title" ? mockTranslatedText : key,
        },
      },
    });

    const heading = wrapper.find("h1");
    expect(heading.exists()).toBe(true);
  });

  it("displays the translated hero title", async () => {
    const wrapper = await mountSuspended(HeroHeading, {
      global: {
        mocks: {
          $t: (key: string) =>
            key === "home.hero_title" ? mockTranslatedText : key,
        },
      },
    });

    const heading = wrapper.find("h1");
    expect(heading.text()).toBe(mockTranslatedText);
  });

  it("applies all the correct CSS classes to the h1 element", async () => {
    const tMock = vi.fn().mockImplementation((key) => {
      if (key === "home.hero_title") {
        return mockTranslatedText;
      }
      return key;
    });

    const wrapper = await mountSuspended(HeroHeading, {
      global: {
        mocks: {
          $t: tMock,
        },
      },
    });

    const heading = wrapper.find("h1");
    expect(heading.exists()).toBe(true);

    const expectedClasses = [
      "text-4xl",
      "mx-auto",
      "text-center",
      "mb-4",
      "font-medium",
      "w-[28rem]",
      "leading-11",
    ];

    // Get the actual classes from the wrapper
    const actualClasses = heading.classes();

    // Check that all expected classes are present
    expectedClasses.forEach((className) => {
      expect(actualClasses).toContain(className);
    });

    // Verify no unexpected classes are present
    expect(actualClasses.length).toBe(expectedClasses.length);
  });

  it("calls the $t function with the correct key", async () => {
    const tMock = vi.fn().mockReturnValue(mockTranslatedText);

    await mountSuspended(HeroHeading, {
      global: {
        mocks: {
          $t: tMock,
        },
      },
    });

    expect(tMock).toHaveBeenCalledTimes(1);
    expect(tMock).toHaveBeenCalledWith("home.hero_title");
  });
});
