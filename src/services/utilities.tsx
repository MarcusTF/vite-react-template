import { ClassValue, clsx } from "clsx"

/**
 * Generates BEM class names with modifiers using clsx
 * @param className - The base class name(s).
 * @param modifier - The modifier(s) to append to the class name(s).
 * @returns The BEM class names with modifiers.
 * @example
 * bemModifiers("button", "primary") // "button button--primary"
 * bemModifiers(["button", "my-button"], "primary") // "button button--primary my-button my-button--primary"
 * bemModifiers("button", ["primary", "large"]) // "button button--primary button--large"
 */
export const bemModifiers = (className?: ClassValue[] | ClassValue, modifier?: ClassValue[] | ClassValue) => {
  if (!modifier) return clsx(className)
  const classNames = clsx(className).split(" ").filter(Boolean)
  const modifiers = clsx(modifier).split(" ").filter(Boolean)
  if (classNames.length === 0 || classNames?.[0] === "") return ""
  if (modifiers.length === 0 || classNames?.[0] === "") return clsx(classNames)
  return classNames.map(item => `${item} ${modifiers.map(mod => `${item}--${mod}`).join(" ")}`).join(" ")
}

/**
 * Generates BEM element class names using clsx
 * @param className - The base class name(s).
 * @param element - The element to append to the class name(s).
 * @returns The BEM class names with elements.
 * @example
 * bemElements("button", "icon") // "button__icon"
 * bemElements(["button", "my-button"], "icon") // "button__icon my-button__icon"
 */
export const bemElements = (className?: ClassValue[] | ClassValue, element?: string) => {
  const classNames = clsx(className).split(" ").filter(Boolean)
  const elements = clsx(element).split(" ").filter(Boolean)
  if (classNames.length === 0) return ""
  if (elements.length === 0) return clsx(classNames)
  return classNames.map(item => `${elements.map(element => `${item}__${element}`).join(" ")}`).join(" ")
}

/**
 * Generate current time with AM:PM
 * @returns The current local time
 * @example
 * currentTime() // 10:30 AM
 */
export const currentTime = (): string =>
  new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })

export const required = (value: string | number | null | boolean | undefined) => (value ? undefined : "Required")

/**
 * Get the page buttons and total number of pages to show based on the total number of items,
 * the amount of items per page, and the current page.
 *
 * @param total - The total number of items
 * @param amountPerPage - The amount of items per page
 * @param page - The current page
 * @returns An object containing the page button numbers and total number of pages
 *
 * @example
 * getPages(100, 10, 1) // { pageButtons: [1, 2, 3, 4, 5, 6, 7], totalPages: 10 }
 */
export function getPages(total: number, amountPerPage: number, page: number) {
  const totalPages = Math.ceil(total / amountPerPage)
  const maxPagesToShow = 7
  const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2)

  let firstPageOfGroup: number, lastPageOfGroup: number

  if (totalPages <= maxPagesToShow) {
    // If total pages are less or equal to maxPagesToShow, show all pages
    firstPageOfGroup = 1
    lastPageOfGroup = totalPages
  } else {
    // If we're on the first halfMaxPagesToShow pages
    if (page <= halfMaxPagesToShow) {
      firstPageOfGroup = 1
      lastPageOfGroup = maxPagesToShow
    } else if (page > totalPages - halfMaxPagesToShow) {
      // If we're on the last halfMaxPagesToShow pages
      firstPageOfGroup = totalPages - maxPagesToShow + 1
      lastPageOfGroup = totalPages
    } else {
      // We're somewhere in the middle
      firstPageOfGroup = page - halfMaxPagesToShow
      lastPageOfGroup = page + halfMaxPagesToShow
    }
  }

  const pageButtons = Array.from({ length: lastPageOfGroup - firstPageOfGroup + 1 }, (_, i) => i + firstPageOfGroup)
  if (pageButtons.length === 0) pageButtons.push(1)
  return { pageButtons, totalPages }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- This is a debug function
export const debugLog = (data?: any, level: "log" | "error" | "warn" = "log") => {
  if (process.env.NODE_ENV === "development") {
    console[level](data)
  }
}
