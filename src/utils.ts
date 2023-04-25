import * as varletComponents from '@varlet/ui'

export function getComponents () {
  return Object.keys(varletComponents).filter((key) => {
    return /^([A-Z]{1}[a-z]+){1,3}$/.test(key)
  })
}
