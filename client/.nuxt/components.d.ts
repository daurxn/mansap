
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'ColorModeDropdown': typeof import("../components/ColorModeDropdown.vue")['default']
    'EditProfileDialog': typeof import("../components/EditProfileDialog.vue")['default']
    'UserDropdown': typeof import("../components/UserDropdown.vue")['default']
    'AppContainer': typeof import("../components/app/Container.vue")['default']
    'AppHeader': typeof import("../components/app/Header.vue")['default']
    'AppMain': typeof import("../components/app/Main.vue")['default']
    'AuthLoginForm': typeof import("../components/auth/LoginForm.vue")['default']
    'AuthSignupForm': typeof import("../components/auth/SignupForm.vue")['default']
    'FormSelectLocation': typeof import("../components/form/SelectLocation.vue")['default']
    'HomeHero': typeof import("../components/home/Hero.vue")['default']
    'HomeHeroDescription': typeof import("../components/home/HeroDescription.vue")['default']
    'HomeHeroHeading': typeof import("../components/home/HeroHeading.vue")['default']
    'HomeJobFilter': typeof import("../components/home/JobFilter.vue")['default']
    'HomeJobList': typeof import("../components/home/JobList.vue")['default']
    'HomeJobSearch': typeof import("../components/home/JobSearch.vue")['default']
    'HomeJobs': typeof import("../components/home/Jobs.vue")['default']
    'HomeJobsList': typeof import("../components/home/JobsList.vue")['default']
    'HomeJobsListItem': typeof import("../components/home/JobsListItem.vue")['default']
    'HomeJobsListResult': typeof import("../components/home/JobsListResult.vue")['default']
    'HomeLocaleSelect': typeof import("../components/home/LocaleSelect.vue")['default']
    'HomeLocationSelect': typeof import("../components/home/LocationSelect.vue")['default']
    'JobsApplyDialog': typeof import("../components/jobs/ApplyDialog.vue")['default']
    'JobsPostingsCreateEdit': typeof import("../components/jobs/PostingsCreateEdit.vue")['default']
    'JobsPostingsCreateEditForm': typeof import("../components/jobs/PostingsCreateEditForm.vue")['default']
    'JobsPostingsHeading': typeof import("../components/jobs/PostingsHeading.vue")['default']
    'JobsPostingsList': typeof import("../components/jobs/PostingsList.vue")['default']
    'ProfileCreateEditResumeDialog': typeof import("../components/profile/CreateEditResumeDialog.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'Card': typeof import("../components/ui/card/index")['Card']
    'CardAction': typeof import("../components/ui/card/index")['CardAction']
    'CardContent': typeof import("../components/ui/card/index")['CardContent']
    'CardDescription': typeof import("../components/ui/card/index")['CardDescription']
    'CardFooter': typeof import("../components/ui/card/index")['CardFooter']
    'CardHeader': typeof import("../components/ui/card/index")['CardHeader']
    'CardTitle': typeof import("../components/ui/card/index")['CardTitle']
    'Checkbox': typeof import("../components/ui/checkbox/index")['Checkbox']
    'Button': typeof import("../components/ui/button/index")['Button']
    'Dialog': typeof import("../components/ui/dialog/index")['Dialog']
    'DialogClose': typeof import("../components/ui/dialog/index")['DialogClose']
    'DialogContent': typeof import("../components/ui/dialog/index")['DialogContent']
    'DialogDescription': typeof import("../components/ui/dialog/index")['DialogDescription']
    'DialogFooter': typeof import("../components/ui/dialog/index")['DialogFooter']
    'DialogHeader': typeof import("../components/ui/dialog/index")['DialogHeader']
    'DialogOverlay': typeof import("../components/ui/dialog/index")['DialogOverlay']
    'DialogScrollContent': typeof import("../components/ui/dialog/index")['DialogScrollContent']
    'DialogTitle': typeof import("../components/ui/dialog/index")['DialogTitle']
    'DialogTrigger': typeof import("../components/ui/dialog/index")['DialogTrigger']
    'Command': typeof import("../components/ui/command/index")['Command']
    'CommandDialog': typeof import("../components/ui/command/index")['CommandDialog']
    'CommandEmpty': typeof import("../components/ui/command/index")['CommandEmpty']
    'CommandGroup': typeof import("../components/ui/command/index")['CommandGroup']
    'CommandInput': typeof import("../components/ui/command/index")['CommandInput']
    'CommandItem': typeof import("../components/ui/command/index")['CommandItem']
    'CommandList': typeof import("../components/ui/command/index")['CommandList']
    'CommandSeparator': typeof import("../components/ui/command/index")['CommandSeparator']
    'CommandShortcut': typeof import("../components/ui/command/index")['CommandShortcut']
    'Combobox': typeof import("../components/ui/combobox/index")['Combobox']
    'ComboboxAnchor': typeof import("../components/ui/combobox/index")['ComboboxAnchor']
    'ComboboxEmpty': typeof import("../components/ui/combobox/index")['ComboboxEmpty']
    'ComboboxGroup': typeof import("../components/ui/combobox/index")['ComboboxGroup']
    'ComboboxInput': typeof import("../components/ui/combobox/index")['ComboboxInput']
    'ComboboxItem': typeof import("../components/ui/combobox/index")['ComboboxItem']
    'ComboboxItemIndicator': typeof import("../components/ui/combobox/index")['ComboboxItemIndicator']
    'ComboboxList': typeof import("../components/ui/combobox/index")['ComboboxList']
    'ComboboxSeparator': typeof import("../components/ui/combobox/index")['ComboboxSeparator']
    'ComboboxViewport': typeof import("../components/ui/combobox/index")['ComboboxViewport']
    'ComboboxCancel': typeof import("../components/ui/combobox/index")['ComboboxCancel']
    'ComboboxTrigger': typeof import("../components/ui/combobox/index")['ComboboxTrigger']
    'Input': typeof import("../components/ui/input/index")['Input']
    'FormControl': typeof import("../components/ui/form/index")['FormControl']
    'FormDescription': typeof import("../components/ui/form/index")['FormDescription']
    'FormItem': typeof import("../components/ui/form/index")['FormItem']
    'FormLabel': typeof import("../components/ui/form/index")['FormLabel']
    'FormMessage': typeof import("../components/ui/form/index")['FormMessage']
    'FORMITEMINJECTIONKEY': typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
    'Form': typeof import("../components/ui/form/index")['Form']
    'FormField': typeof import("../components/ui/form/index")['FormField']
    'FormFieldArray': typeof import("../components/ui/form/index")['FormFieldArray']
    'Label': typeof import("../components/ui/label/index")['Label']
    'NavigationMenu': typeof import("../components/ui/navigation-menu/index")['NavigationMenu']
    'NavigationMenuContent': typeof import("../components/ui/navigation-menu/index")['NavigationMenuContent']
    'NavigationMenuIndicator': typeof import("../components/ui/navigation-menu/index")['NavigationMenuIndicator']
    'NavigationMenuItem': typeof import("../components/ui/navigation-menu/index")['NavigationMenuItem']
    'NavigationMenuLink': typeof import("../components/ui/navigation-menu/index")['NavigationMenuLink']
    'NavigationMenuList': typeof import("../components/ui/navigation-menu/index")['NavigationMenuList']
    'NavigationMenuTrigger': typeof import("../components/ui/navigation-menu/index")['NavigationMenuTrigger']
    'NavigationMenuViewport': typeof import("../components/ui/navigation-menu/index")['NavigationMenuViewport']
    'DropdownMenu': typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuCheckboxItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuLabel': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuRadioGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuRadioItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuSeparator': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuShortcut': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSub': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'DropdownMenuSubTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'DropdownMenuPortal': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'Select': typeof import("../components/ui/select/index")['Select']
    'SelectContent': typeof import("../components/ui/select/index")['SelectContent']
    'SelectGroup': typeof import("../components/ui/select/index")['SelectGroup']
    'SelectItem': typeof import("../components/ui/select/index")['SelectItem']
    'SelectItemText': typeof import("../components/ui/select/index")['SelectItemText']
    'SelectLabel': typeof import("../components/ui/select/index")['SelectLabel']
    'SelectScrollDownButton': typeof import("../components/ui/select/index")['SelectScrollDownButton']
    'SelectScrollUpButton': typeof import("../components/ui/select/index")['SelectScrollUpButton']
    'SelectSeparator': typeof import("../components/ui/select/index")['SelectSeparator']
    'SelectTrigger': typeof import("../components/ui/select/index")['SelectTrigger']
    'SelectValue': typeof import("../components/ui/select/index")['SelectValue']
    'RadioGroup': typeof import("../components/ui/radio-group/index")['RadioGroup']
    'RadioGroupItem': typeof import("../components/ui/radio-group/index")['RadioGroupItem']
    'Popover': typeof import("../components/ui/popover/index")['Popover']
    'PopoverAnchor': typeof import("../components/ui/popover/index")['PopoverAnchor']
    'PopoverContent': typeof import("../components/ui/popover/index")['PopoverContent']
    'PopoverTrigger': typeof import("../components/ui/popover/index")['PopoverTrigger']
    'Progress': typeof import("../components/ui/progress/index")['Progress']
    'ResizableHandle': typeof import("../components/ui/resizable/index")['ResizableHandle']
    'ResizablePanel': typeof import("../components/ui/resizable/index")['ResizablePanel']
    'ResizablePanelGroup': typeof import("../components/ui/resizable/index")['ResizablePanelGroup']
    'Toaster': typeof import("../components/ui/sonner/index")['Toaster']
    'TagsInput': typeof import("../components/ui/tags-input/index")['TagsInput']
    'TagsInputInput': typeof import("../components/ui/tags-input/index")['TagsInputInput']
    'TagsInputItem': typeof import("../components/ui/tags-input/index")['TagsInputItem']
    'TagsInputItemDelete': typeof import("../components/ui/tags-input/index")['TagsInputItemDelete']
    'TagsInputItemText': typeof import("../components/ui/tags-input/index")['TagsInputItemText']
    'Separator': typeof import("../components/ui/separator/index")['Separator']
    'Textarea': typeof import("../components/ui/textarea/index")['Textarea']
    'Tabs': typeof import("../components/ui/tabs/index")['Tabs']
    'TabsContent': typeof import("../components/ui/tabs/index")['TabsContent']
    'TabsList': typeof import("../components/ui/tabs/index")['TabsList']
    'TabsTrigger': typeof import("../components/ui/tabs/index")['TabsTrigger']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyColorModeDropdown': LazyComponent<typeof import("../components/ColorModeDropdown.vue")['default']>
    'LazyEditProfileDialog': LazyComponent<typeof import("../components/EditProfileDialog.vue")['default']>
    'LazyUserDropdown': LazyComponent<typeof import("../components/UserDropdown.vue")['default']>
    'LazyAppContainer': LazyComponent<typeof import("../components/app/Container.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../components/app/Header.vue")['default']>
    'LazyAppMain': LazyComponent<typeof import("../components/app/Main.vue")['default']>
    'LazyAuthLoginForm': LazyComponent<typeof import("../components/auth/LoginForm.vue")['default']>
    'LazyAuthSignupForm': LazyComponent<typeof import("../components/auth/SignupForm.vue")['default']>
    'LazyFormSelectLocation': LazyComponent<typeof import("../components/form/SelectLocation.vue")['default']>
    'LazyHomeHero': LazyComponent<typeof import("../components/home/Hero.vue")['default']>
    'LazyHomeHeroDescription': LazyComponent<typeof import("../components/home/HeroDescription.vue")['default']>
    'LazyHomeHeroHeading': LazyComponent<typeof import("../components/home/HeroHeading.vue")['default']>
    'LazyHomeJobFilter': LazyComponent<typeof import("../components/home/JobFilter.vue")['default']>
    'LazyHomeJobList': LazyComponent<typeof import("../components/home/JobList.vue")['default']>
    'LazyHomeJobSearch': LazyComponent<typeof import("../components/home/JobSearch.vue")['default']>
    'LazyHomeJobs': LazyComponent<typeof import("../components/home/Jobs.vue")['default']>
    'LazyHomeJobsList': LazyComponent<typeof import("../components/home/JobsList.vue")['default']>
    'LazyHomeJobsListItem': LazyComponent<typeof import("../components/home/JobsListItem.vue")['default']>
    'LazyHomeJobsListResult': LazyComponent<typeof import("../components/home/JobsListResult.vue")['default']>
    'LazyHomeLocaleSelect': LazyComponent<typeof import("../components/home/LocaleSelect.vue")['default']>
    'LazyHomeLocationSelect': LazyComponent<typeof import("../components/home/LocationSelect.vue")['default']>
    'LazyJobsApplyDialog': LazyComponent<typeof import("../components/jobs/ApplyDialog.vue")['default']>
    'LazyJobsPostingsCreateEdit': LazyComponent<typeof import("../components/jobs/PostingsCreateEdit.vue")['default']>
    'LazyJobsPostingsCreateEditForm': LazyComponent<typeof import("../components/jobs/PostingsCreateEditForm.vue")['default']>
    'LazyJobsPostingsHeading': LazyComponent<typeof import("../components/jobs/PostingsHeading.vue")['default']>
    'LazyJobsPostingsList': LazyComponent<typeof import("../components/jobs/PostingsList.vue")['default']>
    'LazyProfileCreateEditResumeDialog': LazyComponent<typeof import("../components/profile/CreateEditResumeDialog.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyCard': LazyComponent<typeof import("../components/ui/card/index")['Card']>
    'LazyCardAction': LazyComponent<typeof import("../components/ui/card/index")['CardAction']>
    'LazyCardContent': LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
    'LazyCardDescription': LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
    'LazyCardFooter': LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
    'LazyCardHeader': LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
    'LazyCardTitle': LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
    'LazyCheckbox': LazyComponent<typeof import("../components/ui/checkbox/index")['Checkbox']>
    'LazyButton': LazyComponent<typeof import("../components/ui/button/index")['Button']>
    'LazyDialog': LazyComponent<typeof import("../components/ui/dialog/index")['Dialog']>
    'LazyDialogClose': LazyComponent<typeof import("../components/ui/dialog/index")['DialogClose']>
    'LazyDialogContent': LazyComponent<typeof import("../components/ui/dialog/index")['DialogContent']>
    'LazyDialogDescription': LazyComponent<typeof import("../components/ui/dialog/index")['DialogDescription']>
    'LazyDialogFooter': LazyComponent<typeof import("../components/ui/dialog/index")['DialogFooter']>
    'LazyDialogHeader': LazyComponent<typeof import("../components/ui/dialog/index")['DialogHeader']>
    'LazyDialogOverlay': LazyComponent<typeof import("../components/ui/dialog/index")['DialogOverlay']>
    'LazyDialogScrollContent': LazyComponent<typeof import("../components/ui/dialog/index")['DialogScrollContent']>
    'LazyDialogTitle': LazyComponent<typeof import("../components/ui/dialog/index")['DialogTitle']>
    'LazyDialogTrigger': LazyComponent<typeof import("../components/ui/dialog/index")['DialogTrigger']>
    'LazyCommand': LazyComponent<typeof import("../components/ui/command/index")['Command']>
    'LazyCommandDialog': LazyComponent<typeof import("../components/ui/command/index")['CommandDialog']>
    'LazyCommandEmpty': LazyComponent<typeof import("../components/ui/command/index")['CommandEmpty']>
    'LazyCommandGroup': LazyComponent<typeof import("../components/ui/command/index")['CommandGroup']>
    'LazyCommandInput': LazyComponent<typeof import("../components/ui/command/index")['CommandInput']>
    'LazyCommandItem': LazyComponent<typeof import("../components/ui/command/index")['CommandItem']>
    'LazyCommandList': LazyComponent<typeof import("../components/ui/command/index")['CommandList']>
    'LazyCommandSeparator': LazyComponent<typeof import("../components/ui/command/index")['CommandSeparator']>
    'LazyCommandShortcut': LazyComponent<typeof import("../components/ui/command/index")['CommandShortcut']>
    'LazyCombobox': LazyComponent<typeof import("../components/ui/combobox/index")['Combobox']>
    'LazyComboboxAnchor': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxAnchor']>
    'LazyComboboxEmpty': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxEmpty']>
    'LazyComboboxGroup': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxGroup']>
    'LazyComboboxInput': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxInput']>
    'LazyComboboxItem': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxItem']>
    'LazyComboboxItemIndicator': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxItemIndicator']>
    'LazyComboboxList': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxList']>
    'LazyComboboxSeparator': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxSeparator']>
    'LazyComboboxViewport': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxViewport']>
    'LazyComboboxCancel': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxCancel']>
    'LazyComboboxTrigger': LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxTrigger']>
    'LazyInput': LazyComponent<typeof import("../components/ui/input/index")['Input']>
    'LazyFormControl': LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
    'LazyFormDescription': LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
    'LazyFormItem': LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
    'LazyFormLabel': LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
    'LazyFormMessage': LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
    'LazyFORMITEMINJECTIONKEY': LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
    'LazyForm': LazyComponent<typeof import("../components/ui/form/index")['Form']>
    'LazyFormField': LazyComponent<typeof import("../components/ui/form/index")['FormField']>
    'LazyFormFieldArray': LazyComponent<typeof import("../components/ui/form/index")['FormFieldArray']>
    'LazyLabel': LazyComponent<typeof import("../components/ui/label/index")['Label']>
    'LazyNavigationMenu': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenu']>
    'LazyNavigationMenuContent': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuContent']>
    'LazyNavigationMenuIndicator': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuIndicator']>
    'LazyNavigationMenuItem': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuItem']>
    'LazyNavigationMenuLink': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuLink']>
    'LazyNavigationMenuList': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuList']>
    'LazyNavigationMenuTrigger': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuTrigger']>
    'LazyNavigationMenuViewport': LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuViewport']>
    'LazyDropdownMenu': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
    'LazyDropdownMenuCheckboxItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
    'LazyDropdownMenuContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
    'LazyDropdownMenuGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
    'LazyDropdownMenuItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
    'LazyDropdownMenuLabel': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
    'LazyDropdownMenuRadioGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
    'LazyDropdownMenuRadioItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
    'LazyDropdownMenuSeparator': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
    'LazyDropdownMenuShortcut': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
    'LazyDropdownMenuSub': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
    'LazyDropdownMenuSubContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
    'LazyDropdownMenuSubTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
    'LazyDropdownMenuTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
    'LazyDropdownMenuPortal': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
    'LazySelect': LazyComponent<typeof import("../components/ui/select/index")['Select']>
    'LazySelectContent': LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
    'LazySelectGroup': LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
    'LazySelectItem': LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
    'LazySelectItemText': LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
    'LazySelectLabel': LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
    'LazySelectScrollDownButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
    'LazySelectScrollUpButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
    'LazySelectSeparator': LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
    'LazySelectTrigger': LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
    'LazySelectValue': LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
    'LazyRadioGroup': LazyComponent<typeof import("../components/ui/radio-group/index")['RadioGroup']>
    'LazyRadioGroupItem': LazyComponent<typeof import("../components/ui/radio-group/index")['RadioGroupItem']>
    'LazyPopover': LazyComponent<typeof import("../components/ui/popover/index")['Popover']>
    'LazyPopoverAnchor': LazyComponent<typeof import("../components/ui/popover/index")['PopoverAnchor']>
    'LazyPopoverContent': LazyComponent<typeof import("../components/ui/popover/index")['PopoverContent']>
    'LazyPopoverTrigger': LazyComponent<typeof import("../components/ui/popover/index")['PopoverTrigger']>
    'LazyProgress': LazyComponent<typeof import("../components/ui/progress/index")['Progress']>
    'LazyResizableHandle': LazyComponent<typeof import("../components/ui/resizable/index")['ResizableHandle']>
    'LazyResizablePanel': LazyComponent<typeof import("../components/ui/resizable/index")['ResizablePanel']>
    'LazyResizablePanelGroup': LazyComponent<typeof import("../components/ui/resizable/index")['ResizablePanelGroup']>
    'LazyToaster': LazyComponent<typeof import("../components/ui/sonner/index")['Toaster']>
    'LazyTagsInput': LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInput']>
    'LazyTagsInputInput': LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputInput']>
    'LazyTagsInputItem': LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputItem']>
    'LazyTagsInputItemDelete': LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputItemDelete']>
    'LazyTagsInputItemText': LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputItemText']>
    'LazySeparator': LazyComponent<typeof import("../components/ui/separator/index")['Separator']>
    'LazyTextarea': LazyComponent<typeof import("../components/ui/textarea/index")['Textarea']>
    'LazyTabs': LazyComponent<typeof import("../components/ui/tabs/index")['Tabs']>
    'LazyTabsContent': LazyComponent<typeof import("../components/ui/tabs/index")['TabsContent']>
    'LazyTabsList': LazyComponent<typeof import("../components/ui/tabs/index")['TabsList']>
    'LazyTabsTrigger': LazyComponent<typeof import("../components/ui/tabs/index")['TabsTrigger']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const ColorModeDropdown: typeof import("../components/ColorModeDropdown.vue")['default']
export const EditProfileDialog: typeof import("../components/EditProfileDialog.vue")['default']
export const UserDropdown: typeof import("../components/UserDropdown.vue")['default']
export const AppContainer: typeof import("../components/app/Container.vue")['default']
export const AppHeader: typeof import("../components/app/Header.vue")['default']
export const AppMain: typeof import("../components/app/Main.vue")['default']
export const AuthLoginForm: typeof import("../components/auth/LoginForm.vue")['default']
export const AuthSignupForm: typeof import("../components/auth/SignupForm.vue")['default']
export const FormSelectLocation: typeof import("../components/form/SelectLocation.vue")['default']
export const HomeHero: typeof import("../components/home/Hero.vue")['default']
export const HomeHeroDescription: typeof import("../components/home/HeroDescription.vue")['default']
export const HomeHeroHeading: typeof import("../components/home/HeroHeading.vue")['default']
export const HomeJobFilter: typeof import("../components/home/JobFilter.vue")['default']
export const HomeJobList: typeof import("../components/home/JobList.vue")['default']
export const HomeJobSearch: typeof import("../components/home/JobSearch.vue")['default']
export const HomeJobs: typeof import("../components/home/Jobs.vue")['default']
export const HomeJobsList: typeof import("../components/home/JobsList.vue")['default']
export const HomeJobsListItem: typeof import("../components/home/JobsListItem.vue")['default']
export const HomeJobsListResult: typeof import("../components/home/JobsListResult.vue")['default']
export const HomeLocaleSelect: typeof import("../components/home/LocaleSelect.vue")['default']
export const HomeLocationSelect: typeof import("../components/home/LocationSelect.vue")['default']
export const JobsApplyDialog: typeof import("../components/jobs/ApplyDialog.vue")['default']
export const JobsPostingsCreateEdit: typeof import("../components/jobs/PostingsCreateEdit.vue")['default']
export const JobsPostingsCreateEditForm: typeof import("../components/jobs/PostingsCreateEditForm.vue")['default']
export const JobsPostingsHeading: typeof import("../components/jobs/PostingsHeading.vue")['default']
export const JobsPostingsList: typeof import("../components/jobs/PostingsList.vue")['default']
export const ProfileCreateEditResumeDialog: typeof import("../components/profile/CreateEditResumeDialog.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const Card: typeof import("../components/ui/card/index")['Card']
export const CardAction: typeof import("../components/ui/card/index")['CardAction']
export const CardContent: typeof import("../components/ui/card/index")['CardContent']
export const CardDescription: typeof import("../components/ui/card/index")['CardDescription']
export const CardFooter: typeof import("../components/ui/card/index")['CardFooter']
export const CardHeader: typeof import("../components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../components/ui/card/index")['CardTitle']
export const Checkbox: typeof import("../components/ui/checkbox/index")['Checkbox']
export const Button: typeof import("../components/ui/button/index")['Button']
export const Dialog: typeof import("../components/ui/dialog/index")['Dialog']
export const DialogClose: typeof import("../components/ui/dialog/index")['DialogClose']
export const DialogContent: typeof import("../components/ui/dialog/index")['DialogContent']
export const DialogDescription: typeof import("../components/ui/dialog/index")['DialogDescription']
export const DialogFooter: typeof import("../components/ui/dialog/index")['DialogFooter']
export const DialogHeader: typeof import("../components/ui/dialog/index")['DialogHeader']
export const DialogOverlay: typeof import("../components/ui/dialog/index")['DialogOverlay']
export const DialogScrollContent: typeof import("../components/ui/dialog/index")['DialogScrollContent']
export const DialogTitle: typeof import("../components/ui/dialog/index")['DialogTitle']
export const DialogTrigger: typeof import("../components/ui/dialog/index")['DialogTrigger']
export const Command: typeof import("../components/ui/command/index")['Command']
export const CommandDialog: typeof import("../components/ui/command/index")['CommandDialog']
export const CommandEmpty: typeof import("../components/ui/command/index")['CommandEmpty']
export const CommandGroup: typeof import("../components/ui/command/index")['CommandGroup']
export const CommandInput: typeof import("../components/ui/command/index")['CommandInput']
export const CommandItem: typeof import("../components/ui/command/index")['CommandItem']
export const CommandList: typeof import("../components/ui/command/index")['CommandList']
export const CommandSeparator: typeof import("../components/ui/command/index")['CommandSeparator']
export const CommandShortcut: typeof import("../components/ui/command/index")['CommandShortcut']
export const Combobox: typeof import("../components/ui/combobox/index")['Combobox']
export const ComboboxAnchor: typeof import("../components/ui/combobox/index")['ComboboxAnchor']
export const ComboboxEmpty: typeof import("../components/ui/combobox/index")['ComboboxEmpty']
export const ComboboxGroup: typeof import("../components/ui/combobox/index")['ComboboxGroup']
export const ComboboxInput: typeof import("../components/ui/combobox/index")['ComboboxInput']
export const ComboboxItem: typeof import("../components/ui/combobox/index")['ComboboxItem']
export const ComboboxItemIndicator: typeof import("../components/ui/combobox/index")['ComboboxItemIndicator']
export const ComboboxList: typeof import("../components/ui/combobox/index")['ComboboxList']
export const ComboboxSeparator: typeof import("../components/ui/combobox/index")['ComboboxSeparator']
export const ComboboxViewport: typeof import("../components/ui/combobox/index")['ComboboxViewport']
export const ComboboxCancel: typeof import("../components/ui/combobox/index")['ComboboxCancel']
export const ComboboxTrigger: typeof import("../components/ui/combobox/index")['ComboboxTrigger']
export const Input: typeof import("../components/ui/input/index")['Input']
export const FormControl: typeof import("../components/ui/form/index")['FormControl']
export const FormDescription: typeof import("../components/ui/form/index")['FormDescription']
export const FormItem: typeof import("../components/ui/form/index")['FormItem']
export const FormLabel: typeof import("../components/ui/form/index")['FormLabel']
export const FormMessage: typeof import("../components/ui/form/index")['FormMessage']
export const FORMITEMINJECTIONKEY: typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
export const Form: typeof import("../components/ui/form/index")['Form']
export const FormField: typeof import("../components/ui/form/index")['FormField']
export const FormFieldArray: typeof import("../components/ui/form/index")['FormFieldArray']
export const Label: typeof import("../components/ui/label/index")['Label']
export const NavigationMenu: typeof import("../components/ui/navigation-menu/index")['NavigationMenu']
export const NavigationMenuContent: typeof import("../components/ui/navigation-menu/index")['NavigationMenuContent']
export const NavigationMenuIndicator: typeof import("../components/ui/navigation-menu/index")['NavigationMenuIndicator']
export const NavigationMenuItem: typeof import("../components/ui/navigation-menu/index")['NavigationMenuItem']
export const NavigationMenuLink: typeof import("../components/ui/navigation-menu/index")['NavigationMenuLink']
export const NavigationMenuList: typeof import("../components/ui/navigation-menu/index")['NavigationMenuList']
export const NavigationMenuTrigger: typeof import("../components/ui/navigation-menu/index")['NavigationMenuTrigger']
export const NavigationMenuViewport: typeof import("../components/ui/navigation-menu/index")['NavigationMenuViewport']
export const DropdownMenu: typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuCheckboxItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuLabel: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuRadioGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuRadioItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuSeparator: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuShortcut: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSub: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const DropdownMenuSubTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const DropdownMenuPortal: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const Select: typeof import("../components/ui/select/index")['Select']
export const SelectContent: typeof import("../components/ui/select/index")['SelectContent']
export const SelectGroup: typeof import("../components/ui/select/index")['SelectGroup']
export const SelectItem: typeof import("../components/ui/select/index")['SelectItem']
export const SelectItemText: typeof import("../components/ui/select/index")['SelectItemText']
export const SelectLabel: typeof import("../components/ui/select/index")['SelectLabel']
export const SelectScrollDownButton: typeof import("../components/ui/select/index")['SelectScrollDownButton']
export const SelectScrollUpButton: typeof import("../components/ui/select/index")['SelectScrollUpButton']
export const SelectSeparator: typeof import("../components/ui/select/index")['SelectSeparator']
export const SelectTrigger: typeof import("../components/ui/select/index")['SelectTrigger']
export const SelectValue: typeof import("../components/ui/select/index")['SelectValue']
export const RadioGroup: typeof import("../components/ui/radio-group/index")['RadioGroup']
export const RadioGroupItem: typeof import("../components/ui/radio-group/index")['RadioGroupItem']
export const Popover: typeof import("../components/ui/popover/index")['Popover']
export const PopoverAnchor: typeof import("../components/ui/popover/index")['PopoverAnchor']
export const PopoverContent: typeof import("../components/ui/popover/index")['PopoverContent']
export const PopoverTrigger: typeof import("../components/ui/popover/index")['PopoverTrigger']
export const Progress: typeof import("../components/ui/progress/index")['Progress']
export const ResizableHandle: typeof import("../components/ui/resizable/index")['ResizableHandle']
export const ResizablePanel: typeof import("../components/ui/resizable/index")['ResizablePanel']
export const ResizablePanelGroup: typeof import("../components/ui/resizable/index")['ResizablePanelGroup']
export const Toaster: typeof import("../components/ui/sonner/index")['Toaster']
export const TagsInput: typeof import("../components/ui/tags-input/index")['TagsInput']
export const TagsInputInput: typeof import("../components/ui/tags-input/index")['TagsInputInput']
export const TagsInputItem: typeof import("../components/ui/tags-input/index")['TagsInputItem']
export const TagsInputItemDelete: typeof import("../components/ui/tags-input/index")['TagsInputItemDelete']
export const TagsInputItemText: typeof import("../components/ui/tags-input/index")['TagsInputItemText']
export const Separator: typeof import("../components/ui/separator/index")['Separator']
export const Textarea: typeof import("../components/ui/textarea/index")['Textarea']
export const Tabs: typeof import("../components/ui/tabs/index")['Tabs']
export const TabsContent: typeof import("../components/ui/tabs/index")['TabsContent']
export const TabsList: typeof import("../components/ui/tabs/index")['TabsList']
export const TabsTrigger: typeof import("../components/ui/tabs/index")['TabsTrigger']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyColorModeDropdown: LazyComponent<typeof import("../components/ColorModeDropdown.vue")['default']>
export const LazyEditProfileDialog: LazyComponent<typeof import("../components/EditProfileDialog.vue")['default']>
export const LazyUserDropdown: LazyComponent<typeof import("../components/UserDropdown.vue")['default']>
export const LazyAppContainer: LazyComponent<typeof import("../components/app/Container.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/app/Header.vue")['default']>
export const LazyAppMain: LazyComponent<typeof import("../components/app/Main.vue")['default']>
export const LazyAuthLoginForm: LazyComponent<typeof import("../components/auth/LoginForm.vue")['default']>
export const LazyAuthSignupForm: LazyComponent<typeof import("../components/auth/SignupForm.vue")['default']>
export const LazyFormSelectLocation: LazyComponent<typeof import("../components/form/SelectLocation.vue")['default']>
export const LazyHomeHero: LazyComponent<typeof import("../components/home/Hero.vue")['default']>
export const LazyHomeHeroDescription: LazyComponent<typeof import("../components/home/HeroDescription.vue")['default']>
export const LazyHomeHeroHeading: LazyComponent<typeof import("../components/home/HeroHeading.vue")['default']>
export const LazyHomeJobFilter: LazyComponent<typeof import("../components/home/JobFilter.vue")['default']>
export const LazyHomeJobList: LazyComponent<typeof import("../components/home/JobList.vue")['default']>
export const LazyHomeJobSearch: LazyComponent<typeof import("../components/home/JobSearch.vue")['default']>
export const LazyHomeJobs: LazyComponent<typeof import("../components/home/Jobs.vue")['default']>
export const LazyHomeJobsList: LazyComponent<typeof import("../components/home/JobsList.vue")['default']>
export const LazyHomeJobsListItem: LazyComponent<typeof import("../components/home/JobsListItem.vue")['default']>
export const LazyHomeJobsListResult: LazyComponent<typeof import("../components/home/JobsListResult.vue")['default']>
export const LazyHomeLocaleSelect: LazyComponent<typeof import("../components/home/LocaleSelect.vue")['default']>
export const LazyHomeLocationSelect: LazyComponent<typeof import("../components/home/LocationSelect.vue")['default']>
export const LazyJobsApplyDialog: LazyComponent<typeof import("../components/jobs/ApplyDialog.vue")['default']>
export const LazyJobsPostingsCreateEdit: LazyComponent<typeof import("../components/jobs/PostingsCreateEdit.vue")['default']>
export const LazyJobsPostingsCreateEditForm: LazyComponent<typeof import("../components/jobs/PostingsCreateEditForm.vue")['default']>
export const LazyJobsPostingsHeading: LazyComponent<typeof import("../components/jobs/PostingsHeading.vue")['default']>
export const LazyJobsPostingsList: LazyComponent<typeof import("../components/jobs/PostingsList.vue")['default']>
export const LazyProfileCreateEditResumeDialog: LazyComponent<typeof import("../components/profile/CreateEditResumeDialog.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyCard: LazyComponent<typeof import("../components/ui/card/index")['Card']>
export const LazyCardAction: LazyComponent<typeof import("../components/ui/card/index")['CardAction']>
export const LazyCardContent: LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
export const LazyCardDescription: LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
export const LazyCardFooter: LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
export const LazyCardHeader: LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
export const LazyCardTitle: LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
export const LazyCheckbox: LazyComponent<typeof import("../components/ui/checkbox/index")['Checkbox']>
export const LazyButton: LazyComponent<typeof import("../components/ui/button/index")['Button']>
export const LazyDialog: LazyComponent<typeof import("../components/ui/dialog/index")['Dialog']>
export const LazyDialogClose: LazyComponent<typeof import("../components/ui/dialog/index")['DialogClose']>
export const LazyDialogContent: LazyComponent<typeof import("../components/ui/dialog/index")['DialogContent']>
export const LazyDialogDescription: LazyComponent<typeof import("../components/ui/dialog/index")['DialogDescription']>
export const LazyDialogFooter: LazyComponent<typeof import("../components/ui/dialog/index")['DialogFooter']>
export const LazyDialogHeader: LazyComponent<typeof import("../components/ui/dialog/index")['DialogHeader']>
export const LazyDialogOverlay: LazyComponent<typeof import("../components/ui/dialog/index")['DialogOverlay']>
export const LazyDialogScrollContent: LazyComponent<typeof import("../components/ui/dialog/index")['DialogScrollContent']>
export const LazyDialogTitle: LazyComponent<typeof import("../components/ui/dialog/index")['DialogTitle']>
export const LazyDialogTrigger: LazyComponent<typeof import("../components/ui/dialog/index")['DialogTrigger']>
export const LazyCommand: LazyComponent<typeof import("../components/ui/command/index")['Command']>
export const LazyCommandDialog: LazyComponent<typeof import("../components/ui/command/index")['CommandDialog']>
export const LazyCommandEmpty: LazyComponent<typeof import("../components/ui/command/index")['CommandEmpty']>
export const LazyCommandGroup: LazyComponent<typeof import("../components/ui/command/index")['CommandGroup']>
export const LazyCommandInput: LazyComponent<typeof import("../components/ui/command/index")['CommandInput']>
export const LazyCommandItem: LazyComponent<typeof import("../components/ui/command/index")['CommandItem']>
export const LazyCommandList: LazyComponent<typeof import("../components/ui/command/index")['CommandList']>
export const LazyCommandSeparator: LazyComponent<typeof import("../components/ui/command/index")['CommandSeparator']>
export const LazyCommandShortcut: LazyComponent<typeof import("../components/ui/command/index")['CommandShortcut']>
export const LazyCombobox: LazyComponent<typeof import("../components/ui/combobox/index")['Combobox']>
export const LazyComboboxAnchor: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxAnchor']>
export const LazyComboboxEmpty: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxEmpty']>
export const LazyComboboxGroup: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxGroup']>
export const LazyComboboxInput: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxInput']>
export const LazyComboboxItem: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxItem']>
export const LazyComboboxItemIndicator: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxItemIndicator']>
export const LazyComboboxList: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxList']>
export const LazyComboboxSeparator: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxSeparator']>
export const LazyComboboxViewport: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxViewport']>
export const LazyComboboxCancel: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxCancel']>
export const LazyComboboxTrigger: LazyComponent<typeof import("../components/ui/combobox/index")['ComboboxTrigger']>
export const LazyInput: LazyComponent<typeof import("../components/ui/input/index")['Input']>
export const LazyFormControl: LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
export const LazyFormDescription: LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
export const LazyFormItem: LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
export const LazyFormLabel: LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
export const LazyFormMessage: LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
export const LazyFORMITEMINJECTIONKEY: LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
export const LazyForm: LazyComponent<typeof import("../components/ui/form/index")['Form']>
export const LazyFormField: LazyComponent<typeof import("../components/ui/form/index")['FormField']>
export const LazyFormFieldArray: LazyComponent<typeof import("../components/ui/form/index")['FormFieldArray']>
export const LazyLabel: LazyComponent<typeof import("../components/ui/label/index")['Label']>
export const LazyNavigationMenu: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenu']>
export const LazyNavigationMenuContent: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuContent']>
export const LazyNavigationMenuIndicator: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuIndicator']>
export const LazyNavigationMenuItem: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuItem']>
export const LazyNavigationMenuLink: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuLink']>
export const LazyNavigationMenuList: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuList']>
export const LazyNavigationMenuTrigger: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuTrigger']>
export const LazyNavigationMenuViewport: LazyComponent<typeof import("../components/ui/navigation-menu/index")['NavigationMenuViewport']>
export const LazyDropdownMenu: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
export const LazyDropdownMenuCheckboxItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
export const LazyDropdownMenuContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
export const LazyDropdownMenuGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
export const LazyDropdownMenuItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
export const LazyDropdownMenuLabel: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
export const LazyDropdownMenuRadioGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
export const LazyDropdownMenuRadioItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
export const LazyDropdownMenuSeparator: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
export const LazyDropdownMenuShortcut: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
export const LazyDropdownMenuSub: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
export const LazyDropdownMenuSubContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
export const LazyDropdownMenuSubTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
export const LazyDropdownMenuTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
export const LazyDropdownMenuPortal: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
export const LazySelect: LazyComponent<typeof import("../components/ui/select/index")['Select']>
export const LazySelectContent: LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
export const LazySelectGroup: LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
export const LazySelectItem: LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
export const LazySelectItemText: LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
export const LazySelectLabel: LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
export const LazySelectScrollDownButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
export const LazySelectScrollUpButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
export const LazySelectSeparator: LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
export const LazySelectTrigger: LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
export const LazySelectValue: LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
export const LazyRadioGroup: LazyComponent<typeof import("../components/ui/radio-group/index")['RadioGroup']>
export const LazyRadioGroupItem: LazyComponent<typeof import("../components/ui/radio-group/index")['RadioGroupItem']>
export const LazyPopover: LazyComponent<typeof import("../components/ui/popover/index")['Popover']>
export const LazyPopoverAnchor: LazyComponent<typeof import("../components/ui/popover/index")['PopoverAnchor']>
export const LazyPopoverContent: LazyComponent<typeof import("../components/ui/popover/index")['PopoverContent']>
export const LazyPopoverTrigger: LazyComponent<typeof import("../components/ui/popover/index")['PopoverTrigger']>
export const LazyProgress: LazyComponent<typeof import("../components/ui/progress/index")['Progress']>
export const LazyResizableHandle: LazyComponent<typeof import("../components/ui/resizable/index")['ResizableHandle']>
export const LazyResizablePanel: LazyComponent<typeof import("../components/ui/resizable/index")['ResizablePanel']>
export const LazyResizablePanelGroup: LazyComponent<typeof import("../components/ui/resizable/index")['ResizablePanelGroup']>
export const LazyToaster: LazyComponent<typeof import("../components/ui/sonner/index")['Toaster']>
export const LazyTagsInput: LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInput']>
export const LazyTagsInputInput: LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputInput']>
export const LazyTagsInputItem: LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputItem']>
export const LazyTagsInputItemDelete: LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputItemDelete']>
export const LazyTagsInputItemText: LazyComponent<typeof import("../components/ui/tags-input/index")['TagsInputItemText']>
export const LazySeparator: LazyComponent<typeof import("../components/ui/separator/index")['Separator']>
export const LazyTextarea: LazyComponent<typeof import("../components/ui/textarea/index")['Textarea']>
export const LazyTabs: LazyComponent<typeof import("../components/ui/tabs/index")['Tabs']>
export const LazyTabsContent: LazyComponent<typeof import("../components/ui/tabs/index")['TabsContent']>
export const LazyTabsList: LazyComponent<typeof import("../components/ui/tabs/index")['TabsList']>
export const LazyTabsTrigger: LazyComponent<typeof import("../components/ui/tabs/index")['TabsTrigger']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
