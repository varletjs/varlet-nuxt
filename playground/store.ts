export const locale = ref('en-US')

export function switchLocale() {
  const targetLocale = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  setLocale(targetLocale)
}

export const messages = ref({
  'zh-CN': Locale.zhCN,
  'en-US': Locale.enUS,
})

function setLocale(value: string) {
  locale.value = value

  Locale.add(value, messages.value[value as keyof typeof messages.value])
  Locale.use(value)
}
